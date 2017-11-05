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

/***/ "../../../../../src/appHeroComplete/Entities/hero.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hero; });
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());

//# sourceMappingURL=hero.js.map

/***/ }),

/***/ "../../../../../src/appHeroComplete/Services/hero.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { HEROES } from '../Mocks/heroes-mock.constants';
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost/Test.Core/api/Heroes';
    }
    HeroService.prototype.getHeroes = function () {
        return this.http
            .get(this.heroesUrl)
            .toPromise()
            .then(function (response) {
            return Promise.resolve(response.json());
            // response.json().data as Hero[];
        });
    };
    HeroService.prototype.getHero = function (id) {
        return this.getHeroes().then(function (heroes) { return heroes.find(function (hero) { return hero.id === id; }); });
    };
    HeroService.prototype.handleError = function (error) {
        // console.error('An Error occurred:', error);
        return Promise.reject(error.message || error);
    };
    return HeroService;
}());
HeroService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], HeroService);

var _a;
//# sourceMappingURL=hero.service.js.map

/***/ }),

/***/ "../../../../../src/appHeroComplete/app-hero.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_hero_app_hero_component__ = __webpack_require__("../../../../../src/appHeroComplete/app-hero/app-hero.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/appHeroComplete/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__hero_list_hero_list_component__ = __webpack_require__("../../../../../src/appHeroComplete/hero-list/hero-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__ = __webpack_require__("../../../../../src/appHeroComplete/hero-detail/hero-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Services_hero_service__ = __webpack_require__("../../../../../src/appHeroComplete/Services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppHeroModule = (function () {
    function AppHeroModule() {
    }
    return AppHeroModule;
}());
AppHeroModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        // Aqui se declaran todos los componentes de la aplicacion
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_hero_app_hero_component__["a" /* AppHeroComponent */],
            __WEBPACK_IMPORTED_MODULE_8__hero_list_hero_list_component__["a" /* HeroListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
        ],
        // Aqui se insertan las dependencias de la aplicacion
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full'
                },
                {
                    path: 'dashboard',
                    component: __WEBPACK_IMPORTED_MODULE_7__dashboard_dashboard_component__["a" /* DashboardComponent */]
                },
                {
                    path: 'heroes',
                    component: __WEBPACK_IMPORTED_MODULE_8__hero_list_hero_list_component__["a" /* HeroListComponent */]
                },
                {
                    path: 'detail/:id',
                    component: __WEBPACK_IMPORTED_MODULE_9__hero_detail_hero_detail_component__["a" /* HeroDetailComponent */]
                }
            ])
        ],
        // Aqui se meten los servicios que lleva la aplicacion
        providers: [__WEBPACK_IMPORTED_MODULE_10__Services_hero_service__["a" /* HeroService */]],
        // Aqui indicamos cual sera el componente principal de la aplicacion
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_hero_app_hero_component__["a" /* AppHeroComponent */]]
    })
], AppHeroModule);

//# sourceMappingURL=app-hero.module.js.map

/***/ }),

/***/ "../../../../../src/appHeroComplete/app-hero/app-hero.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{title}}</h2>\n<nav>\n  <a routerLink=\"/dashboard\">DashBoard</a>\n  <a routerLink=\"/heroes\">Heroes</a>\n</nav>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/appHeroComplete/app-hero/app-hero.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppHeroComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppHeroComponent = (function () {
    function AppHeroComponent() {
        this.title = 'Heroes Application';
    }
    AppHeroComponent.prototype.ngOnInit = function () {
    };
    return AppHeroComponent;
}());
AppHeroComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hero',
        template: __webpack_require__("../../../../../src/appHeroComplete/app-hero/app-hero.component.html"),
    }),
    __metadata("design:paramtypes", [])
], AppHeroComponent);

//# sourceMappingURL=app-hero.component.js.map

/***/ }),

/***/ "../../../../../src/appHeroComplete/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/appHeroComplete/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Top Heroes</h3>\n<div class=\"grid grid-pad\">\n  <a *ngFor=\"let hero of heroes\" [routerLink]=\"['/detail', hero.id]\" class=\"col-1-4\">\n    <div class=\"module hero\">\n      <h4>{{hero.name}}</h4>\n    </div>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/appHeroComplete/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Services_hero_service__ = __webpack_require__("../../../../../src/appHeroComplete/Services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.heroService
            .getHeroes()
            .then(function (heroes) { return _this.heroes = heroes.slice(1, 5); });
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/appHeroComplete/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/appHeroComplete/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__Services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__Services_hero_service__["a" /* HeroService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/appHeroComplete/hero-detail/hero-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hero\">\n  <h2>{{hero.name}} details!</h2>\n  <div>\n    <label>id: </label>{{hero.id}}</div>\n  <div>\n    <label>name: </label>\n    <input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n  </div>\n  <button (click)=\"goBack()\">Back</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/appHeroComplete/hero-detail/hero-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Entities_hero__ = __webpack_require__("../../../../../src/appHeroComplete/Entities/hero.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Services_hero_service__ = __webpack_require__("../../../../../src/appHeroComplete/Services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeroDetailComponent = (function () {
    function HeroDetailComponent(heroService, route, location) {
        this.heroService = heroService;
        this.route = route;
        this.location = location;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            return _this.heroService.getHero(+params.get('id'));
        })
            .subscribe(function (hero) { return (_this.hero = hero); });
    };
    HeroDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    return HeroDetailComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__Entities_hero__["a" /* Hero */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__Entities_hero__["a" /* Hero */]) === "function" && _a || Object)
], HeroDetailComponent.prototype, "hero", void 0);
HeroDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'app-hero-detail',
        template: __webpack_require__("../../../../../src/appHeroComplete/hero-detail/hero-detail.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5__Services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__Services_hero_service__["a" /* HeroService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common__["f" /* Location */]) === "function" && _d || Object])
], HeroDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=hero-detail.component.js.map

/***/ }),

/***/ "../../../../../src/appHeroComplete/hero-list/hero-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\" [class.selected]=\"hero === selectedHero\" (click)=\"onSelect(hero)\">\n    <span class=\"badge\">{{hero.id}}</span> {{hero.name}}\n  </li>\n</ul>\n<div *ngIf=\"selectedHero\">\n  <h2>\n    {{selectedHero.name | uppercase}} is my hero\n  </h2>\n  <button (click)=\"goToDetail()\">View Details</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/appHeroComplete/hero-list/hero-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeroListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Services_hero_service__ = __webpack_require__("../../../../../src/appHeroComplete/Services/hero.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeroListComponent = (function () {
    function HeroListComponent(heroService, router) {
        this.heroService = heroService;
        this.router = router;
    }
    HeroListComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroListComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroListComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (heroes) {
            _this.heroes = heroes;
        });
    };
    HeroListComponent.prototype.goToDetail = function () {
        this.router.navigate(['/detail', this.selectedHero.id]);
    };
    return HeroListComponent;
}());
HeroListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-hero-list',
        template: __webpack_require__("../../../../../src/appHeroComplete/hero-list/hero-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__Services_hero_service__["a" /* HeroService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__Services_hero_service__["a" /* HeroService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeroListComponent);

var _a, _b;
//# sourceMappingURL=hero-list.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__appHeroComplete_app_hero_module__ = __webpack_require__("../../../../../src/appHeroComplete/app-hero.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__appHeroComplete_app_hero_module__["a" /* AppHeroModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map