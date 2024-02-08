"use strict";
(self["webpackChunkear_guide"] = self["webpackChunkear_guide"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _views_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./views/qr-scanner/qr-scanner.component */ 1009);
/* harmony import */ var _views_reader_reader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/reader/reader.component */ 2825);
/* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/error/error.component */ 5380);
/* harmony import */ var _resolvers_preload_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resolvers/preload.resolver */ 2535);
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/home/home.component */ 9470);
/* harmony import */ var _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/settings/settings.component */ 4988);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [{
  path: '',
  component: _views_home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent
}, {
  path: 'scanner',
  component: _views_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_0__.QrScannerComponent
}, {
  path: 'reader',
  component: _views_reader_reader_component__WEBPACK_IMPORTED_MODULE_1__.ReaderComponent,
  resolve: {
    guide: _resolvers_preload_resolver__WEBPACK_IMPORTED_MODULE_3__.preloadResolver
  }
}, {
  path: 'settings',
  component: _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_5__.SettingsComponent
}, {
  path: 'error',
  component: _views_error_error_component__WEBPACK_IMPORTED_MODULE_2__.ErrorComponent
}, {
  path: '**',
  redirectTo: '/error',
  pathMatch: 'full'
}];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled'
    }), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/theme.service */ 8140);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class AppComponent {
  constructor(themeService) {
    this.themeService = themeService;
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    decls: 1,
    vars: 0,
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "router-outlet");
      }
    },
    dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule),
/* harmony export */   "MyHammerConfig": () => (/* binding */ MyHammerConfig)
/* harmony export */ });
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ 5977);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/service-worker */ 3769);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _views_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/qr-scanner/qr-scanner.component */ 1009);
/* harmony import */ var _views_reader_reader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/reader/reader.component */ 2825);
/* harmony import */ var _views_error_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/error.component */ 5380);
/* harmony import */ var _handlers_my_error_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./handlers/my-error-handler */ 9509);
/* harmony import */ var _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/home/home.component */ 9470);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/layout/layout.component */ 9520);
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/menu/menu.component */ 5819);
/* harmony import */ var _components_icons_home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/icons/home-icon/home-icon.component */ 2801);
/* harmony import */ var _components_icons_info_icon_info_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/icons/info-icon/info-icon.component */ 4269);
/* harmony import */ var _components_icons_qr_icon_qr_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/icons/qr-icon/qr-icon.component */ 9659);
/* harmony import */ var _components_icons_single_click_icon_single_click_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/icons/single-click-icon/single-click-icon.component */ 4817);
/* harmony import */ var _components_icons_double_click_icon_double_click_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/icons/double-click-icon/double-click-icon.component */ 9569);
/* harmony import */ var _components_icons_arrow_left_icon_arrow_left_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/icons/arrow-left-icon/arrow-left-icon.component */ 7987);
/* harmony import */ var _components_icons_arrow_right_icon_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/icons/arrow-right-icon/arrow-right-icon.component */ 8965);
/* harmony import */ var _components_icons_arrow_down_icon_arrow_down_icon_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/icons/arrow-down-icon/arrow-down-icon.component */ 962);
/* harmony import */ var _components_icons_arrow_up_icon_arrow_up_icon_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/icons/arrow-up-icon/arrow-up-icon.component */ 1616);
/* harmony import */ var _components_info_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/info/info.component */ 852);
/* harmony import */ var _components_icons_audio_on_icon_audio_on_icon_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/icons/audio-on-icon/audio-on-icon.component */ 4518);
/* harmony import */ var _components_icons_audio_off_icon_audio_off_icon_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/icons/audio-off-icon/audio-off-icon.component */ 2476);
/* harmony import */ var _components_icons_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/icons/cross-icon/cross-icon.component */ 487);
/* harmony import */ var _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./views/settings/settings.component */ 4988);
/* harmony import */ var _components_icons_light_theme_icon_light_theme_icon_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/icons/light-theme-icon/light-theme-icon.component */ 6158);
/* harmony import */ var _components_icons_dark_theme_icon_dark_theme_icon_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/icons/dark-theme-icon/dark-theme-icon.component */ 8707);
/* harmony import */ var _components_icons_fast_icon_fast_icon_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/icons/fast-icon/fast-icon.component */ 5263);
/* harmony import */ var _components_icons_slow_icon_slow_icon_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/icons/slow-icon/slow-icon.component */ 1683);
/* harmony import */ var _components_icons_magnifier_minus_icon_magnifier_minus_icon_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/icons/magnifier-minus-icon/magnifier-minus-icon.component */ 2538);
/* harmony import */ var _components_icons_magnifier_plus_icon_magnifier_plus_icon_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/icons/magnifier-plus-icon/magnifier-plus-icon.component */ 1595);
/* harmony import */ var _components_icons_settings_icon_settings_icon_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/icons/settings-icon/settings-icon.component */ 7269);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE





































class MyHammerConfig extends _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.HammerGestureConfig {
  constructor() {
    super(...arguments);
    this.overrides = {
      tap: {
        threshold: 5,
        posThreshold: 50
      },
      swipe: {
        direction: hammerjs__WEBPACK_IMPORTED_MODULE_0__.DIRECTION_ALL
      },
      // necessary for vertical scrolling
      // see https://shorturl.at/qvzPW
      pinch: {
        enable: false
      },
      rotate: {
        enable: false
      }
    };
  }
  static #_ = this.ɵfac = /*@__PURE__*/function () {
    let ɵMyHammerConfig_BaseFactory;
    return function MyHammerConfig_Factory(t) {
      return (ɵMyHammerConfig_BaseFactory || (ɵMyHammerConfig_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵgetInheritedFactory"](MyHammerConfig)))(t || MyHammerConfig);
    };
  }();
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjectable"]({
    token: MyHammerConfig,
    factory: MyHammerConfig.ɵfac
  });
}
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵdefineInjector"]({
    providers: [(0,_angular_core__WEBPACK_IMPORTED_MODULE_32__.importProvidersFrom)(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.HammerModule), {
      provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_32__.ErrorHandler,
      useClass: _handlers_my_error_handler__WEBPACK_IMPORTED_MODULE_6__.MyErrorHandler
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__.ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !(0,_angular_core__WEBPACK_IMPORTED_MODULE_32__.isDevMode)(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })]
  });
}
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_32__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _views_qr_scanner_qr_scanner_component__WEBPACK_IMPORTED_MODULE_3__.QrScannerComponent, _views_reader_reader_component__WEBPACK_IMPORTED_MODULE_4__.ReaderComponent, _views_error_error_component__WEBPACK_IMPORTED_MODULE_5__.ErrorComponent, _views_home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_8__.LayoutComponent, _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_9__.MenuComponent, _components_icons_home_icon_home_icon_component__WEBPACK_IMPORTED_MODULE_10__.HomeIconComponent, _components_icons_info_icon_info_icon_component__WEBPACK_IMPORTED_MODULE_11__.InfoIconComponent, _components_icons_qr_icon_qr_icon_component__WEBPACK_IMPORTED_MODULE_12__.QrIconComponent, _components_icons_double_click_icon_double_click_icon_component__WEBPACK_IMPORTED_MODULE_14__.DoubleClickIconComponent, _components_icons_arrow_left_icon_arrow_left_icon_component__WEBPACK_IMPORTED_MODULE_15__.ArrowLeftIconComponent, _components_icons_arrow_right_icon_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_16__.ArrowRightIconComponent, _components_icons_arrow_down_icon_arrow_down_icon_component__WEBPACK_IMPORTED_MODULE_17__.ArrowDownIconComponent, _components_icons_arrow_up_icon_arrow_up_icon_component__WEBPACK_IMPORTED_MODULE_18__.ArrowUpIconComponent, _components_info_info_component__WEBPACK_IMPORTED_MODULE_19__.InfoComponent, _components_icons_single_click_icon_single_click_icon_component__WEBPACK_IMPORTED_MODULE_13__.SingleClickIconComponent, _components_icons_audio_on_icon_audio_on_icon_component__WEBPACK_IMPORTED_MODULE_20__.AudioOnIconComponent, _components_icons_audio_off_icon_audio_off_icon_component__WEBPACK_IMPORTED_MODULE_21__.AudioOffIconComponent, _components_icons_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_22__.CrossIconComponent, _views_settings_settings_component__WEBPACK_IMPORTED_MODULE_23__.SettingsComponent, _components_icons_light_theme_icon_light_theme_icon_component__WEBPACK_IMPORTED_MODULE_24__.LightThemeIconComponent, _components_icons_dark_theme_icon_dark_theme_icon_component__WEBPACK_IMPORTED_MODULE_25__.DarkThemeIconComponent, _components_icons_fast_icon_fast_icon_component__WEBPACK_IMPORTED_MODULE_26__.FastIconComponent, _components_icons_slow_icon_slow_icon_component__WEBPACK_IMPORTED_MODULE_27__.SlowIconComponent, _components_icons_magnifier_minus_icon_magnifier_minus_icon_component__WEBPACK_IMPORTED_MODULE_28__.MagnifierMinusIconComponent, _components_icons_magnifier_plus_icon_magnifier_plus_icon_component__WEBPACK_IMPORTED_MODULE_29__.MagnifierPlusIconComponent, _components_icons_settings_icon_settings_icon_component__WEBPACK_IMPORTED_MODULE_30__.SettingsIconComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_33__.HttpClientModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_34__.ServiceWorkerModule]
  });
})();

