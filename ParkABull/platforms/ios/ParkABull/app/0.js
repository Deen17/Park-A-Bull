(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

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
    { path: "userdetails/:name/:firstname/:lastname/:unumber/:email/:username", component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
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

module.exports = "/* Add mobile styles for the component here.  */\r\n\r\n.big {\r\n    border-radius: 250;\r\n    height: 300;\r\n    width: 300;\r\n    border-color: #006747;\r\n    border-width: 5;\r\n    background-color: white;\r\n    color: #006747;\r\n    font-size: 100;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    padding: 75;\r\n}\r\n\r\n.spots {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #006747;\r\n    height: 75;\r\n    font-size: 40;\r\n    border-color: white;\r\n    background-color: white;\r\n    border-width: 0;\r\n}\r\n\r\n.lots {\r\n    width: 40%;\r\n    text-align: center;\r\n    color: black;\r\n    height: 50;\r\n    font-size: 20;\r\n    border-color: white;\r\n    background-color: white;\r\n    border-width: 0;\r\n    vertical-align: middle;\r\n    padding: 10;\r\n}\r\n\r\n.lotbutton{\r\n    width: 60%\r\n}"

/***/ }),

/***/ "./app/admin/building-details/building-details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"{{this.newName}} Details\"></Label>\r\n    <ActionItem text=\"Submit\" ios.position=\"right\" android.position=\"actionBar\" (tap)=\"onSubmit()\"></ActionItem>\r\n</ActionBar>\r\n\r\n<ScrollView height=100% class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <Label textWrap=\"true\" class=\"big\" text=\"{{this.total}}\"></Label>\r\n        <Label class=\"spots\" text=\"Spots Available\" textWrap=\"true\"></Label>\r\n        <Label class=\"spots\" text=\"Building Info:\" textWrap=\"true\"></Label>\r\n        \r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Name: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.newName}}\" (tap)=\"showDialogBox()\"></Button>\r\n        </StackLayout>\r\n\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Location: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.newLocation}}\" (tap)=\"showDialogBox1()\"></Button>\r\n        </StackLayout>\r\n        \r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Code: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.newCode}}\" (tap)=\"showDialogBox3()\"></Button>\r\n        </StackLayout>\r\n\r\n        <Label class=\"spots\" text=\"Linked Lots:\" textWrap=\"true\"></Label>\r\n\r\n        <Button text=\"{{this.newLots[0]}}\" class=\"lotbutton\" (tap)=\"lotDetails()\"></Button>\r\n        <Button text=\"{{this.newLots[1]}}\" class=\"lotbutton\" (tap)=\"lotDetails()\"></Button>\r\n        <Button text=\"{{this.newLots[2]}}\" class=\"lotbutton\" (tap)=\"lotDetails()\"></Button>\r\n    \r\n\r\n        <!-- <GridLayout rows=\"auto, auto, *\" columns=\"auto, *\">\r\n            <DropDown #dd\r\n                  backroundColor=\"red\"\r\n                  [items]=\"items\"\r\n                  [(ngModel)]=\"selectedIndex\"\r\n                  (selectedIndexChanged)=\"onchange($event)\"\r\n                  (opened)=\"onopen()\"\r\n                  (closed)=\"onclose()\"\r\n                  row=\"0\"\r\n                  colSpan=\"2\"></DropDown>\r\n            <Label text=\"Selected Index:\"\r\n               row=\"1\"\r\n               col=\"0\"\r\n               fontSize=\"18\"\r\n               verticalAlignment=\"bottom\"></Label>\r\n            <TextField [text]=\"selectedIndex\"\r\n                   row=\"1\"\r\n                   col=\"1\"></TextField>\r\n        </GridLayout> -->\r\n    </StackLayout>\r\n\r\n    \r\n</ScrollView>"

/***/ }),

/***/ "./app/admin/building-details/building-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingDetailsComponent", function() { return BuildingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../db/config.js");
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_db_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lot__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/admin/lot.ts");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("tns-core-modules/ui/dialogs");
/* harmony import */ var tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__);








