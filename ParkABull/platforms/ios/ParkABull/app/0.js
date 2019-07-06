(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "../db/config.js":
/***/ (function(module, exports) {

//module.exports = config;
module.exports = {
    url: "https://parkabull.localtunnel.me/",
    localUrl: "https://df5b5c4a.ngrok.io/"
}

/***/ }),

/***/ "./app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/admin/user-list/user-list.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/admin/user-details/user-details.component.ts");
/* harmony import */ var _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/admin/building-list/building-list.component.ts");
/* harmony import */ var _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/admin/building-details/building-details.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/admin/register/register.component.ts");
/* harmony import */ var _report_list_report_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/admin/report-list/report-list.component.ts");
/* harmony import */ var _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/admin/report-details/report-details.component.ts");
/* harmony import */ var _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/admin/lot-list/lot-list.component.ts");
/* harmony import */ var _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/admin/lot-details/lot-details.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/admin/admin.component.ts");












var routes = [
    { path: "", component: _admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"] },
    { path: "admin", component: _admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"] },
    { path: "userlist", component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"] },
    { path: "userdetails", component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
    { path: "buildinglist", component: _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__["BuildingListComponent"] },
    { path: "buildingdetails/:name/:location/:code", component: _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_5__["BuildingDetailsComponent"] },
    { path: "register", component: _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"] },
    { path: "reportlist", component: _report_list_report_list_component__WEBPACK_IMPORTED_MODULE_7__["ReportListComponent"] },
    { path: "reportdetails", component: _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_8__["ReportDetailsComponent"] },
    { path: "lostlist", component: _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_9__["LotListComponent"] },
    { path: "lotdetails", component: _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_10__["LotDetailsComponent"] }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "./app/admin/admin.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"Admin Home\"></Label>\r\n</ActionBar>\r\n\r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Button class=\"btn\" text=\"View Reports\" [nsRouterLink]=\"['reportlist']\" clearHistory=\"true\"></Button>\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



var AdminComponent = /** @class */ (function () {
    function AdminComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    AdminComponent.prototype.ngOnInit = function () {
        console.log("admin component initiated!");
    };
    AdminComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        sideDrawer.showDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sideDrawer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AdminComponent.prototype, "rSideDrawer", void 0);
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-admin',
            template: __webpack_require__("./app/admin/admin.component.html"),
            styles: [__webpack_require__("./app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/admin/user-list/user-list.component.ts");
/* harmony import */ var _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/admin/user-details/user-details.component.ts");
/* harmony import */ var _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/admin/building-list/building-list.component.ts");
/* harmony import */ var _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/admin/building-details/building-details.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/admin/register/register.component.ts");
/* harmony import */ var _report_list_report_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./app/admin/report-list/report-list.component.ts");
/* harmony import */ var _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./app/admin/report-details/report-details.component.ts");
/* harmony import */ var _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./app/admin/lot-list/lot-list.component.ts");
/* harmony import */ var _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./app/admin/lot-details/lot-details.component.ts");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./app/admin/admin.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./app/admin/admin-routing.module.ts");













var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_2__["UserListComponent"],
                _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"],
                _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__["BuildingListComponent"],
                _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_5__["BuildingDetailsComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_6__["RegisterComponent"],
                _report_list_report_list_component__WEBPACK_IMPORTED_MODULE_7__["ReportListComponent"],
                _report_details_report_details_component__WEBPACK_IMPORTED_MODULE_8__["ReportDetailsComponent"],
                _lot_list_lot_list_component__WEBPACK_IMPORTED_MODULE_9__["LotListComponent"],
                _lot_details_lot_details_component__WEBPACK_IMPORTED_MODULE_10__["LotDetailsComponent"],
                _admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"]
            ],
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _admin_routing_module__WEBPACK_IMPORTED_MODULE_12__["AdminRoutingModule"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]]
        })
    ], AdminModule);
    return AdminModule;
}());

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            // Currently the context is needed only for application style modules.
            const moduleContext = {};
            global.hmrRefresh(moduleContext);
        });
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/admin/building-details/building-details.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n\r\n.big {\r\n    border-radius: 250;\r\n    height: 300;\r\n    width: 300;\r\n    border-color: #006747;\r\n    border-width: 5;\r\n    background-color: white;\r\n    color: #006747;\r\n    font-size: 100;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    padding: 75;\r\n}\r\n\r\n.spots {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #006747;\r\n    height: 75;\r\n    font-size: 40;\r\n    border-color: white;\r\n    background-color: white;\r\n    border-width: 0;\r\n}\r\n\r\n.lots {\r\n    width: 40%;\r\n    text-align: center;\r\n    color: black;\r\n    height: 50;\r\n    font-size: 20;\r\n    border-color: white;\r\n    background-color: white;\r\n    border-width: 0;\r\n    vertical-align: middle;\r\n    padding: 10;\r\n}\r\n\r\n.lotbutton{\r\n    width: 60%\r\n}\r\n\r\n.dropbtn {\r\n    background-color: #3498DB;\r\n    color: white;\r\n    padding: 16px;\r\n    font-size: 16px;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  /* Dropdown button on hover & focus */\r\n  .dropbtn:hover, .dropbtn:focus {\r\n    background-color: #2980B9;\r\n  }\r\n  \r\n  /* The container <div> - needed to position the dropdown content */\r\n  .dropdown {\r\n    position: relative;\r\n    display: inline-block;\r\n  }\r\n  \r\n  /* Dropdown Content (Hidden by Default) */\r\n  .dropdown-content {\r\n    display: none;\r\n    position: absolute;\r\n    background-color: #f1f1f1;\r\n    min-width: 160px;\r\n    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\r\n    z-index: 1;\r\n  }\r\n  \r\n  /* Links inside the dropdown */\r\n  .dropdown-content a {\r\n    color: black;\r\n    padding: 12px 16px;\r\n    text-decoration: none;\r\n    display: block;\r\n  }\r\n  \r\n  /* Change color of dropdown links on hover */\r\n  .dropdown-content a:hover {background-color: #ddd}\r\n  \r\n  /* Show the dropdown menu (use JS to add this class to the .dropdown-content container when the user clicks on the dropdown button) */\r\n  .show {display:block;}"

/***/ }),