/***/ }),

/***/ 3597:
/*!********************************************!*\
  !*** ./src/app/behaviors/SwipeBehavior.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _commands_GoToNextElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands/GoToNextElement */ 9744);
/* harmony import */ var _commands_GoToNextSameLevelElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands/GoToNextSameLevelElement */ 25);
/* harmony import */ var _commands_GoToPreviousElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commands/GoToPreviousElement */ 7910);
/* harmony import */ var _commands_GoToPreviousSameLevelElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands/GoToPreviousSameLevelElement */ 9597);
/* harmony import */ var _commands_GoToNextHeading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commands/GoToNextHeading */ 6624);
/* harmony import */ var _commands_GoToNextHigherLevelHeading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./commands/GoToNextHigherLevelHeading */ 8998);
/* harmony import */ var _commands_GoToPreviousHeading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./commands/GoToPreviousHeading */ 2973);
/* harmony import */ var _commands_GoToPreviousHigherLevelHeading__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./commands/GoToPreviousHigherLevelHeading */ 9618);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE








const swipeBehavior = {
  singleSwipeRightCommand: new _commands_GoToNextElement__WEBPACK_IMPORTED_MODULE_0__.GoToNextElement(),
  doubleSwipeRightCommand: new _commands_GoToNextSameLevelElement__WEBPACK_IMPORTED_MODULE_1__.GoToNextSameLevelElement(),
  singleSwipeLeftCommand: new _commands_GoToPreviousElement__WEBPACK_IMPORTED_MODULE_2__.GoToPreviousElement(),
  doubleSwipeLeftCommand: new _commands_GoToPreviousSameLevelElement__WEBPACK_IMPORTED_MODULE_3__.GoToPreviousSameLevelElement(),
  singleSwipeDownCommand: new _commands_GoToNextHeading__WEBPACK_IMPORTED_MODULE_4__.GoToNextHeading(),
  doubleSwipeDownCommand: new _commands_GoToNextHigherLevelHeading__WEBPACK_IMPORTED_MODULE_5__.GoToNextHigherLevelHeading(),
  singleSwipeUpCommand: new _commands_GoToPreviousHeading__WEBPACK_IMPORTED_MODULE_6__.GoToPreviousHeading(),
  doubleSwipeUpCommand: new _commands_GoToPreviousHigherLevelHeading__WEBPACK_IMPORTED_MODULE_7__.GoToPreviousHigherLevelHeading()
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (swipeBehavior);

/***/ }),

/***/ 9744:
/*!*******************************************************!*\
  !*** ./src/app/behaviors/commands/GoToNextElement.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToNextElement": () => (/* binding */ GoToNextElement)
/* harmony export */ });
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE
class GoToNextElement {
  constructor() {
    this.description = 'Zu nächstem Text';
  }
  findIndex(elements, i) {
    return Math.min(i + 1, elements.length - 1);
  }
}

/***/ }),

/***/ 6624:
/*!*******************************************************!*\
  !*** ./src/app/behaviors/commands/GoToNextHeading.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToNextHeading": () => (/* binding */ GoToNextHeading)
/* harmony export */ });
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE
class GoToNextHeading {
  constructor() {
    this.description = 'Zu nächster Überschrift';
  }
  findIndex(elements, i) {
    const min = Math.min(i + 1, elements.length);
    const segment = elements.slice(min, elements.length);
    const next = segment.find(e => e.tag.charAt(0) === 'h');
    return next ? elements.indexOf(next) : i;
  }
}

/***/ }),

/***/ 8998:
/*!******************************************************************!*\
  !*** ./src/app/behaviors/commands/GoToNextHigherLevelHeading.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToNextHigherLevelHeading": () => (/* binding */ GoToNextHigherLevelHeading)
/* harmony export */ });
/* harmony import */ var _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ElementUtil */ 3604);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

class GoToNextHigherLevelHeading {
  constructor() {
    this.description = 'Zu nächster höheren Überschrift';
  }
  findIndex(elements, i) {
    const min = Math.min(i + 1, elements.length);
    const current = elements.at(i);
    const segment = elements.slice(min, elements.length);
    const next = segment.find(e => {
      return 0 < _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__["default"].compareLevel(current.tag, e.tag);
    });
    return next ? elements.indexOf(next) : i;
  }
}

/***/ }),

/***/ 25:
/*!****************************************************************!*\
  !*** ./src/app/behaviors/commands/GoToNextSameLevelElement.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToNextSameLevelElement": () => (/* binding */ GoToNextSameLevelElement)
/* harmony export */ });
/* harmony import */ var _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ElementUtil */ 3604);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

class GoToNextSameLevelElement {
  constructor() {
    this.description = 'Zu nächster gleichen Überschrift';
  }
  findIndex(elements, curr) {
    const current = elements.at(curr);
    for (let i = curr + 1; i < elements.length; i++) {
      const cmp = _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__["default"].compareLevel(current.tag, elements.at(i).tag);
      if (cmp === 0) {
        return i;
      } else if (cmp > 0) {
        return curr;
      }
    }
    return curr;
  }
}

/***/ }),

/***/ 7910:
/*!***********************************************************!*\
  !*** ./src/app/behaviors/commands/GoToPreviousElement.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToPreviousElement": () => (/* binding */ GoToPreviousElement)
/* harmony export */ });
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE
class GoToPreviousElement {
  constructor() {
    this.description = 'Zu vorherigem Text';
  }
  findIndex(elements, i) {
    return Math.max(i - 1, 0);
  }
}

/***/ }),

/***/ 2973:
/*!***********************************************************!*\
  !*** ./src/app/behaviors/commands/GoToPreviousHeading.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToPreviousHeading": () => (/* binding */ GoToPreviousHeading)
/* harmony export */ });
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE
class GoToPreviousHeading {
  constructor() {
    this.description = 'Zu vorheriger Überschrift';
  }
  findIndex(elements, i) {
    const segment = elements.slice(0, i).reverse();
    const prev = segment.find(e => e.tag.charAt(0) === 'h');
    return prev ? elements.indexOf(prev) : i;
  }
}

/***/ }),

/***/ 9618:
/*!**********************************************************************!*\
  !*** ./src/app/behaviors/commands/GoToPreviousHigherLevelHeading.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToPreviousHigherLevelHeading": () => (/* binding */ GoToPreviousHigherLevelHeading)
