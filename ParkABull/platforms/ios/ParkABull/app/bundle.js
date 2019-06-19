module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"~/app/admin/admin.module": [
		"./app/admin/admin.module.ts",
		0
	],
	"~/app/home/home.module": [
		"./app/home/home.module.ts",
		4
	],
	"~/app/login/login.module": [
		"./app/login/login.module.ts",
		"vendor",
		2
	],
	"~/app/register/register.module": [
		"./app/register/register.module.ts",
		"vendor",
		3
	],
	"~/app/user/building-details/building-details.component": [
		"./app/user/building-details/building-details.component.ts",
		5
	],
	"~/app/user/building-list/building-list.component": [
		"./app/user/building-list/building-list.component.ts",
		6
	],
	"~/app/user/profile/profile.component": [
		"./app/user/profile/profile.component.ts",
		7
	],
	"~/app/user/report/report.component": [
		"./app/user/report/report.component.ts",
		8
	],
	"~/app/user/reserve/reserve.component": [
		"./app/user/reserve/reserve.component.ts",
		9
	],
	"~/app/user/user.module": [
		"./app/user/user.module.ts",
		1
	],
	"~/app/user/vehicle-details/vehicle-details.component": [
		"./app/user/vehicle-details/vehicle-details.component.ts",
		10
	],
	"~/app/user/vehicle-list/vehicle-list.component": [
		"./app/user/vehicle-list/vehicle-list.component.ts",
		11
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/forest.css"), "");

// Module
exports.push([module.i, "/*\r\nIn NativeScript, the app.css file is where you place CSS rules that\r\nyou would like to apply to your entire application. Check out\r\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\r\nselectors and properties you can use to style UI components.\r\n\r\n/*\r\nIn many cases you may want to use the NativeScript core theme instead\r\nof writing your own CSS rules. For a full list of class names in the theme\r\nrefer to http://docs.nativescript.org/ui/theme.\r\n*/\r\n/*\r\n usf green: #006747\r\n usf gold: #CFC493\r\n*/\r\n/*\r\nFor example, the following CSS rule changes the font size of all UI\r\ncomponents that have the btn class name.\r\n*/\r\n.btn {\r\n    font-size: 18;\r\n}\r\n\r\nStackLayout TextField {\r\n    margin: 2;\r\n    border-radius: 10;\r\n    background-color: #CFC493;\r\n    width: 250;\r\n    height: 75;\r\n}\r\n\r\n.menu-icon {\r\n    font-size: 26; \r\n    color: white;\r\n    padding-left: 13;\r\n    vertical-align: center;\r\n}\r\n\r\n.fa {\r\n    font-family: \"FontAwesome\";\r\n}\r\n\r\n.var {\r\n    font-family: \"Varela\", \"varela-regular\";\r\n}\r\n\r\n.action-bar {\r\n    background-color: #006747;\r\n}\r\n\r\n/* .page-content {\r\n    background-color: #ffffff;\r\n    background-size: cover;\r\n} */\r\n\r\n.hr-light {\r\n    background-color: #444444;\r\n}\r\n\r\n.sidedrawer {\r\n    background-color: #ffffff;\r\n}\r\n\r\n.sidedrawer-header {\r\n    background-color: #006747;\r\n    background-size: cover;\r\n}\r\n\r\n.sidedrawer-header-text {\r\n    color: white;\r\n    font-size: 22;\r\n    font-weight: 800;\r\n    margin-top: 60;\r\n}\r\n\r\n.sidedrawer-header-footnote {\r\n    color: white;\r\n}\r\n\r\n.sidedrawer-list-item {\r\n    color: rgb(0, 0, 0);\r\n    padding-left: 30;\r\n    font-size: 18;\r\n    height: 80;\r\n}\r\n\r\n.sidedrawer-item {\r\n    vertical-align:center;\r\n}\r\n\r\n.sidedrawer-list-item-active {\r\n    background-color: #CFC493;\r\n}\r\n \r\n ", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);


var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    { path: "user", loadChildren: "~/app/user/user.module#UserModule" },
    { path: "admin", loadChildren: "~/app/admin/admin.module#AdminModule" },
    { path: "register", loadChildren: "~/app/register/register.module#RegisterModule" },
    { path: "building-details", loadChildren: "~/app/user/building-details/building-details.component" },
    { path: "building-list", loadChildren: "~/app/user/building-list/building-list.component" },
    { path: "profile", loadChildren: "~/app/user/profile/profile.component" },
    { path: "report", loadChildren: "~/app/user/report/report.component" },
    { path: "reserve", loadChildren: "~/app/user/reserve/reserve.component" },
    { path: "vehicle-details", loadChildren: "~/app/user/vehicle-details/vehicle-details.component" },
    { path: "vehicle-list", loadChildren: "~/app/user/vehicle-list/vehicle-list.component" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<page-router-outlet></page-router-outlet>\r\n\r\n<RadSideDrawer #rsd drawerTransition=\"PushTransition\">\r\n\r\n        <GridLayout tkDrawerContent rows=\"auto, *\" class=\"sidedrawer sidedrawer-left\">\r\n            <StackLayout class=\"sidedrawer-header\">\r\n                <Label class=\"sidedrawer-header-text var\" text=\"User Name\"></Label>\r\n                <Label class=\"sidedrawer-header-footnote var\" text=\"username@mail.com\"></Label>\r\n            </StackLayout>\r\n    \r\n            <ScrollView row=\"1\">\r\n                <StackLayout class=\"sidedrawer-content\">\r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Home\" (tap)=\"HomeTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Home\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Building Details\" (tap)=\"BuildingDetailTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Building Details\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Building List\" (tap)=\"BuildingListTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Building List\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Report\" (tap)=\"ReportTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Report\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Reserve\" (tap)=\"ReserveTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Reserve\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Vehicle Details\" (tap)=\"VehicleDetailTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Vehicle Details\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Vehicle List\" (tap)=\"VehicleListTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Vehicle List\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                    <GridLayout columns=\"auto, *\" class=\"sidedrawer-list-item\"\r\n                        title=\"Profile\" (tap)=\"ProfileTap($event)\">\r\n                        <Label row=\"0\" col=\"0\" text=\"Profile\" class=\"var m-l-10 sidedrawer-item\"></Label>\r\n                    </GridLayout>\r\n    \r\n                    <StackLayout class=\"hr-light\"></StackLayout>\r\n    \r\n                </StackLayout>\r\n            </ScrollView>\r\n        </GridLayout>\r\n    \r\n        <page-router-outlet tkMainContent class=\"page page-content\"></page-router-outlet>\r\n    \r\n    </RadSideDrawer>\r\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/ui/page");
/* harmony import */ var tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__);



var AppComponent = /** @class */ (function () {
    function AppComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        console.log("app component initiated");
    }
    AppComponent.prototype.HomeTap = function (args) {
        this.routerExtensions.navigateByUrl("user");
    };
    AppComponent.prototype.BuildingDetailTap = function (args) {
        this.routerExtensions.navigateByUrl("user/buildingdetails");
    };
    AppComponent.prototype.BuildingListTap = function (args) {
        this.routerExtensions.navigateByUrl("user/buildinglist");
    };
    AppComponent.prototype.ReportTap = function (args) {
        this.routerExtensions.navigateByUrl("user/report");
    };
    AppComponent.prototype.ReserveTap = function (args) {
        this.routerExtensions.navigateByUrl("user/reserve");
    };
    AppComponent.prototype.VehicleDetailTap = function (args) {
        this.routerExtensions.navigateByUrl("user/vehicledetails");
    };
    AppComponent.prototype.VehicleListTap = function (args) {
        this.routerExtensions.navigateByUrl("user/vehiclelist");
    };
    AppComponent.prototype.ProfileTap = function (args) {
        this.routerExtensions.navigateByUrl("user/profile");
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterExtensions"], tns_core_modules_ui_page__WEBPACK_IMPORTED_MODULE_2__["Page"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/nativescript.module");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("nativescript-ui-sidedrawer/angular");
/* harmony import */ var nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/app.component.ts");






var nsNgCoreImport_Generated = __webpack_require__("@angular/core");
var NSLazyModulesLoader_Generated = /** @class */ (function () {
    function NSLazyModulesLoader_Generated(_compiler, config) {
        this._compiler = _compiler;
        this._config = config || {
            factoryPathPrefix: '',
            factoryPathSuffix: '.ngfactory',
        };
    }
    NSLazyModulesLoader_Generated.prototype.load = function (path) {
        var offlineMode = this._compiler instanceof nsNgCoreImport_Generated.Compiler;
        return offlineMode ? this.loadFactory(path) : this.loadAndCompile(path);
    };
    NSLazyModulesLoader_Generated.prototype.loadAndCompile = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        if (exportName === undefined) {
            exportName = 'default';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(module)
            .then(function (module) { return module[exportName]; })
            .then(function (type) { return _this.checkNotEmpty(type, module, exportName); })
            .then(function (type) { return _this._compiler.compileModuleAsync(type); });
    };
    NSLazyModulesLoader_Generated.prototype.loadFactory = function (path) {
        var _this = this;
        var _a = path.split('#'), module = _a[0], exportName = _a[1];
        var factoryClassSuffix = 'NgFactory';
        if (exportName === undefined) {
            exportName = 'default';
            factoryClassSuffix = '';
        }
        return __webpack_require__("../$$_lazy_route_resource lazy recursive")(this._config.factoryPathPrefix + module + this._config.factoryPathSuffix)
            .then(function (module) { return module[exportName + factoryClassSuffix]; })
            .then(function (factory) { return _this.checkNotEmpty(factory, module, exportName); });
    };
    NSLazyModulesLoader_Generated.prototype.checkNotEmpty = function (value, modulePath, exportName) {
        if (!value) {
            throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
        }
        return value;
    };
    NSLazyModulesLoader_Generated = __decorate([
        nsNgCoreImport_Generated.Injectable(),
        __param(1, nsNgCoreImport_Generated.Optional()),
        __metadata("design:paramtypes", [nsNgCoreImport_Generated.Compiler, nsNgCoreImport_Generated.SystemJsNgModuleLoaderConfig])
    ], NSLazyModulesLoader_Generated);
    return NSLazyModulesLoader_Generated;
}());
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                nativescript_ui_sidedrawer_angular__WEBPACK_IMPORTED_MODULE_2__["NativeScriptUISideDrawerModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ],
            providers: [{ provide: nsNgCoreImport_Generated.NgModuleFactoryLoader, useClass: NSLazyModulesLoader_Generated }]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("nativescript-angular/platform");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("tns-core-modules/bundle-entry-points");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "@angular/core":
/***/ (function(module, exports) {

module.exports = require("@angular/core");

/***/ }),

/***/ "nativescript-angular/common":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/common");

/***/ }),

/***/ "nativescript-angular/forms":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/forms");

/***/ }),

