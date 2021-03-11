(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-categories-categories-module"], {
    /***/
    "19Qk":
    /*!**********************************************************!*\
      !*** ./src/app/views/categories/categories.component.ts ***!
      \**********************************************************/

    /*! exports provided: CategoriesComponent */

    /***/
    function Qk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function () {
        return CategoriesComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./categories.component.html */
      "8Hwp");
      /* harmony import */


      var _categories_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categories.component.scss */
      "ZXtq");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _services_categories_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../services/categories.service */
      "ycII");

      var CategoriesComponent = /*#__PURE__*/function () {
        function CategoriesComponent(catgServ, fb) {
          _classCallCheck(this, CategoriesComponent);

          this.catgServ = catgServ;
          this.fb = fb;
          this.categories = [];
          this.submitted = false;
          this.status = false;
        }

        _createClass(CategoriesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getCategories();
            this.buildForm();
          }
        }, {
          key: "getCategories",
          value: function getCategories() {
            var _this = this;

            this.catgServ.getCategories().subscribe(function (res) {
              console.log('catg...', res);
              _this.categories = res.data;
            });
          }
        }, {
          key: "onChang",
          value: function onChang(e) {
            if (e.target.value == "true") {
              this.status = true;
            } else {
              this.status = false;
            }
          }
        }, {
          key: "f",
          get: function get() {
            console.log("this.addBrandForm.value.status: ", this.addCategoryForm.value.status);
            return Object.assign(Object.assign({}, this.addCategoryForm.value), {
              status: this.status
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm() {
            this.addCategoryForm = this.fb.group({
              category: [""],
              desc: [""],
              other: [""]
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this2 = this;

            this.submitted = true;
            this.catgServ.postCategory(this.f).subscribe(function (resp) {
              _this2.getCategories();
            });
            console.log(this.f);
          }
        }, {
          key: "deletCategory",
          value: function deletCategory(id) {
            var _this3 = this;

            this.catgServ.deleteCategory(id).subscribe(function (resp) {
              _this3.getCategories();
            });
          }
        }, {
          key: "reSet",
          value: function reSet() {
            this.addCategoryForm.reset();
          }
        }]);

        return CategoriesComponent;
      }();

      CategoriesComponent.ctorParameters = function () {
        return [{
          type: _services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
        }];
      };

      CategoriesComponent.propDecorators = {
        myModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ["myModal"]
        }]
      };
      CategoriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories',
        template: _raw_loader_categories_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_categories_service__WEBPACK_IMPORTED_MODULE_6__["CategoriesService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], CategoriesComponent);
      /***/
    },

    /***/
    "8Hwp":
    /*!**************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/categories/categories.component.html ***!
      \**************************************************************************************************/

    /*! exports provided: default */

    /***/
    function Hwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div\n  bsModal\n  #myModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">Add New category</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"myModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div\n        class=\"modal-body\"\n        id=\"medicineAddForm\"\n        [formGroup]=\"addCategoryForm\"\n      >\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"date-input\">Description</label>\n              <input\n                class=\"form-control\"\n                id=\"date-input\"\n                type=\"text\"\n                name=\"date-input\"\n                placeholder=\"desc\"\n                formControlName=\"desc\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"company\">Status</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                placeholder=\"Select Status\"\n                (change)=\"onChang($event)\"\n              >\n                <option value=\"0\">Select Status</option>\n                <option [value]=\"true\">Available</option>\n                <option [value]=\"false\">Not Available</option>\n              </select>\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"company\">Category</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"company\"\n                placeholder=\"category\"\n                formControlName=\"category\"\n              />\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"company\">Other</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"other\"\n                formControlName=\"other\"\n              />\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submit()\"\n          type=\"submit\"\n          form:submit\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Add\n        </button>\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\" (click)=\"reSet()\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"myModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h6>Available Categories</h6>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\n      <div class=\"input-group col-md-3\">\n        <input\n          type=\"text\"\n          id=\"input1-group2\"\n          name=\"input1-group2\"\n          class=\"form-control\"\n          placeholder=\"Search Categories\"\n          [(ngModel)]=\"term\"\n        />\n        <span class=\"input-group-append\">\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\n            <i class=\"fa fa-search\"></i> Search\n          </button>\n        </span>\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\n        data-toggle=\"modal\"\n        (click)=\"myModal.show()\"\n      >\n        Add New Category\n      </button>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>S. No.</th>\n          <th>Category</th>\n          <th>Description</th>\n          <th>status</th>\n          <th>update</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let category of categories |filter:term; let i = index\">\n          <td>{{ i + 1 }}</td>\n          <td>{{ category?.category }}</td>\n          <td>{{ category?.desc }}</td>\n          <td>\n            <span\n              class=\"badge\"\n              [class.badge-success]=\"category?.status\"\n              [class.badge-danger]=\"!category?.status\"\n              >{{ category?.status ? \"Available\" : \"NotAvailable\" }}</span\n            >\n          </td>\n          <td>\n            <div class=\"update row\">\n              <button class=\"btn btn-sm btn-secondary btn-pill\">Edit</button>\n              <button\n                class=\"btn btn-sm btn-danger btn-pill\"\n                (click)=\"deletCategory(category._id)\"\n              >\n                <span class=\"cil-trash\"></span>\n              </button>\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <ul class=\"pagination\">\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n      <li class=\"page-item active\">\n        <a class=\"page-link\" href=\"#\">1</a>\n      </li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n    </ul>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "X7qy":
    /*!*******************************************************!*\
      !*** ./src/app/views/categories/categories.module.ts ***!
      \*******************************************************/

    /*! exports provided: CategoriesModule */

    /***/
    function X7qy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesModule", function () {
        return CategoriesModule;
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


      var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./categories.component */
      "19Qk");
      /* harmony import */


      var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories-routing.module */
      "rltd");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-bootstrap/modal */
      "K3ix");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng2-search-filter */
      "cZdB");

      var CategoriesModule = function CategoriesModule() {
        _classCallCheck(this, CategoriesModule);
      };

      CategoriesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["ModalModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"]],
        declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]]
      })], CategoriesModule);
      /***/
    },

    /***/
    "ZXtq":
    /*!************************************************************!*\
      !*** ./src/app/views/categories/categories.component.scss ***!
      \************************************************************/

    /*! exports provided: default */

    /***/
    function ZXtq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "cZdB":
    /*!**************************************************************************!*\
      !*** ./node_modules/ng2-search-filter/__ivy_ngcc__/ng2-search-filter.js ***!
      \**************************************************************************/

    /*! exports provided: Ng2SearchPipeModule, Ng2SearchPipe */

    /***/
    function cZdB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipeModule", function () {
        return Ng2SearchPipeModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Ng2SearchPipe", function () {
        return Ng2SearchPipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var Ng2SearchPipe = /*#__PURE__*/function () {
        function Ng2SearchPipe() {
          _classCallCheck(this, Ng2SearchPipe);
        }

        _createClass(Ng2SearchPipe, [{
          key: "transform",
          value:
          /**
           * @param {?} items object from array
           * @param {?} term term's search
           * @return {?}
           */
          function transform(items, term) {
            if (!term || !items) return items;
            return Ng2SearchPipe.filter(items, term);
          }
          /**
           *
           * @param {?} items List of items to filter
           * @param {?} term  a string term to compare with every property of the list
           *
           * @return {?}
           */

        }], [{
          key: "filter",
          value: function filter(items, term) {
            var
            /** @type {?} */
            toCompare = term.toLowerCase();
            /**
             * @param {?} item
             * @param {?} term
             * @return {?}
             */

            function checkInside(item, term) {
              for (var
              /** @type {?} */
              property in item) {
                if (item[property] === null || item[property] == undefined) {
                  continue;
                }

                if (typeof item[property] === 'object') {
                  if (checkInside(item[property], term)) {
                    return true;
                  }
                }

                if (item[property].toString().toLowerCase().includes(toCompare)) {
                  return true;
                }
              }

              return false;
            }

            return items.filter(function (item) {
              return checkInside(item, term);
            });
          }
        }]);

        return Ng2SearchPipe;
      }();

      Ng2SearchPipe.ɵfac = function Ng2SearchPipe_Factory(t) {
        return new (t || Ng2SearchPipe)();
      };

      Ng2SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "filter",
        type: Ng2SearchPipe,
        pure: false
      });
      Ng2SearchPipe.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: Ng2SearchPipe,
        factory: Ng2SearchPipe.ɵfac
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipe.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'filter',
            pure: false
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();

      var Ng2SearchPipeModule = function Ng2SearchPipeModule() {
        _classCallCheck(this, Ng2SearchPipeModule);
      };

      Ng2SearchPipeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: Ng2SearchPipeModule
      });
      Ng2SearchPipeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function Ng2SearchPipeModule_Factory(t) {
          return new (t || Ng2SearchPipeModule)();
        }
      });
      /**
       * @nocollapse
       */

      Ng2SearchPipeModule.ctorParameters = function () {
        return [];
      };

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Ng2SearchPipeModule, {
          declarations: [Ng2SearchPipe],
          exports: [Ng2SearchPipe]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Ng2SearchPipeModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [Ng2SearchPipe],
            exports: [Ng2SearchPipe]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ng2-search-filter.js.map

      /***/

    },

    /***/
    "rltd":
    /*!***************************************************************!*\
      !*** ./src/app/views/categories/categories-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CategoriesRoutingModule */

    /***/
    function rltd(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function () {
        return CategoriesRoutingModule;
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


      var _categories_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./categories.component */
      "19Qk");

      var routes = [{
        path: '',
        component: _categories_component__WEBPACK_IMPORTED_MODULE_3__["CategoriesComponent"],
        data: {
          title: 'Category'
        }
      }];

      var CategoriesRoutingModule = function CategoriesRoutingModule() {
        _classCallCheck(this, CategoriesRoutingModule);
      };

      CategoriesRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], CategoriesRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=views-categories-categories-module-es5.js.map