/* import { DropDownModule } from "nativescript-drop-down/angular";
import { SelectedIndexChangedEventData } from "nativescript-drop-down";
import { GestureTypes, GestureEventData } from "tns-core-modules/ui/gestures"; */
var BuildingDetailsComponent = /** @class */ (function () {
    function BuildingDetailsComponent(routerExtensions, activatedRoute) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.newLots = [];
        this.total = 0;
        this.lots = []; // lot_id, lot_name, location, spots_available
        this.lotNames = [];
    }
    BuildingDetailsComponent.prototype.ngOnInit = function () {
        this.name = this.activatedRoute.snapshot.paramMap.get("name");
        this.location = this.activatedRoute.snapshot.paramMap.get("location");
        this.code = this.activatedRoute.snapshot.paramMap.get("code");
        this.newName = this.name;
        this.newCode = this.code;
        this.newLocation = this.location;
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
            defaultText: this.name,
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text,
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"])(promptOptions).then(function (r) {
            console.log("Dialog result: ", r.result);
            console.log("Text: ", r.text);
            _this.newName = r.text;
        });
    };
    BuildingDetailsComponent.prototype.showDialogBox1 = function () {
        var _this = this;
        var promptOptions = {
            title: "Building Location",
            message: "Please enter new location",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            defaultText: this.location,
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text,
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"])(promptOptions).then(function (r) {
            console.log("Dialog result: ", r.result);
            console.log("Text: ", r.text);
            _this.newLocation = r.text;
        });
    };
    BuildingDetailsComponent.prototype.showDialogBox3 = function () {
        var _this = this;
        var promptOptions = {
            title: "Building Code",
            message: "Please enter new building code",
            okButtonText: "Ok",
            cancelButtonText: "Cancel",
            defaultText: this.code,
            inputType: tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["inputType"].text,
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["prompt"])(promptOptions).then(function (r) {
            console.log("Dialog result: ", r.result);
            console.log("Text: ", r.text);
            _this.newCode = r.text;
        });
    };
    BuildingDetailsComponent.prototype.displayAlertDialog = function () {
        var _this = this;
        var options = {
            title: "Alert",
            message: "Building Details edits successful",
            okButtonText: "OK"
        };
        Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])(options).then(function () {
            console.log("code unchanged!");
            _this.routerExtensions.navigateByUrl('admin/buildinglist');
        });
    };
    BuildingDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.newName == this.name) {
            this.tempName = null;
        }
        else {
            this.tempName = this.newName;
        }
        if (this.newCode == this.code) {
            this.tempCode = null;
        }
        else {
            this.tempCode = this.newCode;
        }
        if (this.newLocation == this.location) {
            this.tempLocation = null;
        }
        else {
            this.tempLocation = this.newLocation;
        }
        if (this.newLots[0] == this.lotNames[0]) {
            this.tempLot1 = null;
        }
        else {
            this.tempLot1 = this.newLots[0];
        }
        if (this.newLots[1] == this.lotNames[1]) {
            this.tempLot2 = null;
        }
        else {
            this.tempLot2 = this.newLots[1];
        }
        if (this.newLots[2] == this.lotNames[2]) {
            this.tempLot3 = null;
        }
        else {
            this.tempLot3 = this.newLots[2];
        }
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: _db_config__WEBPACK_IMPORTED_MODULE_3__["localUrl"] + "editbuildings",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                name: this.name,
                newName: this.tempName,
                newCode: this.tempCode,
                newLoc: this.tempLocation,
                newLot1: this.tempLot1,
                newLot2: this.tempLot2,
                newLot3: this.tempLot3
            })
        }).then(function (response) {
            var rows = response.content.toJSON();
            console.log('result:', rows);
            switch (rows[rows.length - 1][0].return_code) {
                case 0:
                    console.log('Edits successful');
                    _this.displayAlertDialog();
                    break;
                case 17:
                    Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])('Error: Duplicate building name');
                    break;
                case 19:
                    Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])('Error: Duplicate lot names');
                    break;
                case 22:
                    Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])('Error: Duplicate building code');
                    break;
                default:
                    Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])('Error: Unknown Error Code');
                    break;
            }
        }, function (e) {
            console.log(e);
        });
    };
    BuildingDetailsComponent.prototype.fetchBuilding = function () {
        var _this = this;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: _db_config__WEBPACK_IMPORTED_MODULE_3__["localUrl"] + "lots/" + encodeURI(this.name),
            method: "GET"
        }).then(function (response) {
            var rows = response.content.toJSON();
            if (rows.length == 2) {
                Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])('Error: that building does not exist');
            }
            else if (rows[2][0].return_code != 0) {
                Object(tns_core_modules_ui_dialogs__WEBPACK_IMPORTED_MODULE_6__["alert"])('Error Code :' + rows[2][0].return_code);
            }
            else {
                var i_1 = 0;
                rows[0].forEach(function (row) {
                    var temp = new _lot__WEBPACK_IMPORTED_MODULE_5__["Lot"](row.lot_id, row.lot_name, row.location, row.spots_available);
                    _this.lots.push(temp);
                    _this.lotNames.push(row.lot_name);
                    _this.newLots.push(row.lot_name);
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
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = "/* Add mobile styles for the component here.  */\r\n\r\n.spots {\r\n    width: 100%;\r\n    text-align: center;\r\n    color: #006747;\r\n    height: 75;\r\n    font-size: 40;\r\n    border-color: white;\r\n    background-color: white;\r\n    border-width: 0;\r\n}\r\n\r\n.lots {\r\n    width: 40%;\r\n    text-align: center;\r\n    color: black;\r\n    height: 50;\r\n    font-size: 20;\r\n    border-color: white;\r\n    background-color: white;\r\n    border-width: 0;\r\n    vertical-align: middle;\r\n    padding: 10;\r\n}\r\n\r\n.lotbutton{\r\n    width: 60%\r\n}\r\n\r\n.header {\r\n    background-color: #006747;\r\n}"

/***/ }),

/***/ "./app/admin/user-details/user-details.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"{{this.name}} Details\"></Label>\r\n    <!-- <ActionItem text=\"Submit\" ios.position=\"right\" android.position=\"actionBar\" (tap)=\"onSubmit()\"></ActionItem> -->\r\n</ActionBar>\r\n\r\n<ScrollView height=100% class=\"page\">\r\n    <StackLayout class=\"home-panel\">\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Unumber: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.unumber}}\"></Button>\r\n        </StackLayout>\r\n\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"First Name: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.firstName}}\"></Button>\r\n        </StackLayout>\r\n\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Last Name: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.lastName}}\"></Button>\r\n        </StackLayout>\r\n\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Username: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.userName}}\"></Button>\r\n        </StackLayout>\r\n\r\n        <StackLayout orientation=\"horizontal\">\r\n            <Label class=\"lots\" text=\"Email: \" textWrap=\"true\"></Label>\r\n            <Button class=\"lotbutton\" text=\"{{this.email}}\"></Button>\r\n        </StackLayout>\r\n\r\n        <Label class=\"spots\" text=\"Linked Vehicles: \" textWrap=\"true\"></Label>\r\n        <Button text=\"{{this.vehicles[0]}}\" class=\"lotbutton\" (tap)=\"lotDetails()\"></Button>\r\n        <!-- <Button text=\"{{this.vehicles[1]}}\" class=\"lotbutton\" (tap)=\"lotDetails()\"></Button>\r\n        <Button text=\"{{this.vehicles[2]}}\" class=\"lotbutton\" (tap)=\"lotDetails()\"></Button> -->\r\n    </StackLayout>\r\n\r\n    \r\n</ScrollView>\r\n\r\n<!-- <StackLayout class=\"page\">\r\n        <StackLayout height=\"60%\">\r\n                <ScrollView height=100% class=\"page\">\r\n                        <StackLayout class=\"home-panel\">\r\n                            <StackLayout orientation=\"horizontal\">\r\n                                <Label class=\"lots\" text=\"Unumber: \" textWrap=\"true\"></Label>\r\n                                <Button class=\"lotbutton\" text=\"{{this.unumber}}\"></Button>\r\n                            </StackLayout>\r\n                    \r\n                            <StackLayout orientation=\"horizontal\">\r\n                                <Label class=\"lots\" text=\"First Name: \" textWrap=\"true\"></Label>\r\n                                <Button class=\"lotbutton\" text=\"{{this.firstName}}\"></Button>\r\n                            </StackLayout>\r\n                    \r\n                            <StackLayout orientation=\"horizontal\">\r\n                                <Label class=\"lots\" text=\"Last Name: \" textWrap=\"true\"></Label>\r\n                                <Button class=\"lotbutton\" text=\"{{this.lastName}}\"></Button>\r\n                            </StackLayout>\r\n                    \r\n                            <StackLayout orientation=\"horizontal\">\r\n                                <Label class=\"lots\" text=\"Username: \" textWrap=\"true\"></Label>\r\n                                <Button class=\"lotbutton\" text=\"{{this.userName}}\"></Button>\r\n                            </StackLayout>\r\n                    \r\n                            <StackLayout orientation=\"horizontal\">\r\n                                <Label class=\"lots\" text=\"Email: \" textWrap=\"true\"></Label>\r\n                                <Button class=\"lotbutton\" text=\"{{this.email}}\"></Button>\r\n                            </StackLayout>\r\n\r\n                            <Label height=\"25%\" text=\"Linked Vehicles: \" class=\"header\"></Label>\r\n                        </StackLayout>\r\n                    \r\n                </ScrollView>\r\n        </StackLayout>\r\n    \r\n        <ListView height=\"40%\" [items]=\"vehicles\" (itemTap)=\"onItemTap($event)\" class=\"list-group\">\r\n            <ng-template let-item=\"item\" let-odd=\"odd\" let-even=\"even\">\r\n                <StackLayout>\r\n                    <Label [text]=\"item\" class=\"list-group-item\"></Label>\r\n    \r\n                </StackLayout>\r\n            </ng-template>\r\n        </ListView>\r\n</StackLayout> -->"