/* harmony export */ });
/* harmony import */ var _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ElementUtil */ 3604);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

class GoToPreviousHigherLevelHeading {
  constructor() {
    this.description = 'Zu vorheriger höheren Überschrift';
  }
  findIndex(elements, i) {
    const current = elements.at(i);
    const segment = elements.slice(0, i).reverse();
    const prev = segment.find(e => {
      return 0 < _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__["default"].compareLevel(current.tag, e.tag);
    });
    return prev ? elements.indexOf(prev) : i;
  }
}

/***/ }),

/***/ 9597:
/*!********************************************************************!*\
  !*** ./src/app/behaviors/commands/GoToPreviousSameLevelElement.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GoToPreviousSameLevelElement": () => (/* binding */ GoToPreviousSameLevelElement)
/* harmony export */ });
/* harmony import */ var _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/ElementUtil */ 3604);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

class GoToPreviousSameLevelElement {
  constructor() {
    this.description = 'Zu vorheriger gleichen Überschrift';
  }
  findIndex(elements, curr) {
    const current = elements.at(curr);
    for (let i = curr - 1; i >= 0; i--) {
      const cmp = _util_ElementUtil__WEBPACK_IMPORTED_MODULE_0__["default"].compareLevel(current.tag, elements.at(i).tag);
      if (cmp === 0) {
        return i;
      } else if (cmp > 0) {
        return curr;
      }
    }
    return curr;
  }
}

/***/ }),

/***/ 3604:
/*!********************************************************!*\
  !*** ./src/app/behaviors/commands/util/ElementUtil.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ElementUtil)
/* harmony export */ });
class ElementUtil {
  static compareLevel(a, b) {
    const levelA = this.getLevel(a);
    const levelB = this.getLevel(b);
    return levelA && levelB ? levelA - levelB : levelA ? -1 : levelB ? 1 : 0;
  }
  static getLevel(tag) {
    return tag.charAt(0) === 'h' ? +tag.charAt(1) : undefined;
  }
}

/***/ }),

