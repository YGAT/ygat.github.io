webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_menu_component__ = __webpack_require__("../../../../../src/app/components/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_new_user_component__ = __webpack_require__("../../../../../src/app/components/new-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_existing_user_component__ = __webpack_require__("../../../../../src/app/components/existing-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_test_detail_component__ = __webpack_require__("../../../../../src/app/components/test-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_component__ = __webpack_require__("../../../../../src/app/components/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot([
                {
                    path: 'new-user',
                    component: __WEBPACK_IMPORTED_MODULE_6__components_new_user_component__["a" /* NewUserComponent */]
                },
                {
                    path: 'existing-user/:id',
                    component: __WEBPACK_IMPORTED_MODULE_7__components_existing_user_component__["a" /* ExistingUserComponent */]
                },
                {
                    path: 'login',
                    component: __WEBPACK_IMPORTED_MODULE_9__components_login_component__["a" /* LoginComponent */]
                },
                {
                    path: '',
                    redirectTo: 'home',
                    pathMatch: 'full'
                },
                {
                    path: 'home',
                    component: __WEBPACK_IMPORTED_MODULE_5__components_menu_component__["a" /* MenuComponent */]
                }
            ])
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_new_user_component__["a" /* NewUserComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_existing_user_component__["a" /* ExistingUserComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_test_detail_component__["a" /* TestDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_component__["a" /* LoginComponent */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__components_app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/templates/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/existing-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExistingUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie__ = __webpack_require__("../../../../cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ExistingUserComponent = (function () {
    function ExistingUserComponent(route) {
        this.route = route;
        this.testStatusObject = {};
        this.testStatuses = [];
        this.id = __WEBPACK_IMPORTED_MODULE_2_uuid__();
    }
    ExistingUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (paramMap) { return _this.id = paramMap['id']; });
        var cookies = __WEBPACK_IMPORTED_MODULE_3_cookie__["parse"](document.cookie);
        this.testStatusObject['survey'] = {
            'Name': 'Player Survey',
            'Url': 'https://docs.google.com/forms/d/e/1FAIpQLSfENsUuNrfqhwj6sjqTfijvJWtKfzSCehckQxhRkyXRmuXe4Q/viewform',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?usp=pp_url&entry.159398806=',
            'subLinks': [
                {
                    'Url': 'https://docs.google.com/forms/d/e/1FAIpQLSf4He0wyaSPp2IQDAz_Emz_dMSba3-F0Bgvo6cXprUo4vRBOw/viewform',
                    'Name': 'Dota 2',
                    'hasQueryString': true,
                    'queryString': '?usp=pp_url&entry.2068469188=',
                },
                {
                    'Url': 'https://docs.google.com/forms/d/e/1FAIpQLSdKx3V1-SBxceQJc5luBxNeRExNBFVeLadIgBORUH7oWMAyDA/viewform',
                    'Name': 'Starcraft 2',
                    'hasQueryString': true,
                    'queryString': '?usp=pp_url&entry.159398806=',
                },
                {
                    'Url': 'https://docs.google.com/forms/d/e/1FAIpQLSelJHCtXjvJAbpCdMVpxlptFl8ogJwerFFctycx1dvCBfG3LA/viewform',
                    'Name': 'League of Legends',
                    'hasQueryString': true,
                    'queryString': '?usp=pp_url&entry.159398806=',
                },
                {
                    'Url': 'https://docs.google.com/forms/d/e/1FAIpQLSfY1j8mu9FU2Wht4VKZmGXsYvN0W8OLzCkDJ_YjApxFuCXwtA/viewform',
                    'Name': 'Counter Strike: Global Offensive',
                    'hasQueryString': true,
                    'queryString': '?usp=pp_url&entry.159398806=',
                },
                {
                    'Url': 'https://docs.google.com/forms/d/e/1FAIpQLSd2eSGk5XlNvCJl6Wn5k_ot2um8y7myVz5h0QOmtrhG4-IMYA/viewform?usp=sf_link',
                    'Name': 'Tekken 7',
                    'hasQueryString': true,
                    'queryString': '?usp=pp_url&entry.159398806=',
                }
            ],
            'description': 'An survey of some details about you such as games played, rank etc. Please fill these first.'
        };
        this.testStatusObject['simpleReaction'] = {
            'Name': 'Simple Reaction Times',
            'Url': 'placeholder',
            'Completed': false,
            'queryString': '?ParticipantID=',
            'description': 'A short task to find how fast can you respond to a stimulus.'
        };
        this.testStatusObject['complexReaction'] = {
            'Name': 'Complex Reaction Times',
            'Url': 'placeholder',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?ParticipantID=',
            'description': 'A short task to find how fast can you respond to a stimulus while making a judgement.'
        };
        this.testStatusObject['htmsModded'] = {
            'Name': 'HMT-S modded',
            'Url': 'https://york.qualtrics.com/jfe/form/SV_eeukSQ8cf30gKC9',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?ParticipantID=',
            'description': 'A short task about finding rules in abstract patterns and completing in a logical way.'
        };
        this.testStatusObject['santaBarbara'] = {
            'Name': 'Santa Barbara Solids Test',
            'Url': 'https://york.qualtrics.com/jfe/form/SV_0859Wkyxk0cbmmN',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?ParticipantID=',
            'description': 'A task about interpreting cross-sections of objects and assuming a different perspective.'
        };
        this.testStatusObject['matrixReasoning'] = {
            'Name': 'Matrix Reasoning',
            'Url': 'https://york.qualtrics.com/jfe/form/SV_eyA8wlXf5tl8s0R',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?ParticipantID=',
            'description': 'A short task about finding rules in abstract patterns and completing in a logical ways.'
        };
        this.testStatusObject['figuralAnalogies'] = {
            'Name': 'Figural Analogies',
            'Url': 'https://york.qualtrics.com/jfe/form/SV_3P48apVJURUPwax',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?ParticipantID=',
            'description': 'A task involving identifying a patter in shapes.'
        };
        this.testStatusObject['numberSeries'] = {
            'Name': 'Number Series',
            'Url': 'https://york.qualtrics.com/jfe/form/SV_7WfrzhGDeqWRO5v',
            'Completed': false,
            'hasQueryString': true,
            'queryString': '?ParticipantID=',
            'description': 'This task tries to see if you can identify patterns in a sequence of numbers.'
        };
        for (var testStatusKey in this.testStatusObject) {
            var testStatus = this.testStatusObject[testStatusKey];
            if (!Object(__WEBPACK_IMPORTED_MODULE_5_util__["isUndefined"])(cookies[testStatus.Name])) {
                testStatus.Completed = cookies[testStatus.Name] === 'true';
            }
            else {
                document.cookie = __WEBPACK_IMPORTED_MODULE_3_cookie__["serialize"](testStatus['Name'], testStatus['Completed']);
            }
            this.testStatuses.push(testStatus);
        }
    };
    return ExistingUserComponent;
}());
ExistingUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'existing-user',
        template: __webpack_require__("../../../../../src/app/templates/existing-user.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ExistingUserComponent);

var _a;
//# sourceMappingURL=existing-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie__ = __webpack_require__("../../../../cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginComponent = (function () {
    function LoginComponent() {
        this.displayLoginMenu = false;
        this.id = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.displayLoginMenu = false;
        var cookies = __WEBPACK_IMPORTED_MODULE_2_cookie__["parse"](document.cookie);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_util__["isUndefined"])(cookies['id'])) {
            location.replace('/existing-user/' + cookies['id']);
        }
        else {
            this.displayLoginMenu = true;
        }
    };
    LoginComponent.prototype.login = function () {
        if (this.id !== "") {
            document.cookie = __WEBPACK_IMPORTED_MODULE_2_cookie__["serialize"]('id', this.id);
            location.replace('/existing-user/' + this.id);
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'login',
        template: __webpack_require__("../../../../../src/app/templates/login.component.html")
    })
], LoginComponent);

