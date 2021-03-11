(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-reports-reports-module"], {
    /***/
    "07FK":
    /*!******************************************************!*\
      !*** ./src/app/views/reports/reports.component.scss ***!
      \******************************************************/

    /*! exports provided: default */

    /***/
    function FK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnRzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "AUe9":
    /*!********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/reports/reports.component.html ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function AUe9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>reports works!</p>\n";
      /***/
    },

    /***/
    "Jfv1":
    /*!*********************************************************!*\
      !*** ./src/app/views/reports/reports-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: ReportsRoutingModule */

    /***/
    function Jfv1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsRoutingModule", function () {
        return ReportsRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _reports_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reports.component */
      "LA2Q");

      var routes = [{
        path: '',
        component: _reports_component__WEBPACK_IMPORTED_MODULE_3__["ReportsComponent"],
        data: {
          title: 'Reports'
        }
      }];

      var ReportsRoutingModule = function ReportsRoutingModule() {
        _classCallCheck(this, ReportsRoutingModule);
      };

      ReportsRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportsRoutingModule);
      /***/
    },

    /***/
    "LA2Q":
    /*!****************************************************!*\
      !*** ./src/app/views/reports/reports.component.ts ***!
      \****************************************************/

    /*! exports provided: ReportsComponent */

    /***/
    function LA2Q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
        return ReportsComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./reports.component.html */
      "AUe9");
      /* harmony import */


      var _reports_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reports.component.scss */
      "07FK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ReportsComponent = /*#__PURE__*/function () {
        function ReportsComponent() {
          _classCallCheck(this, ReportsComponent);
        }

        _createClass(ReportsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ReportsComponent;
      }();

      ReportsComponent.ctorParameters = function () {
        return [];
      };

      ReportsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reports',
        template: _raw_loader_reports_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reports_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])], ReportsComponent);
      /***/
    },

    /***/
    "qUkX":
    /*!*************************************************!*\
      !*** ./src/app/views/reports/reports.module.ts ***!
      \*************************************************/

    /*! exports provided: ReportsModule */

    /***/
    function qUkX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
        return ReportsModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _reports_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./reports.component */
      "LA2Q");
      /* harmony import */


      var _reports_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./reports-routing.module */
      "Jfv1");

      var ReportsModule = function ReportsModule() {
        _classCallCheck(this, ReportsModule);
      };

      ReportsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_reports_routing_module__WEBPACK_IMPORTED_MODULE_3__["ReportsRoutingModule"]],
        declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_2__["ReportsComponent"]]
      })], ReportsModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-reports-reports-module-es5.js.map