/***/ "./app/admin/building-details/building-details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"{{this.name}} Details\"></Label>\r\n</ActionBar>\r\n\r\n<ScrollView height=100% class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Label textWrap=\"true\" class=\"big\" text=\"{{this.total}}\"></Label>\r\n        <Label class=\"spots\" text=\"Spots Available\" textWrap=\"true\"></Label>\r\n        <Label class=\"spots\" text=\"Building Info:\" textWrap=\"true\"></Label>\r\n        \r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Name: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.name}}\" (tap)=\"showDialogBox()\"></Button>\r\n        </StackLayout>\r\n\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Location: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.location}}\" (tap)=\"showDialogBox1()\"></Button>\r\n        </StackLayout>\r\n        \r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Code: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.code}}\" (tap)=\"displayAlertDialog()\"></Button>\r\n        </StackLayout>\r\n\r\n        <Label class=\"spots\" text=\"Linked Lots:\" textWrap=\"true\"></Label>\r\n        \r\n        <!-- <StackLayout class=\"dropdown\">\r\n            <Button (tap)=\"myFunction()\" class=\"dropbtn\" text=\"Dropdown\"></Button>\r\n            <StackLayout id=\"myDropdown\" class=\"dropdown-content\">\r\n              <a href=\"#\" text=\"Link 1\"></a>\r\n              <a href=\"#\">Link 2</a>\r\n              <a href=\"#\">Link 3</a>\r\n            </StackLayout>\r\n        </StackLayout> -->\r\n\r\n        <Button text=\"{{this.lotNames[0]}}\" class=\"btn btn-primary btn-active\" (tap)=\"lotDetails()\"></Button>\r\n        <Button text=\"{{this.lotNames[1]}}\" class=\"btn btn-primary btn-active\" (tap)=\"lotDetails()\"></Button>\r\n        <Button text=\"{{this.lotNames[2]}}\" class=\"btn btn-primary btn-active\" (tap)=\"lotDetails()\"></Button>\r\n    \r\n\r\n        <!-- <GridLayout rows=\"auto, auto, *\" columns=\"auto, *\">\r\n            <DropDown #dd\r\n                  backroundColor=\"red\"\r\n                  [items]=\"items\"\r\n                  [(ngModel)]=\"selectedIndex\"\r\n                  (selectedIndexChanged)=\"onchange($event)\"\r\n                  (opened)=\"onopen()\"\r\n                  (closed)=\"onclose()\"\r\n                  row=\"0\"\r\n                  colSpan=\"2\"></DropDown>\r\n            <Label text=\"Selected Index:\"\r\n               row=\"1\"\r\n               col=\"0\"\r\n               fontSize=\"18\"\r\n               verticalAlignment=\"bottom\"></Label>\r\n            <TextField [text]=\"selectedIndex\"\r\n                   row=\"1\"\r\n                   col=\"1\"></TextField>\r\n        </GridLayout> -->\r\n    </StackLayout>\r\n\r\n    \r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/building-details/building-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingDetailsComponent", function() { return BuildingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../db/config.js");
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_db_config__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lot__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/admin/lot.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__);







