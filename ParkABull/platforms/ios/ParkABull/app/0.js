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
    { path: "userdetails", component: _user_details_user_details_component__WEBPACK_IMPORTED_MODULE_3__["UserDetailsComponent"] },
    { path: "buildinglist", component: _building_list_building_list_component__WEBPACK_IMPORTED_MODULE_4__["BuildingListComponent"] },
    { path: "buildingdetails", component: _building_details_building_details_component__WEBPACK_IMPORTED_MODULE_5__["BuildingDetailsComponent"] },
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

module.exports = "<Button text=\"admin works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-admin',
            template: __webpack_require__("./app/admin/admin.component.html"),
            styles: [__webpack_require__("./app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/building-details/building-details.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"building-details works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/building-details/building-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingDetailsComponent", function() { return BuildingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var BuildingDetailsComponent = /** @class */ (function () {
    function BuildingDetailsComponent() {
    }
    BuildingDetailsComponent.prototype.ngOnInit = function () {
    };
    BuildingDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-building-details',
            template: __webpack_require__("./app/admin/building-details/building-details.component.html"),
            styles: [__webpack_require__("./app/admin/building-details/building-details.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<Button text=\"building-list works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/building-list/building-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingListComponent", function() { return BuildingListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var BuildingListComponent = /** @class */ (function () {
    function BuildingListComponent() {
    }
    BuildingListComponent.prototype.ngOnInit = function () {
    };
    BuildingListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-building-list',
            template: __webpack_require__("./app/admin/building-list/building-list.component.html"),
            styles: [__webpack_require__("./app/admin/building-list/building-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BuildingListComponent);
    return BuildingListComponent;
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

module.exports = "<Button text=\"lot-list works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/lot-list/lot-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotListComponent", function() { return LotListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var LotListComponent = /** @class */ (function () {
    function LotListComponent() {
    }
    LotListComponent.prototype.ngOnInit = function () {
    };
    LotListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-lot-list',
            template: __webpack_require__("./app/admin/lot-list/lot-list.component.html"),
            styles: [__webpack_require__("./app/admin/lot-list/lot-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LotListComponent);
    return LotListComponent;
}());



/***/ }),

/***/ "./app/admin/register/register.component.css":
/***/ (function(module, exports) {

module.exports = "/* Add mobile styles for the component here.  */\r\n"

/***/ }),

/***/ "./app/admin/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"register works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-register',
            template: __webpack_require__("./app/admin/register/register.component.html"),
            styles: [__webpack_require__("./app/admin/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<Button text=\"report-list works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/report-list/report-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportListComponent", function() { return ReportListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var ReportListComponent = /** @class */ (function () {
    function ReportListComponent() {
    }
    ReportListComponent.prototype.ngOnInit = function () {
    };
    ReportListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-report-list',
            template: __webpack_require__("./app/admin/report-list/report-list.component.html"),
            styles: [__webpack_require__("./app/admin/report-list/report-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<Button text=\"user-list works!\" class=\"btn btn-primary\"></Button>"

/***/ }),

/***/ "./app/admin/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);

var UserListComponent = /** @class */ (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-user-list',
            template: __webpack_require__("./app/admin/user-list/user-list.component.html"),
            styles: [__webpack_require__("./app/admin/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ })

}]);