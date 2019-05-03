(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./const/urls.const.ts":
/*!*****************************!*\
  !*** ./const/urls.const.ts ***!
  \*****************************/
/*! exports provided: URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "URLS", function() { return URLS; });
var URLS = {
    api: 'http://localhost:3000/api/'
};


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header class=\"navbar navbar-dark bg-dark\">\n  <a href=\"#\" [routerLink]=\"['/general']\" class=\"navbar-brand\">English Words</a>\n</header>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>  "

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  margin-bottom: 40px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _card_card_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card/card.service */ "./src/app/card/card.service.ts");
/* harmony import */ var _customReuseStrategy__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./customReuseStrategy */ "./src/app/customReuseStrategy.ts");
/* harmony import */ var _general_general_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./general/general.component */ "./src/app/general/general.component.ts");
/* harmony import */ var _list_words_list_words_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./list-words/list-words.component */ "./src/app/list-words/list-words.component.ts");
/* harmony import */ var _list_words_list_words_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./list-words/list-words.service */ "./src/app/list-words/list-words.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'card/:id',
        component: _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"]
    },
    {
        path: 'listWords',
        component: _list_words_list_words_component__WEBPACK_IMPORTED_MODULE_10__["ListWordsComponent"]
    },
    {
        path: 'general',
        component: _general_general_component__WEBPACK_IMPORTED_MODULE_9__["GeneralComponent"]
    },
    { path: '',
        redirectTo: '/general',
        pathMatch: 'full'
    },
    { path: '**', component: _general_general_component__WEBPACK_IMPORTED_MODULE_9__["GeneralComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _card_card_component__WEBPACK_IMPORTED_MODULE_6__["CardComponent"],
                _general_general_component__WEBPACK_IMPORTED_MODULE_9__["GeneralComponent"],
                _list_words_list_words_component__WEBPACK_IMPORTED_MODULE_10__["ListWordsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes)
            ],
            providers: [
                {
                    provide: _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouteReuseStrategy"],
                    useClass: _customReuseStrategy__WEBPACK_IMPORTED_MODULE_8__["CustomRouteReuseStrategy"]
                },
                _card_card_service__WEBPACK_IMPORTED_MODULE_7__["CardService"],
                _list_words_list_words_service__WEBPACK_IMPORTED_MODULE_11__["ListWordsService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/card/card.component.html":
/*!******************************************!*\
  !*** ./src/app/card/card.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-buttons col-lg-6 col-10\" *ngIf=\"getId()!='0'\" >\n  <button class=\"btn btn-primary\" (click)=\"updateWord()\">Изменить карточку</button>\n  <button class=\"btn btn-primary\" (click)=\"isUpdate=false\" [routerLink]=\"['/card/0']\">Добавить слово</button>\n</div>\n<form class=\"jumbotron col-lg-6 col-10\">\n  <div class=\"form-group\">\n    <label for=\"english\">English</label>\n    <input class=\"form-control\" [ngModel]=\"card.englishWord\" (ngModelChange)=\"layoutSwitcherToEn($event)\" name=\"english\" [disabled]=\"disabledInput\">\n  </div>\n  <div class=\"form-group\">\n    <button [hidden]=\"isUpdate || isNewWord\" (click)=\"toggleShowRussian()\">{{cardService.showRussian? 'Скрыть перевод': 'Показать перевод'}}</button>\n  </div>\n  <div class=\"form-group\" [hidden]=\"!cardService.showRussian && !isUpdate && !isNewWord\">\n      <label for=\"russian\">Russian</label>\n      <input class=\"form-control\" [ngModel]=\"card.russianWord\" (ngModelChange)=\"layoutSwitcherToRu($event)\" name=\"russian\" [disabled]=\"disabledInput\">      \n  </div>\n  <div class=\"form-group form-check\" *ngIf=\"!isNewWord\">    \n    <input class=\"form-check-input\" type=\"checkbox\" [ngModel]=\"card.isHardly\" (ngModelChange)=\"setIsHardlly($event)\" name=\"isHardly\" id=\"isHardly\"> \n    <label class=\"form-check-label\" for=\"isHardly\">В плохо запоминаемое</label>\n  </div>\n  <div class=\"container-buttons\">\n    <button class=\"btn btn-primary\" [hidden]=\"!isNewWord\" (click)=\"sendNewWord()\">Создать</button>\n    <button class=\"btn btn-primary\" [hidden]=\"!isUpdate\" (click)=\"sendUpdate()\">Отправить</button>\n    <button class=\"btn btn-primary\" [hidden]=\"!isUpdate&&!isNewWord\" (click)=\"cancel()\">Отмена</button>\n  </div>\n  <a href=\"#\" [routerLink]=\"[prevLink]\" class=\"btn btn-primary link link-prev\"><</a>\n  <a href=\"#\" [routerLink]=\"[nextLink]\" class=\"btn btn-primary link link-next\">></a>\n  <p *ngIf=\"getId()>0\">Карточка {{getId()}} из {{cardsLength}}</p>\n</form>\n<div *ngIf=\"!isNewWord\" class=\"form-group form-check col-lg-6 col-10 ml-auto\">\n  <input class=\"form-check-input\" type=\"checkbox\" [(ngModel)]=\"cardService.onlyHardly\" (ngModelChange)=\"filterWords($event)\" id=\"onlyHardly\">\n  <label class=\"form-check-label\" for=\"onlyHardly\"> Только плохо запоминаемые</label>\n</div>\n\n"

/***/ }),

/***/ "./src/app/card/card.component.scss":
/*!******************************************!*\
  !*** ./src/app/card/card.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-buttons {\n  text-align: right;\n  margin-bottom: 20px;\n  margin-right: auto;\n  margin-left: auto; }\n  .container-buttons button {\n    margin-left: 10px; }\n  form {\n  margin: 0 auto 20px auto;\n  position: relative; }\n  .link {\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  .link-prev {\n  left: -50px; }\n  .link-next {\n  right: -50px; }\n  .form-control:disabled {\n  background: #fff; }\n"

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_cardModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/cardModel */ "./src/app/models/cardModel.ts");
/* harmony import */ var _card_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./card.service */ "./src/app/card/card.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var convert_layout_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! convert-layout/ru */ "./node_modules/convert-layout/ru.js");
/* harmony import */ var convert_layout_ru__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(convert_layout_ru__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CardComponent = /** @class */ (function () {
    function CardComponent(cardService, actvatedRoute, router) {
        this.cardService = cardService;
        this.actvatedRoute = actvatedRoute;
        this.router = router;
        this.card = new _models_cardModel__WEBPACK_IMPORTED_MODULE_1__["CardModel"]('', '');
        this.disabledInput = true;
        this.isUpdate = false;
        this.isNewWord = false;
    }
    Object.defineProperty(CardComponent.prototype, "prevLink", {
        get: function () {
            var prevInd = parseInt(this.getId()) - 1;
            if (prevInd < 1) {
                prevInd = this.cardsLength;
            }
            var newLink = '/card/' + prevInd;
            return newLink;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CardComponent.prototype, "nextLink", {
        get: function () {
            var nextInd = parseInt(this.getId()) + 1;
            if (nextInd > this.cardsLength) {
                nextInd = 1;
            }
            var newLink = '/card/' + nextInd;
            return newLink;
        },
        enumerable: true,
        configurable: true
    });
    CardComponent.prototype.ngOnInit = function () {
        this.getWord();
    };
    CardComponent.prototype.getId = function () {
        return this.actvatedRoute.snapshot.paramMap.get('id');
    };
    CardComponent.prototype.getCountWords = function (callback) {
        var _this = this;
        return this.cardService.getCardsLength()
            .subscribe(function (resp) {
            _this.cardsLength = resp.count;
            if (callback) {
                callback();
            }
        });
    };
    CardComponent.prototype.getWord = function () {
        var _this = this;
        this.getCountWords();
        var i = this.getId();
        if (i != '0') {
            this.cardService.getCardData(i)
                .subscribe(function (resp) {
                _this.card = resp;
            }, function (err) {
                console.log(err);
            });
        }
        else {
            this.addWord();
        }
    };
    CardComponent.prototype.addWord = function () {
        this.card = new _models_cardModel__WEBPACK_IMPORTED_MODULE_1__["CardModel"]('', '');
        this.isNewWord = true;
        this.isUpdate = false;
        this.disabledInput = false;
    };
    CardComponent.prototype.sendNewWord = function () {
        var _this = this;
        this.cardService.postCardData(this.card)
            .subscribe(function (resp) {
            _this.cardService.onlyHardly = false;
            var callback = function () { return _this.router.navigate(["/card/" + _this.cardsLength]); };
            _this.getCountWords(callback);
        });
    };
    CardComponent.prototype.updateWord = function () {
        this.isUpdate = true;
        this.isNewWord = false;
        this.disabledInput = false;
    };
    CardComponent.prototype.sendUpdate = function () {
        var _this = this;
        this.cardService.updateCardData(this.card)
            .subscribe(function (resp) {
            _this.getWord();
            _this.isUpdate = false;
            _this.disabledInput = true;
        }, function (err) { return console.log(err); });
    };
    CardComponent.prototype.setIsHardlly = function (e) {
        this.card.isHardly = e;
        console.log(this.card);
        this.cardService.setHardly(this.card).subscribe(function (data) {
            console.log(data);
        });
    };
    CardComponent.prototype.toggleShowRussian = function () {
        this.cardService.showRussian = !this.cardService.showRussian;
    };
    CardComponent.prototype.cancel = function () {
        this.isUpdate = false;
        this.isNewWord = false;
        if (this.getId() == '0') {
            this.router.navigate(['card/1']);
        }
    };
    CardComponent.prototype.filterWords = function (e) {
        if (this.getId() == "1") {
            this.getWord();
        }
        else {
            this.router.navigate(['card/1']);
        }
    };
    CardComponent.prototype.layoutSwitcherToRu = function (e) {
        this.card.russianWord = convert_layout_ru__WEBPACK_IMPORTED_MODULE_4__["fromEn"](e);
    };
    CardComponent.prototype.layoutSwitcherToEn = function (e) {
        this.card.englishWord = convert_layout_ru__WEBPACK_IMPORTED_MODULE_4__["toEn"](e);
    };
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __webpack_require__(/*! ./card.component.html */ "./src/app/card/card.component.html"),
            styles: [__webpack_require__(/*! ./card.component.scss */ "./src/app/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [_card_service__WEBPACK_IMPORTED_MODULE_2__["CardService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/card/card.service.ts":
/*!**************************************!*\
  !*** ./src/app/card/card.service.ts ***!
  \**************************************/
/*! exports provided: CardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardService", function() { return CardService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var const_urls_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! const/urls.const */ "./const/urls.const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardService = /** @class */ (function () {
    function CardService(http) {
        this.http = http;
    }
    CardService.prototype.getCardsLength = function () {
        return this.http.get(const_urls_const__WEBPACK_IMPORTED_MODULE_2__["URLS"].api + "card/count?onlyHardly=" + this.onlyHardly);
    };
    CardService.prototype.getCardData = function (id) {
        return this.http.get(const_urls_const__WEBPACK_IMPORTED_MODULE_2__["URLS"].api + "card?id=" + id + "&onlyHardly=" + this.onlyHardly);
    };
    CardService.prototype.postCardData = function (newWord) {
        return this.http.post(const_urls_const__WEBPACK_IMPORTED_MODULE_2__["URLS"].api + "card", newWord);
    };
    CardService.prototype.updateCardData = function (changeWord) {
        return this.http.put(const_urls_const__WEBPACK_IMPORTED_MODULE_2__["URLS"].api + "card", changeWord);
    };
    CardService.prototype.setHardly = function (card) {
        return this.http.put(const_urls_const__WEBPACK_IMPORTED_MODULE_2__["URLS"].api + "card/setHardly", card);
    };
    CardService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CardService);
    return CardService;
}());



/***/ }),

/***/ "./src/app/customReuseStrategy.ts":
/*!****************************************!*\
  !*** ./src/app/customReuseStrategy.ts ***!
  \****************************************/
/*! exports provided: CustomRouteReuseStrategy */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomRouteReuseStrategy", function() { return CustomRouteReuseStrategy; });
var CustomRouteReuseStrategy = /** @class */ (function () {
    function CustomRouteReuseStrategy() {
        this.routesToCache = [];
        this.storedRouteHandles = new Map();
    }
    // Decides if the route should be stored
    CustomRouteReuseStrategy.prototype.shouldDetach = function (route) {
        return this.routesToCache.indexOf(route.routeConfig.path) > -1;
    };
    //Store the information for the route we're destructing
    CustomRouteReuseStrategy.prototype.store = function (route, handle) {
        this.storedRouteHandles.set(route.routeConfig.path, handle);
    };
    //Return true if we have a stored route object for the next route
    CustomRouteReuseStrategy.prototype.shouldAttach = function (route) {
        return this.storedRouteHandles.has(route.routeConfig.path);
    };
    //If we returned true in shouldAttach(), now return the actual route data for restoration
    CustomRouteReuseStrategy.prototype.retrieve = function (route) {
        return this.storedRouteHandles.get(route.routeConfig.path);
    };
    //Reuse the route if we're going to and from the same route
    CustomRouteReuseStrategy.prototype.shouldReuseRoute = function (future, curr) {
        var name = future.component && future.component.name;
        return (future.routeConfig === curr.routeConfig) && (name !== 'CardComponent');
    };
    return CustomRouteReuseStrategy;
}());



/***/ }),

/***/ "./src/app/general/general.component.html":
/*!************************************************!*\
  !*** ./src/app/general/general.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"nav\">\n    <li class=\"nav-item\">\n      <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/card/1']\" tabindex=\"0\">Карточки</a>   \n    </li>\n    <li>\n      <a class=\"nav-link\" href=\"#\" [routerLink]=\"['/listWords']\" tabindex=\"0\">Список слов</a>\n    </li>\n  </ul>\n</nav>"

/***/ }),