/* import { DropDownModule } from "nativescript-drop-down/angular";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures"; */
var BuildingDetailsComponent = /** @class */ (function () {
    /* public selectedIndex = 1;
    public items: Array<string>;
   */
    function BuildingDetailsComponent(activatedRoute) {
        /* this.items = [];
            for (var i = 0; i < 5; i++) {
                this.items.push("data item " + i);
            } */
        this.activatedRoute = activatedRoute;
        this.total = 0;
        this.lots = []; // lot_id, lot_name, location, spots_available
        this.lotNames = [];
    }
    BuildingDetailsComponent.prototype.ngOnInit = function () {
        this.name = this.activatedRoute.snapshot.paramMap.get("name");
        this.location = this.activatedRoute.snapshot.paramMap.get("location");
        this.code = this.activatedRoute.snapshot.paramMap.get("code");
        console.log('building-details initiated: ' + this.name);
        this.fetchBuilding();
    };
    BuildingDetailsComponent.prototype.showDialogBox = function () {
        var _this = this;
        var promptOptions = {
            title: "Building Name",
            message: "Please enter new building name",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            defaultText: "Default",
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["inputType"].text,
            capitalizationType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["capitalizationType"].sentences // all. none, sentences or words
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["prompt"])(promptOptions).then(function (r) {
            console.log("Dialog result: ", r.result);
            console.log("Text: ", r.text);
            _this.name = r.text;
        });
    };
    BuildingDetailsComponent.prototype.showDialogBox1 = function () {
        var _this = this;
        var promptOptions = {
            title: "Building Location",
            message: "Please enter new location",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            defaultText: "Default",
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["inputType"].text,
            capitalizationType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["capitalizationType"].sentences // all. none, sentences or words
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["prompt"])(promptOptions).then(function (r) {
            console.log("Dialog result: ", r.result);
            console.log("Text: ", r.text);
            _this.location = r.text;
        });
    };
    BuildingDetailsComponent.prototype.displayAlertDialog = function () {
        var options = {
            title: "Code",
            message: "Code cannot be changed",
            okButtonText: "OK"
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["alert"])(options).then(function () {
            console.log("code unchanged!");
        });
    };
    /* public onchange(args: SelectedIndexChangedEventData) {
          console.log(`Drop Down selected index changed from ${args.oldIndex} to ${args.newIndex}`);
      }
   
      public onopen() {
          console.log("Drop Down opened.");
      }
   
      public onclose() {
          console.log("Drop Down closed.");
      } */
    BuildingDetailsComponent.prototype.fetchBuilding = function () {
        var _this = this;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_3__["request"])({
            url: _db_config__WEBPACK_IMPORTED_MODULE_2__["localUrl"] + "lots/" + encodeURI(this.name),
            method: "GET"
        }).then(function (response) {
            var rows = response.content.toJSON();
            if (rows.length == 2) {
                Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["alert"])('Error: that building does not exist');
            }
            else if (rows[2][0].return_code != 0) {
                Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_5__["alert"])('Error Code :' + rows[2][0].return_code);
            }
            else {
                var i_1 = 0;
                rows[0].forEach(function (row) {
                    var temp = new _lot__WEBPACK_IMPORTED_MODULE_4__["Lot"](row.lot_id, row.lot_name, row.location, row.spots_available);
                    _this.lots.push(temp);
                    _this.lotNames.push(row.lot_name);
                    console.log('lotNames: ', _this.lotNames);
                    _this.total += temp.getSpots();
                    i_1++;
                });
            }
        }, function (e) {
            console.log(e);
        });
    };
    BuildingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-building-details',
            template: __webpack_require__("./app/admin/building-details/building-details.component.html"),
            styles: [__webpack_require__("./app/admin/building-details/building-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BuildingDetailsComponent);
    return BuildingDetailsComponent;
}());



/***/ }),

/***/ "./app/admin/building-list/building-list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/building-list/building-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"Building List\"></Label>\r\n</ActionBar>\r\n<StackLayout *ngIf=\"shouldShow\" class=\"page\">\r\n    <SearchBar height=75 hint=\"Enter a building name...\" text=\"{{this.searchPhrase}}\" (textChange)=\"onTextChanged($event)\" (submit)=\"onSubmit($event)\" color=\"black\" textFieldBackgroundColor=\"white\" textFieldHintColor=\"gray\"></SearchBar>\r\n    <ScrollView>\r\n        <ListPicker [items]=\"filteredNames\" selectedIndex=\"0\" (selectedIndexChange)=\"selectedIndexChanged($event)\" class=\"p-15\">\r\n        </ListPicker>\r\n    </ScrollView>\r\n    <Button text=\"Check {{this.picked}}\" class=\"btn btn-primary btn-active\" (tap)=\"buildingDetails()\"></Button>\r\n</StackLayout>"