/***/ "nativescript-angular/http-client":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/http-client");

/***/ }),

/***/ "nativescript-angular/nativescript.module":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/nativescript.module");

/***/ }),

/***/ "nativescript-angular/platform":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/platform");

/***/ }),

/***/ "nativescript-angular/router":
/***/ (function(module, exports) {

module.exports = require("nativescript-angular/router");

/***/ }),

/***/ "nativescript-ui-sidedrawer/angular":
/***/ (function(module, exports) {

module.exports = require("nativescript-ui-sidedrawer/angular");

/***/ }),

/***/ "tns-core-modules/application":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application");

/***/ }),

/***/ "tns-core-modules/application-settings":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/application-settings");

/***/ }),

/***/ "tns-core-modules/bundle-entry-points":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/bundle-entry-points");

/***/ }),

/***/ "tns-core-modules/color":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/color");

/***/ }),

/***/ "tns-core-modules/file-system":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/file-system");

/***/ }),

/***/ "tns-core-modules/http":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/http");

/***/ }),

/***/ "tns-core-modules/http/http":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/http/http");

/***/ }),

/***/ "tns-core-modules/ui/image":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/image");

/***/ }),

/***/ "tns-core-modules/ui/page":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/page");

/***/ }),

/***/ "tns-core-modules/ui/styling/style-scope":
/***/ (function(module, exports) {

module.exports = require("tns-core-modules/ui/styling/style-scope");

/***/ })

},[["./main.ts","runtime","vendor"]]]);