//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie__ = __webpack_require__("../../../../cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MenuComponent = (function () {
    function MenuComponent() {
        this.displayMenu = false;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.displayMenu = false;
        var cookies = __WEBPACK_IMPORTED_MODULE_2_cookie__["parse"](document.cookie);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_util__["isUndefined"])(cookies['id'])) {
            location.replace('/existing-user/' + cookies['id']);
        }
        else {
            this.displayMenu = true;
        }
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'menu',
        template: __webpack_require__("../../../../../src/app/templates/menu.component.html")
    })
], MenuComponent);

//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/new-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util__ = __webpack_require__("../../../../util/util.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_util__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie__ = __webpack_require__("../../../../cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid__ = __webpack_require__("../../../../uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewUserComponent = (function () {
    function NewUserComponent() {
        this.displayWelcomeMessage = false;
        this.id = __WEBPACK_IMPORTED_MODULE_3_uuid__();
    }
    NewUserComponent.prototype.ngOnInit = function () {
        this.displayWelcomeMessage = false;
        var cookies = __WEBPACK_IMPORTED_MODULE_2_cookie__["parse"](document.cookie);
        if (!Object(__WEBPACK_IMPORTED_MODULE_1_util__["isUndefined"])(cookies['id'])) {
            location.replace('/existing-user/' + cookies['id']);
        }
        else {
            this.displayWelcomeMessage = true;
            document.cookie = __WEBPACK_IMPORTED_MODULE_2_cookie__["serialize"]('id', this.id);
        }
    };
    return NewUserComponent;
}());
NewUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'new-user',
        providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["f" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["h" /* PathLocationStrategy */] }],
        template: __webpack_require__("../../../../../src/app/templates/new-user.component.html")
    })
], NewUserComponent);