/***/ }),

/***/ "./app/admin/building-list/building-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingListComponent", function() { return BuildingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../db/config.js");
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_db_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _building__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/admin/building.ts");






var BuildingListComponent = /** @class */ (function () {
    function BuildingListComponent(routerExtensions, ref) {
        this.routerExtensions = routerExtensions;
        this.ref = ref;
        this.buildings = [];
        this.names = [];
        this.filteredNames = [];
        this.shouldShow = false;
        this.searchPhrase = '';
    }
    BuildingListComponent.prototype.onTextChanged = function (args) {
        var _this = this;
        var searchBar = args.object;
        this.searchPhrase = searchBar.text;
        this.filteredNames = this.names.filter(function (word) { return word.toLowerCase().includes(_this.searchPhrase.toLowerCase()); });
        console.log(this.filteredNames);
    };
    BuildingListComponent.prototype.onSubmit = function (args) {
        //intentionally left blank
    };
    BuildingListComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = this.filteredNames[picker.selectedIndex];
        this.locPicked = this.buildings[picker.selectedIndex].getLocation();
        this.codePicked = this.buildings[picker.selectedIndex].getCode();
        console.log('this.picked: ', this.picked);
        console.log('this.locPicked: ', this.locPicked);
    };
    BuildingListComponent.prototype.ngOnInit = function () {
        console.log("building list component initiated");
        this.getBuildings();
    };
    BuildingListComponent.prototype.getBuildings = function () {
        var _this = this;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: _db_config__WEBPACK_IMPORTED_MODULE_3__["localUrl"] + "buildings",
            method: "GET"
        }).then(function (response) {
            var rows = response.content.toJSON();
            //console.log(rows)
            rows.forEach(function (row) {
                var temp = new _building__WEBPACK_IMPORTED_MODULE_5__["Building"](row.building_name, row.building_code, row.location, row.lot_code_1, row.lot_code_2, row.lot_code_3);
                //console.log(temp)
                _this.buildings.push(temp);
                _this.names.push(row.building_name);
            });
            //after this line, the names and buildings arrays should be populated
            //console.log(this.names) 
            _this.filteredNames = _this.names;
            console.log('filteredNames: ', _this.filteredNames);
            _this.shouldShow = true;
            _this.ref.markForCheck();
        }, function (e) {
            console.log(e);
        });
    };
    BuildingListComponent.prototype.buildingDetails = function () {
        this.routerExtensions.navigateByUrl("admin/buildingdetails/" + this.picked + '/' + this.locPicked + '/' + this.codePicked);
    };
    BuildingListComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        sideDrawer.showDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sideDrawer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BuildingListComponent.prototype, "rSideDrawer", void 0);
    BuildingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-building-list',
            template: __webpack_require__("./app/admin/building-list/building-list.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__("./app/admin/building-list/building-list.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], BuildingListComponent);
    return BuildingListComponent;
}());



/***/ }),

/***/ "./app/admin/building.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
var Building = /** @class */ (function () {
    function Building(name, code, location, lot1, lot2, lot3) {
        this.name = name;
        this.code = code;
        this.location = location;
        this.lot1 = lot1;
        this.lot2 = lot2;
        this.lot3 = lot3;
    }
    Building.prototype.getName = function () {
        return this.name;
    };
    Building.prototype.getCode = function () {
        return this.code;
    };
    Building.prototype.getLocation = function () {
        return this.location;
    };
    Building.prototype.getLot = function (lotNum) {
        switch (lotNum) {
            case 1:
                return this.lot1;
                break;
            case 2:
                return this.lot2;
                break;
            case 3:
                return this.lot3;
                break;
            default:
                throw new Error('Invalid Lot Slot Specified');
                break;
        }
    };
    return Building;
}());



/***/ }),

/***/ "./app/admin/lot-details/lot-details.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/lot-details/lot-details.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"lot-details works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/lot-details/lot-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotDetailsComponent", function() { return LotDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var LotDetailsComponent = /** @class */ (function () {
    function LotDetailsComponent() {
    }
    LotDetailsComponent.prototype.ngOnInit = function () {
    };
    LotDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-lot-details',
            template: __webpack_require__("./app/admin/lot-details/lot-details.component.html"),
            styles: [__webpack_require__("./app/admin/lot-details/lot-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LotDetailsComponent);
    return LotDetailsComponent;
}());