/***/ 962:
/*!*******************************************************************************!*\
  !*** ./src/app/components/icons/arrow-down-icon/arrow-down-icon.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowDownIconComponent": () => (/* binding */ ArrowDownIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class ArrowDownIconComponent {
  static #_ = this.ɵfac = function ArrowDownIconComponent_Factory(t) {
    return new (t || ArrowDownIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArrowDownIconComponent,
    selectors: [["app-arrow-down-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"]],
    template: function ArrowDownIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7987:
/*!*******************************************************************************!*\
  !*** ./src/app/components/icons/arrow-left-icon/arrow-left-icon.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowLeftIconComponent": () => (/* binding */ ArrowLeftIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class ArrowLeftIconComponent {
  static #_ = this.ɵfac = function ArrowLeftIconComponent_Factory(t) {
    return new (t || ArrowLeftIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArrowLeftIconComponent,
    selectors: [["app-arrow-left-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"]],
    template: function ArrowLeftIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8965:
/*!*********************************************************************************!*\
  !*** ./src/app/components/icons/arrow-right-icon/arrow-right-icon.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowRightIconComponent": () => (/* binding */ ArrowRightIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class ArrowRightIconComponent {
  static #_ = this.ɵfac = function ArrowRightIconComponent_Factory(t) {
    return new (t || ArrowRightIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArrowRightIconComponent,
    selectors: [["app-arrow-right-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"]],
    template: function ArrowRightIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1616:
/*!***************************************************************************!*\
  !*** ./src/app/components/icons/arrow-up-icon/arrow-up-icon.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ArrowUpIconComponent": () => (/* binding */ ArrowUpIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class ArrowUpIconComponent {
  static #_ = this.ɵfac = function ArrowUpIconComponent_Factory(t) {
    return new (t || ArrowUpIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: ArrowUpIconComponent,
    selectors: [["app-arrow-up-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"]],
    template: function ArrowUpIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2476:
/*!*****************************************************************************!*\
  !*** ./src/app/components/icons/audio-off-icon/audio-off-icon.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioOffIconComponent": () => (/* binding */ AudioOffIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class AudioOffIconComponent {
  static #_ = this.ɵfac = function AudioOffIconComponent_Factory(t) {
    return new (t || AudioOffIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AudioOffIconComponent,
    selectors: [["app-audio-off-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"]],
    template: function AudioOffIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4518:
/*!***************************************************************************!*\
  !*** ./src/app/components/icons/audio-on-icon/audio-on-icon.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioOnIconComponent": () => (/* binding */ AudioOnIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class AudioOnIconComponent {
  static #_ = this.ɵfac = function AudioOnIconComponent_Factory(t) {
    return new (t || AudioOnIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: AudioOnIconComponent,
    selectors: [["app-audio-on-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"]],
    template: function AudioOnIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 487:
/*!*********************************************************************!*\
  !*** ./src/app/components/icons/cross-icon/cross-icon.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CrossIconComponent": () => (/* binding */ CrossIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class CrossIconComponent {
  static #_ = this.ɵfac = function CrossIconComponent_Factory(t) {
    return new (t || CrossIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: CrossIconComponent,
    selectors: [["app-cross-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M6 18L18 6M6 6l12 12"]],
    template: function CrossIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 8707:
/*!*******************************************************************************!*\
  !*** ./src/app/components/icons/dark-theme-icon/dark-theme-icon.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DarkThemeIconComponent": () => (/* binding */ DarkThemeIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class DarkThemeIconComponent {
  static #_ = this.ɵfac = function DarkThemeIconComponent_Factory(t) {
    return new (t || DarkThemeIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DarkThemeIconComponent,
    selectors: [["app-dark-theme-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"]],
    template: function DarkThemeIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9569:
/*!***********************************************************************************!*\
  !*** ./src/app/components/icons/double-click-icon/double-click-icon.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoubleClickIconComponent": () => (/* binding */ DoubleClickIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class DoubleClickIconComponent {
  static #_ = this.ɵfac = function DoubleClickIconComponent_Factory(t) {
    return new (t || DoubleClickIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DoubleClickIconComponent,
    selectors: [["app-double-click-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zm-7.518-.267A8.25 8.25 0 1120.25 10.5M8.288 14.212A5.25 5.25 0 1117.25 10.5"]],
    template: function DoubleClickIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5263:
/*!*******************************************************************!*\
  !*** ./src/app/components/icons/fast-icon/fast-icon.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FastIconComponent": () => (/* binding */ FastIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class FastIconComponent {
  static #_ = this.ɵfac = function FastIconComponent_Factory(t) {
    return new (t || FastIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: FastIconComponent,
    selectors: [["app-fast-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z"]],
    template: function FastIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2801:
/*!*******************************************************************!*\
  !*** ./src/app/components/icons/home-icon/home-icon.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeIconComponent": () => (/* binding */ HomeIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class HomeIconComponent {
  static #_ = this.ɵfac = function HomeIconComponent_Factory(t) {
    return new (t || HomeIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: HomeIconComponent,
    selectors: [["app-home-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"]],
    template: function HomeIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4269:
/*!*******************************************************************!*\
  !*** ./src/app/components/icons/info-icon/info-icon.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoIconComponent": () => (/* binding */ InfoIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class InfoIconComponent {
  static #_ = this.ɵfac = function InfoIconComponent_Factory(t) {
    return new (t || InfoIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: InfoIconComponent,
    selectors: [["app-info-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"]],
    template: function InfoIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 6158:
/*!*********************************************************************************!*\
  !*** ./src/app/components/icons/light-theme-icon/light-theme-icon.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LightThemeIconComponent": () => (/* binding */ LightThemeIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class LightThemeIconComponent {
  static #_ = this.ɵfac = function LightThemeIconComponent_Factory(t) {
    return new (t || LightThemeIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: LightThemeIconComponent,
    selectors: [["app-light-theme-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"]],
    template: function LightThemeIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2538:
/*!*****************************************************************************************!*\
  !*** ./src/app/components/icons/magnifier-minus-icon/magnifier-minus-icon.component.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnifierMinusIconComponent": () => (/* binding */ MagnifierMinusIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class MagnifierMinusIconComponent {
  static #_ = this.ɵfac = function MagnifierMinusIconComponent_Factory(t) {
    return new (t || MagnifierMinusIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MagnifierMinusIconComponent,
    selectors: [["app-magnifier-minus-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM13.5 10.5h-6"]],
    template: function MagnifierMinusIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1595:
/*!***************************************************************************************!*\
  !*** ./src/app/components/icons/magnifier-plus-icon/magnifier-plus-icon.component.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MagnifierPlusIconComponent": () => (/* binding */ MagnifierPlusIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class MagnifierPlusIconComponent {
  static #_ = this.ɵfac = function MagnifierPlusIconComponent_Factory(t) {
    return new (t || MagnifierPlusIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: MagnifierPlusIconComponent,
    selectors: [["app-magnifier-plus-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"]],
    template: function MagnifierPlusIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9659:
/*!***************************************************************!*\
  !*** ./src/app/components/icons/qr-icon/qr-icon.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrIconComponent": () => (/* binding */ QrIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class QrIconComponent {
  static #_ = this.ɵfac = function QrIconComponent_Factory(t) {
    return new (t || QrIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: QrIconComponent,
    selectors: [["app-qr-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 24 24", "fill", "currentColor", 3, "ngClass"], ["fill-rule", "evenodd", "clip-rule", "evenodd", "d", "M3 4.875C3 3.839 3.84 3 4.875 3h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 9.375v-4.5zM4.875 4.5a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875.375c0-1.036.84-1.875 1.875-1.875h4.5C20.16 3 21 3.84 21 4.875v4.5c0 1.036-.84 1.875-1.875 1.875h-4.5a1.875 1.875 0 01-1.875-1.875v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zM6 6.75A.75.75 0 016.75 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75A.75.75 0 016 7.5v-.75zm9.75 0A.75.75 0 0116.5 6h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM3 14.625c0-1.036.84-1.875 1.875-1.875h4.5c1.036 0 1.875.84 1.875 1.875v4.5c0 1.035-.84 1.875-1.875 1.875h-4.5A1.875 1.875 0 013 19.125v-4.5zm1.875-.375a.375.375 0 00-.375.375v4.5c0 .207.168.375.375.375h4.5a.375.375 0 00.375-.375v-4.5a.375.375 0 00-.375-.375h-4.5zm7.875-.75a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zM6 16.5a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm9.75 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm-3 3a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75zm6 0a.75.75 0 01.75-.75h.75a.75.75 0 01.75.75v.75a.75.75 0 01-.75.75h-.75a.75.75 0 01-.75-.75v-.75z"]],
    template: function QrIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7269:
/*!***************************************************************************!*\
  !*** ./src/app/components/icons/settings-icon/settings-icon.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsIconComponent": () => (/* binding */ SettingsIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class SettingsIconComponent {
  static #_ = this.ɵfac = function SettingsIconComponent_Factory(t) {
    return new (t || SettingsIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SettingsIconComponent,
    selectors: [["app-settings-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 3,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"]],
    template: function SettingsIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1)(2, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4817:
/*!***********************************************************************************!*\
  !*** ./src/app/components/icons/single-click-icon/single-click-icon.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SingleClickIconComponent": () => (/* binding */ SingleClickIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class SingleClickIconComponent {
  static #_ = this.ɵfac = function SingleClickIconComponent_Factory(t) {
    return new (t || SingleClickIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SingleClickIconComponent,
    selectors: [["app-single-click-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"]],
    template: function SingleClickIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1683:
/*!*******************************************************************!*\
  !*** ./src/app/components/icons/slow-icon/slow-icon.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SlowIconComponent": () => (/* binding */ SlowIconComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0, a1) {
  return [a0, a1];
};
class SlowIconComponent {
  static #_ = this.ɵfac = function SlowIconComponent_Factory(t) {
    return new (t || SlowIconComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: SlowIconComponent,
    selectors: [["app-slow-icon"]],
    inputs: {
      width: "width",
      height: "height"
    },
    decls: 2,
    vars: 4,
    consts: [["xmlns", "http://www.w3.org/2000/svg", "fill", "none", "viewBox", "0 0 24 24", "stroke-width", "1.5", "stroke", "currentColor", 3, "ngClass"], ["stroke-linecap", "round", "stroke-linejoin", "round", "d", "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"]],
    template: function SlowIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c0, ctx.width, ctx.height));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 852:
/*!***************************************************!*\
  !*** ./src/app/components/info/info.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InfoComponent": () => (/* binding */ InfoComponent)
/* harmony export */ });
/* harmony import */ var _configurations_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations/config */ 7669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _icons_arrow_left_icon_arrow_left_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/arrow-left-icon/arrow-left-icon.component */ 7987);
/* harmony import */ var _icons_arrow_right_icon_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/arrow-right-icon/arrow-right-icon.component */ 8965);
/* harmony import */ var _icons_arrow_down_icon_arrow_down_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../icons/arrow-down-icon/arrow-down-icon.component */ 962);
/* harmony import */ var _icons_arrow_up_icon_arrow_up_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/arrow-up-icon/arrow-up-icon.component */ 1616);
/* harmony import */ var _icons_single_click_icon_single_click_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/single-click-icon/single-click-icon.component */ 4817);








const _c0 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class InfoComponent {
  constructor() {
    this.maxWidth = 'max-w-none';
    this.insetX = 'inset-x-0';
    this.bottom = 'bottom-0';
    this.textSingleSwipeRight = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.singleSwipeRightCommand.description;
    this.textDoubleSwipeRight = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.doubleSwipeRightCommand.description;
    this.textSingleSwipeLeft = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.singleSwipeLeftCommand.description;
    this.textDoubleSwipeLeft = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.doubleSwipeLeftCommand.description;
    this.textSingleSwipeDown = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.singleSwipeDownCommand.description;
    this.textDoubleSwipeDown = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.doubleSwipeDownCommand.description;
    this.textSingleSwipeUp = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.singleSwipeUpCommand.description;
    this.textDoubleSwipeUp = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior.doubleSwipeUpCommand.description;
  }
  static #_ = this.ɵfac = function InfoComponent_Factory(t) {
    return new (t || InfoComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: InfoComponent,
    selectors: [["app-info"]],
    inputs: {
      maxWidth: "maxWidth",
      insetX: "insetX",
      bottom: "bottom"
    },
    decls: 101,
    vars: 23,
    consts: [["id", "info", 1, "fixed", "mx-auto", "bg-white", "dark:bg-dark", "border", "border-2", "border-black", "dark:border-dark", "shadow-xl", "p-2", 3, "ngClass"], [3, "width", "height"], [1, "font-bold"]],
    template: function InfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "ul")(2, "li")(3, "table")(4, "tbody")(5, "tr")(6, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "app-single-click-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td")(9, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Klicken");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "tr")(12, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " 1x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Zu beliebigem Text wechseln ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "tr")(17, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18, " 2x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](20, " Vorlesen pausieren bzw. fortsetzen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li")(23, "table")(24, "tbody")(25, "tr")(26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "app-arrow-left-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "td")(29, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Nach links wischen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "tr")(32, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " 1x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "tr")(37, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, " 2x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "li")(43, "table")(44, "tbody")(45, "tr")(46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "app-arrow-right-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "td")(49, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Nach rechts wischen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "tr")(52, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " 1x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "tr")(57, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](58, " 2x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](61, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "li")(63, "table")(64, "tbody")(65, "tr")(66, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "app-arrow-up-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "td")(69, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "Nach oben wischen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "tr")(72, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, " 1x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "tr")(77, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, " 2x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "li")(83, "table")(84, "tbody")(85, "tr")(86, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](87, "app-arrow-down-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "td")(89, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Nach unten wischen");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "tr")(92, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](93, " 1x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "tr")(97, "td", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, " 2x ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](19, _c0, ctx.maxWidth, ctx.insetX, ctx.bottom));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textSingleSwipeLeft, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textDoubleSwipeLeft, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textSingleSwipeRight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textDoubleSwipeRight, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textSingleSwipeUp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textDoubleSwipeUp, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textSingleSwipeDown, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.textDoubleSwipeDown, " ");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _icons_arrow_left_icon_arrow_left_icon_component__WEBPACK_IMPORTED_MODULE_1__.ArrowLeftIconComponent, _icons_arrow_right_icon_arrow_right_icon_component__WEBPACK_IMPORTED_MODULE_2__.ArrowRightIconComponent, _icons_arrow_down_icon_arrow_down_icon_component__WEBPACK_IMPORTED_MODULE_3__.ArrowDownIconComponent, _icons_arrow_up_icon_arrow_up_icon_component__WEBPACK_IMPORTED_MODULE_4__.ArrowUpIconComponent, _icons_single_click_icon_single_click_icon_component__WEBPACK_IMPORTED_MODULE_5__.SingleClickIconComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9520:
/*!*******************************************************!*\
  !*** ./src/app/components/layout/layout.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutComponent": () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../menu/menu.component */ 5819);


const _c0 = ["*"];
class LayoutComponent {
  static #_ = this.ɵfac = function LayoutComponent_Factory(t) {
    return new (t || LayoutComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: LayoutComponent,
    selectors: [["app-layout"]],
    ngContentSelectors: _c0,
    decls: 4,
    vars: 3,
    consts: [[1, "max-w-screen-sm", "mx-auto", "break-words", "p-5", "mb-20"], [3, "maxWidth", "insetX", "bottom"]],
    template: function LayoutComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "main")(1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("maxWidth", "max-w-screen-sm")("insetX", "inset-x-0")("bottom", "bottom-0");
      }
    },
    dependencies: [_menu_menu_component__WEBPACK_IMPORTED_MODULE_0__.MenuComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 5819:
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuComponent": () => (/* binding */ MenuComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/audio.service */ 6425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _icons_info_icon_info_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../icons/info-icon/info-icon.component */ 4269);
/* harmony import */ var _icons_qr_icon_qr_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../icons/qr-icon/qr-icon.component */ 9659);
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../info/info.component */ 852);
/* harmony import */ var _icons_audio_on_icon_audio_on_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../icons/audio-on-icon/audio-on-icon.component */ 4518);
/* harmony import */ var _icons_audio_off_icon_audio_off_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../icons/audio-off-icon/audio-off-icon.component */ 2476);
/* harmony import */ var _icons_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../icons/cross-icon/cross-icon.component */ 487);
/* harmony import */ var _icons_settings_icon_settings_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../icons/settings-icon/settings-icon.component */ 7269);












const _c0 = ["info"];
const _c1 = ["menu"];
function MenuComponent_app_audio_on_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-audio-on-icon", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-14")("height", "h-14");
  }
}
function MenuComponent_app_audio_off_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "app-audio-off-icon", 5);
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-14")("height", "h-14");
  }
}
const _c2 = function (a0, a1, a2) {
  return [a0, a1, a2];
};
class MenuComponent {
  constructor(audioService) {
    this.audioService = audioService;
    this.maxWidth = 'max-w-none';
    this.insetX = 'inset-x-0';
    this.bottom = 'bottom-0';
    this.hidden = true;
    this.audio = audioService.audio;
  }
  onClick(e) {
    if (!this.hidden) {
      if (!this.info.nativeElement.contains(e.target) && !this.menu.nativeElement.contains(e.target)) {
        this.hidden = true;
      }
    }
  }
  toggleHidden() {
    this.hidden = !this.hidden;
  }
  toggleAudio() {
    this.audio.next(!this.audio.value);
  }
  audioEnabled() {
    return this.audio.asObservable();
  }
  audioDisabled() {
    return this.audio.asObservable().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.map)(audio => !audio));
  }
  static #_ = this.ɵfac = function MenuComponent_Factory(t) {
    return new (t || MenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_audio_service__WEBPACK_IMPORTED_MODULE_0__.AudioService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MenuComponent,
    selectors: [["app-menu"]],
    viewQuery: function MenuComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c1, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.info = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.menu = _t.first);
      }
    },
    hostBindings: function MenuComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MenuComponent_click_HostBindingHandler($event) {
          return ctx.onClick($event);
        }, false, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵresolveDocument"]);
      }
    },
    inputs: {
      maxWidth: "maxWidth",
      insetX: "insetX",
      bottom: "bottom"
    },
    decls: 17,
    vars: 27,
    consts: [["info", ""], [3, "hidden", "maxWidth", "insetX", "bottom"], [1, "fixed", "mx-auto", "flex", "justify-around", "bg-black", "text-white", "py-4", 3, "ngClass"], ["menu", ""], ["aria-hidden", "true", 3, "routerLink"], [3, "width", "height"], ["aria-label", "QR-Code Scanner", 3, "routerLink"], ["aria-hidden", "true", 3, "click"], [3, "width", "height", 4, "ngIf"], [3, "hidden", "width", "height"]],
    template: function MenuComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "app-info", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "footer", 2, 3)(5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "app-settings-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "app-qr-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_9_listener() {
          return ctx.toggleAudio();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](10, MenuComponent_app_audio_on_icon_10_Template, 1, 2, "app-audio-on-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, MenuComponent_app_audio_off_icon_12_Template, 1, 2, "app-audio-off-icon", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MenuComponent_Template_button_click_14_listener() {
          return ctx.toggleHidden();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "app-info-icon", 9)(16, "app-cross-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.hidden)("maxWidth", ctx.maxWidth)("insetX", "inset-x-2")("bottom", "bottom-24");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](23, _c2, ctx.maxWidth, ctx.insetX, ctx.bottom));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-14")("height", "h-14");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", "/scanner");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-14")("height", "h-14");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 19, ctx.audioEnabled()));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](13, 21, ctx.audioDisabled()));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", !ctx.hidden)("width", "w-14")("height", "h-14");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.hidden)("width", "w-14")("height", "h-14");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _icons_info_icon_info_icon_component__WEBPACK_IMPORTED_MODULE_1__.InfoIconComponent, _icons_qr_icon_qr_icon_component__WEBPACK_IMPORTED_MODULE_2__.QrIconComponent, _info_info_component__WEBPACK_IMPORTED_MODULE_3__.InfoComponent, _icons_audio_on_icon_audio_on_icon_component__WEBPACK_IMPORTED_MODULE_4__.AudioOnIconComponent, _icons_audio_off_icon_audio_off_icon_component__WEBPACK_IMPORTED_MODULE_5__.AudioOffIconComponent, _icons_cross_icon_cross_icon_component__WEBPACK_IMPORTED_MODULE_6__.CrossIconComponent, _icons_settings_icon_settings_icon_component__WEBPACK_IMPORTED_MODULE_7__.SettingsIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 7669:
/*!******************************************!*\
  !*** ./src/app/configurations/config.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config)
/* harmony export */ });
/* harmony import */ var _behaviors_SwipeBehavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../behaviors/SwipeBehavior */ 3597);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE

const isProd = true;
const prodContext = '';
const devContext = '';
const variant = 'V1';
const config = {
  isProd,
  variant,
  swipeBehavior: _behaviors_SwipeBehavior__WEBPACK_IMPORTED_MODULE_0__["default"],
  context: isProd ? prodContext : devContext
};

/***/ }),

/***/ 9509:
/*!**********************************************!*\
  !*** ./src/app/handlers/my-error-handler.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyErrorHandler": () => (/* binding */ MyErrorHandler)
/* harmony export */ });
/* harmony import */ var _configurations_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../configurations/config */ 7669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