//# sourceMappingURL=new-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/test-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookie__ = __webpack_require__("../../../../cookie/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestDetailComponent = (function () {
    function TestDetailComponent() {
    }
    TestDetailComponent.prototype.ngOnInit = function () {
    };
    TestDetailComponent.prototype.clickTest = function (testStatus) {
        var queryString = "";
        if (testStatus.hasQueryString) {
            queryString = testStatus.queryString + this.id;
        }
        var finalUrl = testStatus.Url + queryString;
        window.open(finalUrl, '_blank');
        testStatus.Completed = true;
        document.cookie = __WEBPACK_IMPORTED_MODULE_0_cookie__["serialize"](testStatus.Name, true);
    };
    return TestDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], TestDetailComponent.prototype, "testStatus", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], TestDetailComponent.prototype, "id", void 0);
TestDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-test-detail',
        template: __webpack_require__("../../../../../src/app/templates/test-detail.component.html")
    }),
    __metadata("design:paramtypes", [])
], TestDetailComponent);

//# sourceMappingURL=test-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/templates/app.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<header>\r\n  <img width=\"300\" src=\"assets/iggiLogo.png\" routerLink=\"/\">\r\n  <h1>York Gaming and Aptitude Test (YGAT)</h1>\r\n</header>\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/templates/existing-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"existing-user\">\r\n  <p>\r\n    Welcome back, friend! Please Bookmark this website if it's not too much trouble.\r\n    <br>\r\n    Here is your Participant ID: <span class=\"user-id\">{{id}}</span>\r\n    <br>\r\n    Below is a list of the tests required for this study, please try to do as many as you can, it would help us immensely!<br>\r\n    However, <span class=\"important\">the most important thing is to first fill in the first form from the list</span> so we can associate your test results with your in-game accounts and ability.\r\n  </p>\r\n  <ul class=\"test-list\">\r\n    <app-test-detail *ngFor=\"let testStatus of testStatuses\" [testStatus]=\"testStatus\" [id]=\"id\">\r\n    </app-test-detail>\r\n  </ul>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/templates/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayLoginMenu\" class=\"login\">\n  <p>\n    Welcome back, friend!<br>\n    You don't seem to have a cookie for us on this computer or browser, so you will have to enter it manually to continue the tests.\n    Please enter your previously generated user ID here: <input [(ngModel)]=\"id\" placeholder=\"Your ID here\" class=\"inline-input id-input\">\n  </p>\n  <a (click)=\"login()\">Onwards, to psychology!</a>\n</div>\n<div *ngIf=\"!displayLoginMenu\" class=\"loading-message\">\n  <h3>Loading...</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"subheading\">\n  <h2>Welcome to the study: Analysing Psychometrics in MOBAs {{displayMenu}}</h2>\n</div>\n<div *ngIf=\"displayMenu\" class=\"menu\">\n    <h3> Are you a...</h3>\n    <ul>\n      <li>\n        <a routerLink=\"/new-user\">New User?</a>\n      </li>\n      <li>\n        <a routerLink=\"/login\">Existing User?</a>\n      </li>\n    </ul>\n</div>\n<div *ngIf=\"!displayMenu\" class=\"loading-message\">\n  <h3>Loading...</h3>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/templates/new-user.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"displayWelcomeMessage\" class=\"new-user\">\r\n  <p>Hello, you are asked to participate in an experiment carried out by the University of York.</p>\r\n  <p>\r\n    Here is your personal ID: <span class=\"user-id\">{{id}}</span>\r\n  </p>\r\n  <p>\r\n    This ID will be stored in a cookie on your computer so you can return to our tests if you want to stop part-way through the tests.\r\n    The cookie will contain only your ID and which tests you have completed. If you don't want to use this cookie, or want to use a different computer, please note this ID down before proceeding, then you can delete the cookie.\r\n  </p>\r\n  <p>\r\n    We are trying to see if there’s a link between Visuospatial Abilities (the ability to manipulate objects in your head), Reaction Times and some aspects of your personality and how well you play video games. We are examining the following videogames : Dota 2 , League of Legends, CS:GO, Starcraft 2 and Tekken 7. It’s okay if you have played multiple games - we will ask you about each one individually.\r\n  </p>\r\n  <p>\r\n      We want to preserve your privacy. We will not ask you for personal information like your name or address. If are not comfortable with a question that is asked, you are welcome to skip it. If you answer a question please be as truthful as possible. \r\n  </p>\r\n  <p>\r\n      Your data will be encrypted, anonymized and no identifying information will be shared outside the University of York. \r\n  </p>\r\n  <p>\r\n      The only requirements we have is that you have played lots of Ranked games and that you are at least 18 years old.\r\n  </p>\r\n  <a routerLink=\"/existing-user/{{id}}\">Onwards, to psychology!</a>\r\n</div>\r\n<div *ngIf=\"!displayWelcomeMessage\" class=\"loading-message\">\r\n  <h3>Loading...</h3>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/templates/test-detail.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<li [ngClass]=\"{'completed': testStatus.Completed, 'uncompleted': !testStatus.Completed}\">\r\n  <p>\r\n\t  <span class=\"test-name\">{{testStatus.Name}}:</span>\r\n    <a (click)=\"clickTest(testStatus)\">here</a>\r\n  </p>\r\n  <p *ngIf=\"testStatus.description\" [innerText]=\"testStatus.description\"></p>\r\n  <div *ngIf=\"testStatus.Completed; then thenBlock else elseBlock\"></div>\r\n  <ng-template #thenBlock><p>You have already visited this test</p></ng-template>\r\n  <ng-template #elseBlock><p>This test has not been completed</p></ng-template>\r\n\t<div class=\"sublink\" *ngIf=\"testStatus.subLinks\">\r\n\t\tHere are individual game surveys, please fill out the surveys for any games that you play regularly and only games that you play regularly:\r\n\t\t<div *ngFor=\"let subLink of testStatus.subLinks\">\r\n\t\t\t<a (click)=\"clickTest(subLink)\">{{subLink.Name}}</a>\r\n\t\t</div>\r\n\t</div>\r\n</li>\r\n"

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map