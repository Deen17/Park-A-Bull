(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home.component.ts");



var routes = [
    { path: "", component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forChild(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar backgroundcolor=\"{{this.greenColor}}\" class=\"action-bar\">\r\n    <Label class=\"action-bar-title\" text=\"Login\"></Label>\r\n</ActionBar>\r\n<StackLayout  class=\"input-field\">\r\n    <Image src=\"~/assets/usf.png\" stretch=\"aspectFit\"></Image>\r\n        \r\n    <TextField autocapitalizationType=\"{{this.autocaps}}\" borderBottomWidth=1 borderRadius=10 (textChange)=\"onTextChange1($event)\" backgroundColor=\"{{this.boxColor}}\" width=250 height=75 id=\"text1\" hint=\"username\" autocorrect=\"false\" text=\"{{this.username}}\"></TextField>\r\n\r\n    <TextField autocapitalizationType=\"{{this.autocaps}}\" secure=true borderRadius=10 (textChange)=\"onTextChange2($event)\" backgroundColor=\"{{this.boxColor}}\" width=250 height=75 hint=\"password\" autocorrect=\"false\" id=\"text2\" text=\"{{this.password}}\"></TextField>\r\n    \r\n\r\n    <Button backgroundColor=\"{{this.greenColor}}\" class=\"btn btn-primary btn-active\" id=\"button\" text=\"Login\" (tap)=\"onTap($event)\"></Button>\r\n    <Button backgroundColor=\"{{this.greenColor}}\" class=\"btn btn-primary btn-active\" id=\"button2\" text=\"Register\" (tap)=\"onTap($event)\"></Button>\r\n    <Button backgroundColor=\"{{this.greenColor}}\" class=\"btn btn-primary btn-active\" id=\"button3\" text=\"{{this.buttontext}}\" (tap)=\"onTap2($event)\"></Button>\r\n\r\n\r\n</StackLayout>"

/***/ }),

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/color");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var md5_md5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/md5/md5.js");
/* harmony import */ var md5_md5_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(md5_md5_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__);
var nodeify = __webpack_require__("../node_modules/nativescript-nodeify/nodeify.js");



 //md5.js exports a function without a name.

var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.boxColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__["Color"](255, 207, 196, 147); //(255, 207,196,147) usf gold
        this.greenColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_2__["Color"](255, 0, 103, 71); //usf green
        this.buttontext = "Tap Me!";
        this.counter = 0;
        this.autocaps = "none";
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.onTap = function (args) {
        var _this = this;
        var button = args.object;
        var newpass = md5_md5_js__WEBPACK_IMPORTED_MODULE_3__(this.password);
        console.log(newpass);
        console.log(this.username + ': ' + this.password);
        Object(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__["request"])({
            url: "http://10.100.0.232:8000/login",
            method: "POST",
            headers: { "Content-Type": "application/json" },
            content: JSON.stringify({
                username: this.username,
                password: newpass
            })
        }).then(function (response) {
            var result = response.content.toJSON();
            if (result.login)
                _this.login();
            else
                (alert("Login failed!"));
        }, function (e) {
        });
    };
    HomeComponent.prototype.login = function () {
        console.log('entered login()');
        //this.routerExtensions.navigateByUrl("login")
    };
    HomeComponent.prototype.onTextChange1 = function (args) {
        var text1 = args.object;
        this.username = text1.text;
    };
    HomeComponent.prototype.onTextChange2 = function (args) {
        var text2 = args.object;
        this.password = text2.text;
    };
    HomeComponent.prototype.onTap2 = function () {
        this.counter++;
        this.buttontext = 'Tapped ' + this.counter + ' times!';
    };
    HomeComponent.prototype.ngOnInit = function () {
        console.log('Home Component initiated');
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "Home",
            template: __webpack_require__("./app/home/home.component.html"),
        }),
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterExtensions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("nativescript-angular/common");
/* harmony import */ var nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/home/home-routing.module.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/home/home.component.ts");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("nativescript-angular/http-client");
/* harmony import */ var nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_4__);





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                nativescript_angular_common__WEBPACK_IMPORTED_MODULE_1__["NativeScriptCommonModule"],
                _home_routing_module__WEBPACK_IMPORTED_MODULE_2__["HomeRoutingModule"],
                nativescript_angular_http_client__WEBPACK_IMPORTED_MODULE_4__["NativeScriptHttpClientModule"]
            ],
            declarations: [
                _home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
            ],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
    ], HomeModule);
    return HomeModule;
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

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc"}};

/***/ })

}]);