class MyErrorHandler {
  constructor(router) {
    this.router = router;
  }
  handleError(error) {
    this.router.navigateByUrl('/error').finally(() => {
      if (!_configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.isProd) {
        console.error(error);
      }
    });
  }
  static #_ = this.ɵfac = function MyErrorHandler_Factory(t) {
    return new (t || MyErrorHandler)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: MyErrorHandler,
    factory: MyErrorHandler.ɵfac
  });
}

/***/ }),

/***/ 2535:
/*!***********************************************!*\
  !*** ./src/app/resolvers/preload.resolver.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "preloadResolver": () => (/* binding */ preloadResolver)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/content.service */ 3823);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE


const preloadResolver = (route, state) => {
  return (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_services_content_service__WEBPACK_IMPORTED_MODULE_0__.ContentService).request(route.queryParams['url']);
};

/***/ }),

/***/ 6425:
/*!*******************************************!*\
  !*** ./src/app/services/audio.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AudioService": () => (/* binding */ AudioService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _speech_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./speech.service */ 1359);



class AudioService {
  constructor(speechService) {
    this.speechService = speechService;
    this.audio = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.audio.next(this.getStoredAudio());
    this.audio.subscribe(audio => {
      if (!audio) speechService.cancel();
      this.setStoredAudio(audio ? 'on' : 'off');
    });
  }
  getStoredAudio() {
    return localStorage.getItem('audio') === 'on';
  }
  setStoredAudio(audio) {
    localStorage.setItem('audio', audio);
  }
  initAudio(audio) {
    this.getStoredAudio() === null && this.audio.next(audio);
  }
  static #_ = this.ɵfac = function AudioService_Factory(t) {
    return new (t || AudioService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_speech_service__WEBPACK_IMPORTED_MODULE_0__.SpeechService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: AudioService,
    factory: AudioService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 3823:
/*!*********************************************!*\
  !*** ./src/app/services/content.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentService": () => (/* binding */ ContentService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! markdown-it */ 8462);
/* harmony import */ var markdown_it__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(markdown_it__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);




class ContentService {
  constructor(http) {
    this.http = http;
    this.md = new (markdown_it__WEBPACK_IMPORTED_MODULE_0___default())();
  }
  request(url) {
    return this.http.get(url, {
      responseType: 'text'
      // necessary if using ngrok for content
      // headers: { 'ngrok-skip-browser-warning': 'true' }
    }).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_1__.map)(content => this.parse(content)));
  }
  parse(text) {
    const tokens = this.md.parse(text, {});
    const result = [];
    tokens.forEach(token => {
      switch (token.type) {
        case 'heading_open':
        case 'paragraph_open':
          result.push({
            tag: token.tag,
            text: ''
          });
          break;
        case 'inline':
          result[result.length - 1].text = token.content;
          break;
        case 'heading_close':
        case 'paragraph_close':
          break;
        default:
          throw new Error();
      }
    });
    return result;
  }
  static #_ = this.ɵfac = function ContentService_Factory(t) {
    return new (t || ContentService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
    token: ContentService,
    factory: ContentService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 222:
/*!******************************************!*\
  !*** ./src/app/services/rate.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Rate": () => (/* binding */ Rate),
