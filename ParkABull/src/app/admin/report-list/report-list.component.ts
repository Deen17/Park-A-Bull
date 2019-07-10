import { Component, OnInit, ViewChild, ElementRef, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from "tns-core-modules/application"
import { getRootView } from "tns-core-modules/application";
import { Report, ReportService } from '../report.service'
import { Button } from 'tns-core-modules/ui/button'
import { EventData } from "tns-core-modules/data/observable";
import { SearchBar } from 'tns-core-modules/ui/search-bar';
import { PromptOptions, inputType, capitalizationType, action } from 'tns-core-modules/ui/dialogs';
import { localUrl, url } from '../../../../db/config'
import { request, HttpResponse } from "tns-core-modules/http"


@Component({
  selector: 'ns-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css'],
  moduleId: module.id,
  //changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReportListComponent implements OnInit {
  reports: Array<Report>;
  searchPhrase: string = ""
  constructor(
    private routerExtensions: RouterExtensions,
    private reportService: ReportService,
    //private ref: ChangeDetectorRef
  ) { }

  async ngOnInit() {
    console.log("report list component initiated")
    this.reports = await this.reportService.fetch();
    console.log('fetched reports,', this.reports)
    //this.ref.markForCheck;
  }

  onSubmit(args) {
    let searchBar = <SearchBar>args.object;
    this.searchPhrase = searchBar.text;
    if (this.searchPhrase == '') {
      this.reports = this.reportService.getReports();
    }
    else if (this.searchPhrase.toLowerCase().indexOf('lot:') == 0)
      this.reports = this.reportService.filterReportsByLotName(this.searchPhrase.substring(4))
    else if (this.searchPhrase.toLowerCase().indexOf('name:') == 0)
      this.reports = this.reportService.filterReportsByReporterLastName(this.searchPhrase.substring(5))
  }

  onClear(args) {
    this.reports = this.reportService.getReports();
  }

  public async onTap(args: EventData, i: number) {
    let btn = <Button>args.object
    let options = {
      title: "Report Status",
      message: "Choose what to do with this report",
      cancelButtonText: "cancel",
      actions: ["reviewed", "rejected", "accepted"]
    };

    let result = await action(options)
    if (result != 'cancel')
      this.updateReport(i, result);
  }

  public async updateReport(i: number, result: string) {
    let link = `${localUrl}updatereport`
    try {
      let response: HttpResponse =
        await request({
          url: link,
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          content: JSON.stringify({
            reportID: this.reports[i].reportID,
            reportStatus: result
          })
        })
      this.reports = await this.reportService.fetch()
    } catch (error) {
      console.log(error)
    }
  }

  public onDrawerButtonTap() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
