(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
    /***/
    "H++W":
    /*!************************************************************************************************!*\
      !*** ./node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/umd/custom-tooltips.js ***!
      \************************************************************************************************/

    /*! no static exports found */

    /***/
    function HW(module, exports, __webpack_require__) {
      (function (global, factory) {
        true ? factory(exports) : undefined;
      })(this, function (exports) {
        'use strict';
        /**
         * --------------------------------------------------------------------------
         * CoreUI Plugins - Custom Tooltips for Chart.js (v1.3.1): custom-tooltips.js
         * Licensed under MIT (https://coreui.io/license)
         * --------------------------------------------------------------------------
         */

        function CustomTooltips(tooltipModel) {
          var _this = this; // Add unique id if not exist


          var _setCanvasId = function _setCanvasId() {
            var _idMaker = function _idMaker() {
              var _hex = 16;
              var _multiplier = 0x10000;
              return ((1 + Math.random()) * _multiplier | 0).toString(_hex);
            };

            var _canvasId = "_canvas-" + (_idMaker() + _idMaker());

            _this._chart.canvas.id = _canvasId;
            return _canvasId;
          };

          var ClassName = {
            ABOVE: 'above',
            BELOW: 'below',
            CHARTJS_TOOLTIP: 'chartjs-tooltip',
            NO_TRANSFORM: 'no-transform',
            TOOLTIP_BODY: 'tooltip-body',
            TOOLTIP_BODY_ITEM: 'tooltip-body-item',
            TOOLTIP_BODY_ITEM_COLOR: 'tooltip-body-item-color',
            TOOLTIP_BODY_ITEM_LABEL: 'tooltip-body-item-label',
            TOOLTIP_BODY_ITEM_VALUE: 'tooltip-body-item-value',
            TOOLTIP_HEADER: 'tooltip-header',
            TOOLTIP_HEADER_ITEM: 'tooltip-header-item'
          };
          var Selector = {
            DIV: 'div',
            SPAN: 'span',
            TOOLTIP: (this._chart.canvas.id || _setCanvasId()) + "-tooltip"
          };
          var tooltip = document.getElementById(Selector.TOOLTIP);

          if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = Selector.TOOLTIP;
            tooltip.className = ClassName.CHARTJS_TOOLTIP;

            this._chart.canvas.parentNode.appendChild(tooltip);
          } // Hide if no tooltip


          if (tooltipModel.opacity === 0) {
            tooltip.style.opacity = 0;
            return;
          } // Set caret Position


          tooltip.classList.remove(ClassName.ABOVE, ClassName.BELOW, ClassName.NO_TRANSFORM);

          if (tooltipModel.yAlign) {
            tooltip.classList.add(tooltipModel.yAlign);
          } else {
            tooltip.classList.add(ClassName.NO_TRANSFORM);
          } // Set Text


          if (tooltipModel.body) {
            var titleLines = tooltipModel.title || [];
            var tooltipHeader = document.createElement(Selector.DIV);
            tooltipHeader.className = ClassName.TOOLTIP_HEADER;
            titleLines.forEach(function (title) {
              var tooltipHeaderTitle = document.createElement(Selector.DIV);
              tooltipHeaderTitle.className = ClassName.TOOLTIP_HEADER_ITEM;
              tooltipHeaderTitle.innerHTML = title;
              tooltipHeader.appendChild(tooltipHeaderTitle);
            });
            var tooltipBody = document.createElement(Selector.DIV);
            tooltipBody.className = ClassName.TOOLTIP_BODY;
            var tooltipBodyItems = tooltipModel.body.map(function (item) {
              return item.lines;
            });
            tooltipBodyItems.forEach(function (item, i) {
              var tooltipBodyItem = document.createElement(Selector.DIV);
              tooltipBodyItem.className = ClassName.TOOLTIP_BODY_ITEM;
              var colors = tooltipModel.labelColors[i];
              var tooltipBodyItemColor = document.createElement(Selector.SPAN);
              tooltipBodyItemColor.className = ClassName.TOOLTIP_BODY_ITEM_COLOR;
              tooltipBodyItemColor.style.backgroundColor = colors.backgroundColor;
              tooltipBodyItem.appendChild(tooltipBodyItemColor);

              if (item[0].split(':').length > 1) {
                var tooltipBodyItemLabel = document.createElement(Selector.SPAN);
                tooltipBodyItemLabel.className = ClassName.TOOLTIP_BODY_ITEM_LABEL;
                tooltipBodyItemLabel.innerHTML = item[0].split(': ')[0];
                tooltipBodyItem.appendChild(tooltipBodyItemLabel);
                var tooltipBodyItemValue = document.createElement(Selector.SPAN);
                tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                tooltipBodyItemValue.innerHTML = item[0].split(': ').pop();
                tooltipBodyItem.appendChild(tooltipBodyItemValue);
              } else {
                var _tooltipBodyItemValue = document.createElement(Selector.SPAN);

                _tooltipBodyItemValue.className = ClassName.TOOLTIP_BODY_ITEM_VALUE;
                _tooltipBodyItemValue.innerHTML = item[0];
                tooltipBodyItem.appendChild(_tooltipBodyItemValue);
              }

              tooltipBody.appendChild(tooltipBodyItem);
            });
            tooltip.innerHTML = '';
            tooltip.appendChild(tooltipHeader);
            tooltip.appendChild(tooltipBody);
          }

          var position = this._chart.canvas.getBoundingClientRect();

          var positionY = this._chart.canvas.offsetTop;
          var positionX = this._chart.canvas.offsetLeft;
          var positionLeft = positionX + tooltipModel.caretX;
          var positionTop = positionY + tooltipModel.caretY; // eslint-disable-next-line

          var halfWidth = tooltipModel.width / 2;

          if (positionLeft + halfWidth > position.width) {
            positionLeft -= halfWidth;
          } else if (positionLeft < halfWidth) {
            positionLeft += halfWidth;
          } // Display, position, and set styles for font


          tooltip.style.opacity = 1;
          tooltip.style.left = positionLeft + "px";
          tooltip.style.top = positionTop + "px";
        }

        var customTooltips = CustomTooltips; // TODO: camel-case

        exports.CustomTooltips = CustomTooltips;
        exports.customTooltips = customTooltips;
        Object.defineProperty(exports, '__esModule', {
          value: true
        });
      }); //# sourceMappingURL=custom-tooltips.js.map

      /***/

    },

    /***/
    "S4pr":
    /*!*******************************************!*\
      !*** ./src/app/services/brand.service.ts ***!
      \*******************************************/

    /*! exports provided: BrandService */

    /***/
    function S4pr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BrandService", function () {
        return BrandService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var BrandService = /*#__PURE__*/function () {
        function BrandService(http) {
          _classCallCheck(this, BrandService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(BrandService, [{
          key: "getBrands",
          value: function getBrands() {
            return this.http.get("".concat(this.apiUrl, "api/c/brands"));
          }
        }, {
          key: "deleteBrand",
          value: function deleteBrand(id) {
            return this.http["delete"]("".concat(this.apiUrl, "api/c/brands/").concat(id));
          }
        }, {
          key: "postBrand",
          value: function postBrand(payload) {
            return this.http.post("".concat(this.apiUrl, "api/c/brands/create"), payload);
          }
        }]);

        return BrandService;
      }();

      BrandService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      BrandService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], BrandService);
      /***/
    },

    /***/
    "ycII":
    /*!************************************************!*\
      !*** ./src/app/services/categories.service.ts ***!
      \************************************************/

    /*! exports provided: CategoriesService */

    /***/
    function ycII(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CategoriesService", function () {
        return CategoriesService;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../environments/environment */
      "AytR");

      var CategoriesService = /*#__PURE__*/function () {
        function CategoriesService(http) {
          _classCallCheck(this, CategoriesService);

          this.http = http;
          this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
        }

        _createClass(CategoriesService, [{
          key: "getCategories",
          value: function getCategories() {
            return this.http.get("".concat(this.apiUrl, "api/c/categories"));
          }
        }, {
          key: "deleteCategory",
          value: function deleteCategory(id) {
            return this.http["delete"]("".concat(this.apiUrl, "api/c/categories/").concat(id));
          }
        }, {
          key: "postCategory",
          value: function postCategory(payload) {
            return this.http.post("".concat(this.apiUrl, "api/c/categories/create"), payload);
          }
        }]);

        return CategoriesService;
      }();

      CategoriesService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      };

      CategoriesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], CategoriesService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map