/* harmony export */   "RateService": () => (/* binding */ RateService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

var Rate;
(function (Rate) {
  Rate[Rate["SLOW"] = 0.75] = "SLOW";
  Rate[Rate["FAST"] = 1] = "FAST";
})(Rate || (Rate = {}));
class RateService {
  constructor() {
    this.rate = this.getStoredRate() || 1.0;
  }
  setRate(rate) {
    this.setStoredRate(rate);
    this.rate = rate;
  }
  getRate() {
    return this.rate;
  }
  setStoredRate(rate) {
    localStorage.setItem('rate', `${rate}`);
  }
  getStoredRate() {
    const storedRate = localStorage.getItem('rate');
    return storedRate === null ? undefined : isNaN(parseFloat(storedRate)) ? undefined : parseFloat(storedRate);
  }
  static #_ = this.ɵfac = function RateService_Factory(t) {
    return new (t || RateService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: RateService,
    factory: RateService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5279:
/*!*********************************************!*\
  !*** ./src/app/services/scanner.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScannerService": () => (/* binding */ ScannerService)
/* harmony export */ });
/* harmony import */ var qr_scanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! qr-scanner */ 327);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class ScannerService {
  constructor() {}
  scan({
    element,
    onResult,
    onStartup
  }) {
    const scanner = new qr_scanner__WEBPACK_IMPORTED_MODULE_0__["default"](element, result => onResult(result.data), {
      calculateScanRegion: video => {
        return {
          width: video.videoWidth,
          height: video.videoHeight
        };
      }
    });
    scanner.start().then(onStartup);
    return scanner.destroy;
  }
  static #_ = this.ɵfac = function ScannerService_Factory(t) {
    return new (t || ScannerService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ScannerService,
    factory: ScannerService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 1359:
/*!********************************************!*\
  !*** ./src/app/services/speech.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeechService": () => (/* binding */ SpeechService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class SpeechService {
  constructor() {
    if ('speechSynthesis' in window) {
      this.synthesis = window.speechSynthesis;
      this.utterance = new SpeechSynthesisUtterance();
    }
  }
  isAvailable() {
    return this.synthesis !== undefined;
  }
  speak(utterance) {
    if (this.isAvailable()) {
      this.synthesis.cancel();
      this.utterance.text = utterance.text;
      this.utterance.lang = utterance.lang;
      this.utterance.rate = utterance.rate;
      this.synthesis.speak(this.utterance);
    }
  }
  cancel() {
    this.synthesis?.cancel();
  }
  togglePlay() {
    if (this.synthesis?.paused) {
      this.synthesis?.resume();
    } else if (this.synthesis?.speaking) {
      this.synthesis?.pause();
    }
  }
  static #_ = this.ɵfac = function SpeechService_Factory(t) {
    return new (t || SpeechService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
    token: SpeechService,
    factory: SpeechService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 8140:
/*!*******************************************!*\
  !*** ./src/app/services/theme.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Theme": () => (/* binding */ Theme),
/* harmony export */   "ThemeService": () => (/* binding */ ThemeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


var Theme;
(function (Theme) {
  Theme["LIGHT"] = "light";
  Theme["DARK"] = "dark";
})(Theme || (Theme = {}));
class ThemeService {
  constructor() {
    this.theme = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.getStoredTheme() || Theme.LIGHT);
    this.theme.subscribe(theme => this.onThemeChange(theme));
    this.theme.next(this.theme.value);
  }
  setTheme(theme) {
    this.theme.next(theme);
  }
  getTheme() {
    return this.theme.asObservable();
  }
  onThemeChange(theme) {
    this.setStoredTheme(theme);
    this.setThemeClass(theme);
  }
  setThemeClass(theme) {
    const classes = document.querySelector('html').classList;
    classes.remove(...Object.values(Theme));
    classes.add(theme);
  }
  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }
  getStoredTheme() {
    const storedTheme = localStorage.getItem('theme');
    return Object.values(Theme).includes(storedTheme) ? storedTheme : undefined;
  }
  static #_ = this.ɵfac = function ThemeService_Factory(t) {
    return new (t || ThemeService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ThemeService,
    factory: ThemeService.ɵfac,
    providedIn: 'root'
  });
}

/***/ }),

/***/ 5380:
/*!************************************************!*\
  !*** ./src/app/views/error/error.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorComponent": () => (/* binding */ ErrorComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);