/***/ "./src/app/general/general.component.scss":
/*!************************************************!*\
  !*** ./src/app/general/general.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/general/general.component.ts":
/*!**********************************************!*\
  !*** ./src/app/general/general.component.ts ***!
  \**********************************************/
/*! exports provided: GeneralComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralComponent", function() { return GeneralComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeneralComponent = /** @class */ (function () {
    function GeneralComponent() {
    }
    GeneralComponent.prototype.ngOnInit = function () {
    };
    GeneralComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-general',
            template: __webpack_require__(/*! ./general.component.html */ "./src/app/general/general.component.html"),
            styles: [__webpack_require__(/*! ./general.component.scss */ "./src/app/general/general.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GeneralComponent);
    return GeneralComponent;
}());



/***/ }),

/***/ "./src/app/list-words/list-words.component.html":
/*!******************************************************!*\
  !*** ./src/app/list-words/list-words.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Список Ваших слов</h3>\n<div class=\"form-group form-check\">\n  <input class=\"form-check-input\" type=\"checkbox\" [ngModel]=\"onlyHardly\" (ngModelChange)=\"filterWords($event)\" id=\"onlyHardly\">\n  <label class=\"form-check-label\" for=\"onlyHardly\"> Только трудные</label>\n</div>\n<table class=\"table table-striped\">\n  <thead>\n    <tr>\n      <th scope=\"col\">#</th>\n      <th scope=\"col\">English</th>\n      <th scope=\"col\">Russian</th>\n      <th scope=\"col\">Трудное для изучения</th>\n      <th scope=\"col\">Переход к карточке</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let el of listShowWords; let i = index\">\n      <td >{{i+1}}</td>\n      <td>{{el.englishWord}}</td>\n      <td>{{el.russianWord}}</td>\n      <td>{{el.isHardly ? 'да': ''}}</td>\n      <td>\n        <a href=\"#\" [routerLink]=\"['/card/'+ (i+1)]\">{{el.englishWord}}</a>\n      </td>\n    </tr>    \n  </tbody>\n</table>"

/***/ }),