/***/ }),

/***/ "./app/admin/user-details/user-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@angular/router");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/admin/vehicle.service.ts");
/* harmony import */ var _vehicle_service__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_vehicle_service__WEBPACK_IMPORTED_MODULE_2__);


//import {Vehicle} from "../vehicle"

var UserDetailsComponent = /** @class */ (function () {
    //vehicles: Array<Vehicle> = [];
    //vehicleNames: Array<string> = [];
    function UserDetailsComponent(activatedRoute, vehicleService) {
        this.activatedRoute = activatedRoute;
        this.vehicleService = vehicleService;
        this.vehicles = [];
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.name = this.activatedRoute.snapshot.paramMap.get("name");
        this.firstName = this.activatedRoute.snapshot.paramMap.get("firstname");
        this.lastName = this.activatedRoute.snapshot.paramMap.get("lastname");
        this.unumber = this.activatedRoute.snapshot.paramMap.get("unumber");
        this.email = this.activatedRoute.snapshot.paramMap.get("email");
        this.userName = this.activatedRoute.snapshot.paramMap.get("username");
        console.log('user-details initiated: ' + this.name);
        this.refresh();
        //this.fetchVehicles();
    };
    UserDetailsComponent.prototype.refresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.vehicleService.fetch()];
                    case 1:
                        _a.sent();
                        this.vehicles = this.vehicleService.getVehicleNames();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-user-details',
            template: __webpack_require__("./app/admin/user-details/user-details.component.html"),
            styles: [__webpack_require__("./app/admin/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _vehicle_service__WEBPACK_IMPORTED_MODULE_2__["VehicleService"]])
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

module.exports = "<ActionBar class=\"action-bar\">\r\n    <NavigationButton ios:visibility=\"collapsed\" icon=\"res://menu\" (tap)=\"onDrawerButtonTap()\"></NavigationButton>\r\n    <ActionItem icon=\"res://navigation/menu\" android:visibility=\"collapsed\" (tap)=\"onDrawerButtonTap()\" ios.position=\"left\">\r\n    </ActionItem>\r\n    <Label class=\"action-bar-title\" text=\"User List\"></Label>\r\n</ActionBar>\r\n<StackLayout *ngIf=\"shouldShow\" class=\"page\">\r\n    <SearchBar height=75 hint=\"Enter a user name...\" text=\"{{this.searchPhrase}}\" (textChange)=\"onTextChanged($event)\" (submit)=\"onSubmit($event)\" color=\"black\" textFieldBackgroundColor=\"white\" textFieldHintColor=\"gray\"></SearchBar>\r\n    <ScrollView>\r\n        <ListPicker [items]=\"filteredNames\" selectedIndex=\"0\" (selectedIndexChange)=\"selectedIndexChanged($event)\" class=\"p-15\">\r\n        </ListPicker>\r\n    </ScrollView>\r\n    <Button text=\"Check {{this.picked}}\" class=\"btn btn-primary btn-active\" (tap)=\"userDetails()\"></Button>\r\n</StackLayout>"

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
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../db/config.js");
/* harmony import */ var _db_config__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_db_config__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/admin/user.ts");






var UserListComponent = /** @class */ (function () {
    function UserListComponent(routerExtensions, ref) {
        this.routerExtensions = routerExtensions;
        this.ref = ref;
        this.users = [];
        this.names = [];
        this.firstNames = [];
        this.lastNames = [];
        this.filteredNames = [];
        this.shouldShow = false;
        this.searchPhrase = '';
    }
    UserListComponent.prototype.onTextChanged = function (args) {
        var _this = this;
        var searchBar = args.object;
        this.searchPhrase = searchBar.text;
        this.filteredNames = this.names.filter(function (word) { return word.toLowerCase().includes(_this.searchPhrase.toLowerCase()); });
        console.log(this.filteredNames);
    };
    UserListComponent.prototype.onSubmit = function (args) {
        //intentionally left blank
    };
    UserListComponent.prototype.selectedIndexChanged = function (args) {
        var picker = args.object;
        this.picked = this.filteredNames[picker.selectedIndex];
        this.pickedFirstName = this.users[picker.selectedIndex].getFirstName();
        this.pickedLastName = this.users[picker.selectedIndex].getLastName();
        this.pickedUnumber = this.users[picker.selectedIndex].getUnumber();
        this.pickedEmail = this.users[picker.selectedIndex].getEmail();
        this.pickedUserName = this.users[picker.selectedIndex].getUserName();
        console.log('this.picked: ', this.picked);
    };
    UserListComponent.prototype.ngOnInit = function () {
        console.log("user component initiated!");
        this.getUsers();
    };
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_4__["request"])({
            url: _db_config__WEBPACK_IMPORTED_MODULE_3__["localUrl"] + "users",
            method: "GET"
        }).then(function (response) {
            var rows = response.content.toJSON();
            //console.log(rows)
            rows.forEach(function (row) {
                var temp = new _user__WEBPACK_IMPORTED_MODULE_5__["User"](row.unumber, row.first_name, row.last_name, row.email, row.username);
                //console.log(temp)
                _this.users.push(temp);
                _this.names.push(row.first_name + ' ' + row.last_name);
                _this.firstNames.push(row.first_name);
                _this.lastNames.push(row.last_name);
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
    UserListComponent.prototype.userDetails = function () {
        this.routerExtensions.navigateByUrl("admin/userdetails/" + this.picked + '/' + this.pickedFirstName + '/' + this.pickedLastName + '/' + this.pickedUnumber + '/' + this.pickedEmail + '/' + this.pickedUserName);
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
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__("./app/admin/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./app/admin/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(unumber, firstName, lastName, email, userName) {
        this.unumber = unumber;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.userName = userName;
    }
    User.prototype.getUnumber = function () {
        return this.unumber;
    };
    User.prototype.getFirstName = function () {
        return this.firstName;
    };
    User.prototype.getLastName = function () {
        return this.lastName;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getUserName = function () {
        return this.userName;
    };
    return User;
}());



/***/ }),

/***/ "./app/admin/vehicle.service.ts":
/***/ (function(module, exports) {



/***/ })

}]);