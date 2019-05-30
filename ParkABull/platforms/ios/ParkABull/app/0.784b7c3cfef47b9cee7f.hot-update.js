webpackHotUpdate(0,{

/***/ "./app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("@angular/core");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_angular_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("tns-core-modules/http");
/* harmony import */ var tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_http__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tns-core-modules/data/observable");
/* harmony import */ var tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("tns-core-modules/color");
/* harmony import */ var tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var md5_md5_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/md5/md5.js");
/* harmony import */ var md5_md5_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(md5_md5_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("nativescript-angular/router");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__);
var nodeify = __webpack_require__("../node_modules/nativescript-nodeify/nodeify.js");




 //md5.js exports a function without a name.

var HomeComponent = /** @class */ (function () {
    function HomeComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.boxColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](255, 207, 196, 147); //(255, 207,196,147) usf gold
        this.greenColor = new tns_core_modules_color__WEBPACK_IMPORTED_MODULE_3__["Color"](255, 0, 103, 71); //usf green
        this.buttontext = "Tap Me!";
        this.counter = 0;
        this.autocaps = "none";
        // Use the component constructor to inject providers.
    }
    HomeComponent.prototype.onTap = function (args) {
        var _this = this;
        var button = args.object;
        var newpass = md5_md5_js__WEBPACK_IMPORTED_MODULE_4__(this.password);
        console.log(newpass);
        console.log(this.username + ': ' + this.password);
        var viewModel = new tns_core_modules_data_observable__WEBPACK_IMPORTED_MODULE_2__["Observable"]();
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
        __metadata("design:paramtypes", [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterExtensions"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ })

})