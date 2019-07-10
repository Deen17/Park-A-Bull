import { Injectable } from "@angular/core";
import { localUrl, url } from "../../../db/config";
import { request, HttpResponse } from "tns-core-modules/http"
import {Lot} from './lot'
const R = require('ramda')


export class User {
    public userID: number;
    public unumber: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public userType: string;
    public isValid: boolean;
    constructor(
        userID, unumber, firstName, lastName, email, userType, isValid
    ) {
        this.userID = userID;
        this.unumber = unumber;
        if(firstName == null)
            this.firstName = "Unknown"
        else
            this.firstName = firstName;
        if(lastName == null)
            this.lastName = '';
        else
            this.lastName = lastName;
        this.email = email;
        this.userType = userType;
        this.isValid = isValid;
    }
}

export class Report {
    public reportID: number;
    public reservationID: number;
    public reporterID: number;
    public reporteeID: number;
    public reporter: User;
    public reportee: User;
    public reporteeLicensePlate: string;
    public image: string;
    public adminID: number;
    public reportStatus: string;
    public created: Date;
    public spotLabel: string;
    public lotName: string;

    constructor(
        reportID: number,
        reservationID: number,
        reporterID: number,
        reporteeID: number,
        reporter: User,
        reportee: User,
        reporteeLicensePlate: string,
        image: string,
        adminID: number,
        reportStatus: string,
        created: Date,
        spotLabel: string,
        lotName: string
    ) {
        this.reportID = reportID;
        this.reservationID = reservationID;
        this.reporterID = reporterID;
        this.reporteeID = reporteeID;
        this.reporter = reporter;
        this.reportee = reportee;
        this.reporteeLicensePlate = reporteeLicensePlate;
        this.image = image;
        this.adminID = adminID;
        this.reportStatus = reportStatus;
        this.created = created;
        this.spotLabel = spotLabel;
        this.lotName = lotName;
    }
    public getText(){
        let text = 
            `Report ${this.reportID}\tResID: ${this.reservationID}\nReporter: ${this.reporter.firstName} ${this.reporter.lastName}\tLot: ${this.lotName}\nReportee: ${this.reportee.firstName == null ? 'Unknown' : this.reportee.firstName} ${this.reportee.lastName == null ? '' : this.reportee.lastName}\nSpot: ${this.spotLabel}\nDate: ${this.created.toString()}\tPlate: ${this.reporteeLicensePlate}`
        return text;
    }
}

@Injectable({
    providedIn: 'root'
})
export class ReportService {
    reports: Array<Report> = [];

    constructor() {

    }

    public clean() {
        this.reports = [];
    }

    public async fetch(): Promise<Array<Report>> {
        this.clean();
        let link = `${localUrl}getreports`
        try {
            let response: HttpResponse =
                await request({
                    url: link,
                    method: 'GET'
                })
            let rows = response.content.toJSON();
            rows.forEach(async element => {
                let reportee = null;
                if(element.reportee_user_id != null)
                    reportee = await this.getUserByID(element.reportee_user_id);
                else reportee = new User(
                    null,
                    null,
                    'Unknown',
                    '',
                    null,
                    null,
                    null
                )
                let reporter = await this.getUserByID(element.reporter_user_id);
                let spot = await this.getLotByReservationId(element.reservation_id);
                let temp: Report = new Report(
                    element.violation_report_id,
                    element.reservation_id,
                    element.reporter_user_id,
                    element.reportee_user_id,
                    reporter,
                    reportee,
                    element.reportee_license_plate,
                    element.image,
                    element.admin_id,
                    element.report_status,
                    element.creation_dt_tm,
                    spot[0].spot_label,
                    spot[0].lot_name
                )
                this.reports.push(temp)
                console.log(element.violation_report_id, '|' + element.report_status + '|')
            });
            return this.reports;
        } catch (e) {
            console.log(e)
        }
    }

    public getReports() {
        return this.reports;
    }

    public async getUserByID(id: number): Promise<User> {
        let link = `${localUrl}getuserbyid/${id}`
        try {
            let response = await request({
                url: link,
                method: 'GET'
            })
            let row = response.content.toJSON()[0];
            return new User(
                row.user_id,
                row.unumber,
                row.first_name,
                row.last_name,
                row.email,
                row.user_type,
                row.is_valid
            )
        } catch (e) {
            console.log(e)
        }
    }

    public async getLotByReservationId(lotid: number){
        let link = `${localUrl}getlotbyreservationid/${lotid}`
        try {
            let response: HttpResponse = 
                await request({
                    url: link,
                    method: 'GET'
                })
            let row = response.content.toJSON()[0];
            return row;
        } catch (error) {
            console.log(error)
        }
    }


    public getReportsByReporteeLastName(lastName: string): Array<Report> {
        return R.pipe(
            R.filter(report => report.reportee.lastName == lastName)
        )(this.reports)
    }

    public getReportsByStatus(status: string): Array<Report> {
        return R.pipe(
            R.filter(report => report.reportStatus == status)
        )(this.reports)

    }

    public filterReportsByReporterLastName(lastName: string): Array<Report>{
        return R.pipe(
            R.filter(report => report.reporter.lastName == lastName)
        )(this.reports)
    } 

    public filterReportsByLotName(lot: string): Array<Report> {
       return R.pipe(
            R.filter(report => report.lotName == lot)
        )(this.reports)
    }

    public filterReportsByReportStatus(status: string): Array<Report> {
        return R.pipe(
             R.filter(report => report.reportStatus == status)
         )(this.reports)
     }

    public sortByLatest(): Array<Report>{
        return R.pipe(
            R.sortBy(R.prop('created')),
            R.reverse()
        )(this.reports)
    }

}