/***/ }),

/***/ "./app/admin/lot-list/lot-list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/lot-list/lot-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"Parking Lots\"></Label>\r\n</ActionBar>\r\n        \r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/lot-list/lot-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotListComponent", function() { return LotListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



var LotListComponent = /** @class */ (function () {
    function LotListComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    LotListComponent.prototype.ngOnInit = function () {
        console.log("user component initiated!");
    };
    LotListComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        sideDrawer.showDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sideDrawer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], LotListComponent.prototype, "rSideDrawer", void 0);
    LotListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-lot-list',
            template: __webpack_require__("./app/admin/lot-list/lot-list.component.html"),
            styles: [__webpack_require__("./app/admin/lot-list/lot-list.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], LotListComponent);
    return LotListComponent;
}());



/***/ }),

/***/ "./app/admin/lot.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lot", function() { return Lot; });
var Lot = /** @class */ (function () {
    function Lot(id, name, location, spots_available) {
        this.id = id;
        this.name = name;
        this.location = location;
        this.spots_available = spots_available;
    }
    Lot.prototype.getID = function () {
        return this.id;
    };
    Lot.prototype.getName = function () {
        return this.name;
    };
    Lot.prototype.getLocation = function () {
        return this.location;
    };
    Lot.prototype.getSpots = function () {
        return this.spots_available;
    };
    Lot.prototype.printLotInfo = function () {
        console.log("lot " + this.id + ": " + this.name + ", " + this.location + ", " + this.spots_available + " vacancies");
    };
    Lot.prototype.print = function () {
        return ("lot" + this.id + ": " + this.name + ", " + this.location + ", " + this.spots_available);
    };
    return Lot;
}());



/***/ }),

/***/ "./app/admin/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"Register\"></Label>\r\n</ActionBar>\r\n        \r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        console.log("user component initiated!");
    };
    RegisterComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        sideDrawer.showDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sideDrawer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], RegisterComponent.prototype, "rSideDrawer", void 0);
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-register',
            template: __webpack_require__("./app/admin/register/register.component.html"),
            styles: [__webpack_require__("./app/admin/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./app/admin/report-details/report-details.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/report-details/report-details.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"report-details works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/report-details/report-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportDetailsComponent", function() { return ReportDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ReportDetailsComponent = /** @class */ (function () {
    function ReportDetailsComponent() {
    }
    ReportDetailsComponent.prototype.ngOnInit = function () {
    };
    ReportDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-report-details',
            template: __webpack_require__("./app/admin/report-details/report-details.component.html"),
            styles: [__webpack_require__("./app/admin/report-details/report-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportDetailsComponent);
    return ReportDetailsComponent;
}());



/***/ }),

/***/ "./app/admin/report-list/report-list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/report-list/report-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"Reports\"></Label>\r\n</ActionBar>\r\n    \r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/report-list/report-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListComponent", function() { return ReportListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



var ReportListComponent = /** @class */ (function () {
    function ReportListComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    ReportListComponent.prototype.ngOnInit = function () {
        console.log("user component initiated!");
    };
    ReportListComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        sideDrawer.showDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sideDrawer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ReportListComponent.prototype, "rSideDrawer", void 0);
    ReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-report-list',
            template: __webpack_require__("./app/admin/report-list/report-list.component.html"),
            styles: [__webpack_require__("./app/admin/report-list/report-list.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], ReportListComponent);
    return ReportListComponent;
}());



/***/ }),

/***/ "./app/admin/user-details/user-details.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"user-details works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent() {
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-user-details',
            template: __webpack_require__("./app/admin/user-details/user-details.component.html"),
            styles: [__webpack_require__("./app/admin/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./app/admin/user-list/user-list.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"Users\"></Label>\r\n</ActionBar>\r\n            \r\n<ScrollView class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n    </StackLayout>\r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/application");
/* harmony import */ var tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__);



var UserListComponent = /** @class */ (function () {
    function UserListComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    UserListComponent.prototype.ngOnInit = function () {
        console.log("user component initiated!");
    };
    UserListComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = tns_core_modules_application__WEBPACK_IMPORTED_MODULE_2__["getRootView"]();
        sideDrawer.showDrawer();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("sideDrawer"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], UserListComponent.prototype, "rSideDrawer", void 0);
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-user-list',
            template: __webpack_require__("./app/admin/user-list/user-list.component.html"),
            styles: [__webpack_require__("./app/admin/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ })

}]);