class ErrorComponent {
  static #_ = this.ɵfac = function ErrorComponent_Factory(t) {
    return new (t || ErrorComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ErrorComponent,
    selectors: [["app-error"]],
    decls: 4,
    vars: 0,
    consts: [[1, "border", "border-2", "border-red-500", "bg-red-50", "p-2"], [1, "text-lg", "text-red-500", "text-center"]],
    template: function ErrorComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-layout")(1, "div", 0)(2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Ein unerwarteter Fehler ist aufgetreten. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      }
    },
    dependencies: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 9470:
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);
/* harmony import */ var _components_icons_qr_icon_qr_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/icons/qr-icon/qr-icon.component */ 9659);



class HomeComponent {
  static #_ = this.ɵfac = function HomeComponent_Factory(t) {
    return new (t || HomeComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: HomeComponent,
    selectors: [["app-home"]],
    decls: 9,
    vars: 2,
    consts: [[1, "text-4xl", "font-bold", "text-center", "mb-4"], [1, "mb-2"], [1, "text-lg", "text-center"], ["aria-hidden", "true", 1, "inline-block", "align-top"], [3, "height", "width"]],
    template: function HomeComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-layout")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, " Ear Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Scanne einen QR-Code im Museum, um einen Rundgang zu starten. Nutze dazu den QR-Code-Button ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-qr-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " im Men\u00FC. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", "h-6")("width", "w-6");
      }
    },
    dependencies: [_components_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _components_icons_qr_icon_qr_icon_component__WEBPACK_IMPORTED_MODULE_1__.QrIconComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 1009:
/*!**********************************************************!*\
  !*** ./src/app/views/qr-scanner/qr-scanner.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QrScannerComponent": () => (/* binding */ QrScannerComponent)
/* harmony export */ });
/* harmony import */ var _configurations_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations/config */ 7669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_scanner_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/scanner.service */ 5279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);





const _c0 = ["video"];
function QrScannerComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "div", 4);
  }
}
class QrScannerComponent {
  constructor(scannerService) {
    this.scannerService = scannerService;
    this.ready = false;
  }
  ngAfterViewInit() {
    this.destroyScanner = this.scannerService.scan({
      element: this.video.nativeElement,
      onResult: result => {
        if (this.ready && result !== '') {
          const url = new URL(result);
          location.href = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.context + '/reader' + url.search + url.hash;
        }
      },
      onStartup: () => {
        // prevent camera glitches
        setTimeout(() => {
          this.ready = true;
        }, 750);
      }
    });
  }
  ngOnDestroy() {
    if (this.destroyScanner) {
      this.destroyScanner();
    }
  }
  static #_ = this.ɵfac = function QrScannerComponent_Factory(t) {
    return new (t || QrScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_scanner_service__WEBPACK_IMPORTED_MODULE_1__.ScannerService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: QrScannerComponent,
    selectors: [["app-qr-scanner"]],
    viewQuery: function QrScannerComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.video = _t.first);
      }
    },
    decls: 5,
    vars: 1,
    consts: [[1, "max-w-screen-sm", "mx-auto", "h-screen", "fixed", "bottom-0", "left-0", "right-0"], [1, "w-full", "h-full", "object-cover"], ["video", ""], ["class", "w-full h-full absolute top-0 bg-black", 4, "ngIf"], [1, "w-full", "h-full", "absolute", "top-0", "bg-black"]],
    template: function QrScannerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-layout")(1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, QrScannerComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.ready);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 2825:
/*!**************************************************!*\
  !*** ./src/app/views/reader/reader.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReaderComponent": () => (/* binding */ ReaderComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var _configurations_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../configurations/config */ 7669);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/content.service */ 3823);
/* harmony import */ var _services_speech_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/speech.service */ 1359);
/* harmony import */ var _services_audio_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/audio.service */ 6425);
/* harmony import */ var _services_rate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/rate.service */ 222);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);