/***/ "./src/app/list-words/list-words.component.scss":
/*!******************************************************!*\
  !*** ./src/app/list-words/list-words.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 575px) {\n  table thead tr th:nth-child(4) {\n    display: none; }\n  table tbody tr td:nth-child(4) {\n    display: none; } }\n"

/***/ }),

/***/ "./src/app/list-words/list-words.component.ts":
/*!****************************************************!*\
  !*** ./src/app/list-words/list-words.component.ts ***!
  \****************************************************/
/*! exports provided: ListWordsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWordsComponent", function() { return ListWordsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _list_words_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-words.service */ "./src/app/list-words/list-words.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListWordsComponent = /** @class */ (function () {
    function ListWordsComponent(listWordsService) {
        this.listWordsService = listWordsService;
        this.listWords = [];
        this.listShowWords = [];
    }
    ListWordsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.listWordsService.getWords().subscribe(function (d) {
            _this.listWords = d;
            _this.listShowWords = d;
        });
    };
    ListWordsComponent.prototype.filterWords = function (e) {
        if (e) {
            this.listShowWords = this.listWords.filter(function (el) {
                return el.isHardly === true;
            });
        }
        else {
            this.listShowWords = this.listWords;
        }
    };
    ListWordsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-words',
            template: __webpack_require__(/*! ./list-words.component.html */ "./src/app/list-words/list-words.component.html"),
            styles: [__webpack_require__(/*! ./list-words.component.scss */ "./src/app/list-words/list-words.component.scss")]
        }),
        __metadata("design:paramtypes", [_list_words_service__WEBPACK_IMPORTED_MODULE_1__["ListWordsService"]])
    ], ListWordsComponent);
    return ListWordsComponent;
}());



/***/ }),

/***/ "./src/app/list-words/list-words.service.ts":
/*!**************************************************!*\
  !*** ./src/app/list-words/list-words.service.ts ***!
  \**************************************************/
/*! exports provided: ListWordsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListWordsService", function() { return ListWordsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var const_urls_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! const/urls.const */ "./const/urls.const.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListWordsService = /** @class */ (function () {
    function ListWordsService(http) {
        this.http = http;
    }
    ListWordsService.prototype.getWords = function () {
        return this.http.get(const_urls_const__WEBPACK_IMPORTED_MODULE_2__["URLS"].api + "listWords");
    };
    ListWordsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ListWordsService);
    return ListWordsService;
}());



/***/ }),

/***/ "./src/app/models/cardModel.ts":
/*!*************************************!*\
  !*** ./src/app/models/cardModel.ts ***!
  \*************************************/
/*! exports provided: CardModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModel", function() { return CardModel; });
var CardModel = /** @class */ (function () {
    function CardModel(englishWord, russianWord) {
        this.englishWord = englishWord;
        this.russianWord = russianWord;
    }
    return CardModel;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! f:\www\englishword\front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map