function ReaderComponent_ng_container_2_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", element_r1.text, "");
  }
}
function ReaderComponent_ng_container_2_h1_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r4.textSizes["h1"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r1.text);
  }
}
function ReaderComponent_ng_container_2_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r5.textSizes["h2"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r1.text);
  }
}
function ReaderComponent_ng_container_2_h3_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h3", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r6.textSizes["h3"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r1.text);
  }
}
function ReaderComponent_ng_container_2_h4_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h4", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r7.textSizes["h4"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r1.text);
  }
}
function ReaderComponent_ng_container_2_h5_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h5", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r8.textSizes["h5"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r1.text);
  }
}
function ReaderComponent_ng_container_2_h6_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h6", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const element_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", ctx_r9.textSizes["h6"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r1.text);
  }
}
const _c0 = function (a0) {
  return {
    "outline-dashed": a0
  };
};
function ReaderComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("tap", function ReaderComponent_ng_container_2_Template_div_tap_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r18);
      const i_r2 = restoredCtx.index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵresetView"](ctx_r17.onTap($event, i_r2));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ReaderComponent_ng_container_2_p_2_Template, 2, 1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ReaderComponent_ng_container_2_h1_3_Template, 2, 2, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ReaderComponent_ng_container_2_h2_4_Template, 2, 2, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, ReaderComponent_ng_container_2_h3_5_Template, 2, 2, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, ReaderComponent_ng_container_2_h4_6_Template, 2, 2, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, ReaderComponent_ng_container_2_h5_7_Template, 2, 2, "h5", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, ReaderComponent_ng_container_2_h6_8_Template, 2, 2, "h6", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
  if (rf & 2) {
    const element_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitch", element_r1.tag)("id", i_r2)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](10, _c0, ctx_r0.isAvailable() && i_r2 === ctx_r0.index.value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngSwitchCase", "h6");
  }
}
const TEXT_SIZES = ['text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl'];
class ReaderComponent {
  constructor(contentService, speechService, audioService, rateService, route) {
    this.contentService = contentService;
    this.speechService = speechService;
    this.audioService = audioService;
    this.rateService = rateService;
    this.route = route;
    this.lang = 'de-DE';
    this.behavior = _configurations_config__WEBPACK_IMPORTED_MODULE_0__.config.swipeBehavior;
    this.swipeTimeoutIDs = {
      RIGHT: undefined,
      LEFT: undefined,
      DOWN: undefined,
      UP: undefined
    };
    this.tapTimeoutIDs = [];
    this.subs = [];
    this.guide = [];
    this.index = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(undefined);
    this.textSizes = {};
    this.audio = audioService.audio;
    this.subs.push(this.audio.subscribe(_ => {
      this.index.next(undefined);
    }));
  }
  ngOnInit() {
    const params = this.route.snapshot.queryParams;
    this.audioService.initAudio(params['audio'] === 'on');
    this.lang = params['lang'] ? params['lang'] : this.lang;
    this.subs.push(this.route.data.subscribe(data => {
      this.guide = data['guide'];
      this.initTextSizes();
    }));
    this.subs.push(this.index.subscribe(_ => {
      if (this.isAvailable()) {
        this.scroll();
        if (this.audio.value) {
          this.speak();
        }
      }
    }));
  }
  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
  isAvailable() {
    return this.index.value !== undefined;
  }
  initTextSizes() {
    let i = this.guide // compute max heading level
    .map(e => e.tag.charAt(0) === 'h' ? +e.tag.charAt(1) : 0).reduce((acc, curr) => Math.max(acc, curr));
    for (const textSize of TEXT_SIZES) {
      this.textSizes['h' + i--] = textSize;
      if (i === 0) break;
    }
  }
  speak() {
    const index = this.index.value;
    const element = this.guide[index];
    this.speechService.speak({
      text: element.text,
      lang: this.lang,
      rate: this.rateService.getRate()
    });
  }
  scroll() {
    const id = `${this.index.value}`;
    document.getElementById(id).scrollIntoView();
  }
  onTap(e, index) {
    if (e.tapCount === 1) {
      this.tapTimeoutIDs.push(setTimeout(() => {
        this.index.next(index);
      }, 300));
    }
  }
  onDoubleTap(e) {
    if (e.tapCount === 2) {
      this.tapTimeoutIDs.forEach(id => clearTimeout(id));
      this.speechService.togglePlay();
    }
  }
  onSwipeRight() {
    this.onSwipe('RIGHT', this.behavior.singleSwipeRightCommand, this.behavior.doubleSwipeRightCommand);
  }
  onSwipeLeft() {
    this.onSwipe('LEFT', this.behavior.singleSwipeLeftCommand, this.behavior.doubleSwipeLeftCommand);
  }
  onSwipeDown() {
    this.onSwipe('DOWN', this.behavior.singleSwipeDownCommand, this.behavior.doubleSwipeDownCommand);
  }
  onSwipeUp() {
    this.onSwipe('UP', this.behavior.singleSwipeUpCommand, this.behavior.doubleSwipeUpCommand);
  }
  onSwipe(direction, singleSwipeCommand, doubleSwipeCommand) {
    if (!this.isAvailable()) return; // prevents bug with audio
    if (this.swipeTimeoutIDs[direction] === undefined) {
      this.swipeTimeoutIDs[direction] = setTimeout(() => {
        this.swipeTimeoutIDs[direction] = undefined;
        this.index.next(singleSwipeCommand.findIndex(this.guide, this.index.value));
      }, 300);
    } else {
      clearTimeout(this.swipeTimeoutIDs[direction]);
      this.swipeTimeoutIDs[direction] = undefined;
      this.index.next(doubleSwipeCommand.findIndex(this.guide, this.index.value));
    }
  }
  static #_ = this.ɵfac = function ReaderComponent_Factory(t) {
    return new (t || ReaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_content_service__WEBPACK_IMPORTED_MODULE_1__.ContentService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_speech_service__WEBPACK_IMPORTED_MODULE_2__.SpeechService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_audio_service__WEBPACK_IMPORTED_MODULE_3__.AudioService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_rate_service__WEBPACK_IMPORTED_MODULE_4__.RateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
    type: ReaderComponent,
    selectors: [["app-reader"]],
    decls: 3,
    vars: 1,
    consts: [[3, "click", "swipe"], [3, "swipeup", "swipedown", "swipeleft", "swiperight", "tap"], [4, "ngFor", "ngForOf"], [1, "cursor-pointer", "outline-2", "outline-offset-2", "scroll-mt-2", "mb-3", 3, "ngSwitch", "id", "ngClass", "tap"], ["class", "text-base", 4, "ngSwitchCase"], ["class", "font-bold", 3, "ngClass", 4, "ngSwitchCase"], [1, "text-base"], [1, "font-bold", 3, "ngClass"]],
    template: function ReaderComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "app-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ReaderComponent_Template_app_layout_click_0_listener() {
          return null;
        })("swipe", function ReaderComponent_Template_app_layout_swipe_0_listener() {
          return null;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("swipeup", function ReaderComponent_Template_div_swipeup_1_listener() {
          return ctx.onSwipeUp();
        })("swipedown", function ReaderComponent_Template_div_swipedown_1_listener() {
          return ctx.onSwipeDown();
        })("swipeleft", function ReaderComponent_Template_div_swipeleft_1_listener() {
          return ctx.onSwipeLeft();
        })("swiperight", function ReaderComponent_Template_div_swiperight_1_listener() {
          return ctx.onSwipeRight();
        })("tap", function ReaderComponent_Template_div_tap_1_listener($event) {
          return ctx.onDoubleTap($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ReaderComponent_ng_container_2_Template, 9, 12, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.guide);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgSwitchCase, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__.LayoutComponent],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4988:
/*!******************************************************!*\
  !*** ./src/app/views/settings/settings.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsComponent": () => (/* binding */ SettingsComponent)
/* harmony export */ });
/* harmony import */ var _services_theme_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/theme.service */ 8140);
/* harmony import */ var _services_rate_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/rate.service */ 222);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 635);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/layout/layout.component */ 9520);
/* harmony import */ var _components_icons_light_theme_icon_light_theme_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/icons/light-theme-icon/light-theme-icon.component */ 6158);
/* harmony import */ var _components_icons_dark_theme_icon_dark_theme_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/icons/dark-theme-icon/dark-theme-icon.component */ 8707);
/* harmony import */ var _components_icons_fast_icon_fast_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/icons/fast-icon/fast-icon.component */ 5263);
/* harmony import */ var _components_icons_slow_icon_slow_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/icons/slow-icon/slow-icon.component */ 1683);












const _c0 = function (a0) {
  return {
    "outline": a0
  };
};
class SettingsComponent {
  constructor(themeService, rateService) {
    this.themeService = themeService;
    this.rateService = rateService;
    this.Theme = _services_theme_service__WEBPACK_IMPORTED_MODULE_0__.Theme;
    this.Rate = _services_rate_service__WEBPACK_IMPORTED_MODULE_1__.Rate;
    this.theme = this.themeService.getTheme();
  }
  setTheme(theme) {
    this.themeService.setTheme(theme);
  }
  isTheme(theme) {
    return this.themeService.getTheme().pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.map)(t => t === theme));
  }
  setRate(rate) {
    this.rateService.setRate(rate);
  }
  isRate(rate) {
    return this.rateService.getRate() === rate;
  }
  static #_ = this.ɵfac = function SettingsComponent_Factory(t) {
    return new (t || SettingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_theme_service__WEBPACK_IMPORTED_MODULE_0__.ThemeService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_rate_service__WEBPACK_IMPORTED_MODULE_1__.RateService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: SettingsComponent,
    selectors: [["app-settings"]],
    decls: 26,
    vars: 24,
    consts: [[1, "text-4xl", "font-bold", "text-center", "mb-4"], [1, "mb-2"], [1, "rounded", "outline-1", "p-2", "my-1", "me-2", 3, "ngClass", "tap"], [3, "width", "height"], [1, "text-lg"]],
    template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "app-layout")(1, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2, " Einstellungen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "hr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "table")(5, "tbody")(6, "tr")(7, "td")(8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tap", function SettingsComponent_Template_button_tap_8_listener() {
          return ctx.setRate(ctx.Rate.FAST);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "app-fast-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "td")(11, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tap", function SettingsComponent_Template_button_tap_11_listener() {
          return ctx.setRate(ctx.Rate.SLOW);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "app-slow-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Sprachgeschwindigkeit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "tr")(16, "td")(17, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tap", function SettingsComponent_Template_button_tap_17_listener() {
          return ctx.setTheme(ctx.Theme.LIGHT);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](18, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](19, "app-light-theme-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "td")(21, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("tap", function SettingsComponent_Template_button_tap_21_listener() {
          return ctx.setTheme(ctx.Theme.DARK);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](22, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](23, "app-dark-theme-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](24, "td", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](25, " Farbschema ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c0, ctx.isRate(ctx.Rate.FAST)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c0, ctx.isRate(ctx.Rate.SLOW)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](18, 12, ctx.isTheme(ctx.Theme.LIGHT))));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-6")("height", "h-6");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](22, 14, ctx.isTheme(ctx.Theme.DARK))));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("width", "w-6")("height", "h-6");
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _components_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__.LayoutComponent, _components_icons_light_theme_icon_light_theme_icon_component__WEBPACK_IMPORTED_MODULE_3__.LightThemeIconComponent, _components_icons_dark_theme_icon_dark_theme_icon_component__WEBPACK_IMPORTED_MODULE_4__.DarkThemeIconComponent, _components_icons_fast_icon_fast_icon_component__WEBPACK_IMPORTED_MODULE_5__.FastIconComponent, _components_icons_slow_icon_slow_icon_component__WEBPACK_IMPORTED_MODULE_6__.SlowIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
    styles: ["\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
// Copyright (c) 2024 FHNW University of Applied Sciences and Arts Northwestern Switzerland
// See LICENSE


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map