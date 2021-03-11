(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/live/work/nutanPharm/backend/frontend/src/main.ts */"zUnb");


/***/ }),

/***/ "4XPS":
/*!******************************************************!*\
  !*** ./src/app/views/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "bVw4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let RegisterComponent = class RegisterComponent {
    constructor() { }
};
RegisterComponent.ctorParameters = () => [];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], RegisterComponent);



/***/ }),

/***/ "8gg5":
/*!**********************************************!*\
  !*** ./src/app/views/error/404.component.ts ***!
  \**********************************************/
/*! exports provided: P404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P404Component", function() { return P404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./404.component.html */ "nAJl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let P404Component = class P404Component {
    constructor() { }
};
P404Component.ctorParameters = () => [];
P404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_404_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P404Component);



/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
    production: false,
    apiUrl: "http://localhost:3001/",
};


/***/ }),

/***/ "DodC":
/*!****************************************************!*\
  !*** ./src/app/containers/default-layout/index.ts ***!
  \****************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout.component */ "JPqG");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout_component__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "G/4p":
/*!*************************************!*\
  !*** ./src/app/containers/index.ts ***!
  \*************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _default_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./default-layout */ "DodC");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return _default_layout__WEBPACK_IMPORTED_MODULE_0__["DefaultLayoutComponent"]; });




/***/ }),

/***/ "JPqG":
/*!***********************************************************************!*\
  !*** ./src/app/containers/default-layout/default-layout.component.ts ***!
  \***********************************************************************/
/*! exports provided: DefaultLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DefaultLayoutComponent", function() { return DefaultLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./default-layout.component.html */ "lm8q");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_nav */ "c2Qq");




let DefaultLayoutComponent = class DefaultLayoutComponent {
    constructor() {
        this.sidebarMinimized = false;
        this.navItems = _nav__WEBPACK_IMPORTED_MODULE_3__["navItems"];
        setTimeout(() => {
            document.getElementsByClassName("navbar-brand-full")[0].remove();
            document
                .getElementsByClassName("d-md-block d-none navbar-toggler")[0]
                .remove();
        }, 500);
    }
    toggleMinimize(e) {
        this.sidebarMinimized = e;
    }
};
DefaultLayoutComponent.ctorParameters = () => [];
DefaultLayoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_default_layout_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], DefaultLayoutComponent);



/***/ }),

/***/ "Lrxh":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/500.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">500</h1>\n          <h4 class=\"pt-3\">Houston, we have a problem!</h4>\n          <p class=\"text-muted\">The page you are looking for is temporarily unavailable.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "MWds":
/*!*****************************************************!*\
  !*** ./src/app/views/orders/bill/bill.component.ts ***!
  \*****************************************************/
/*! exports provided: BillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillComponent", function() { return BillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_bill_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./bill.component.html */ "gCzM");
/* harmony import */ var _bill_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bill.component.scss */ "PWp1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_bills_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/bills.service */ "vmt5");






let BillComponent = class BillComponent {
    constructor(route, billServ) {
        this.route = route;
        this.billServ = billServ;
        this.invoiceId = null;
        this.items = [];
        this.route.params.subscribe(({ id }) => {
            this.invoiceId = id;
            console.log("      this.invoiceId: ", this.invoiceId);
        });
    }
    ngOnInit() {
        this.getBills();
    }
    get paymentDate() {
        try {
            console.log('this.bill.invoiceId: ', this.bill.invoiceId);
            return new Date(this.bill.invoiceId);
        }
        catch (error) {
            return null;
        }
    }
    getBills() {
        this.billServ.getOrders(this.invoiceId).subscribe((resp) => {
            this.bill = resp.data;
            this.items = this.bill.orderedItem;
        });
    }
    printBill() {
        window.print();
    }
};
BillComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _services_bills_service__WEBPACK_IMPORTED_MODULE_5__["BillService"] }
];
BillComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-dashboard",
        template: _raw_loader_bill_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bill_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_bills_service__WEBPACK_IMPORTED_MODULE_5__["BillService"]])
], BillComponent);



/***/ }),

/***/ "PWp1":
/*!*******************************************************!*\
  !*** ./src/app/views/orders/bill/bill.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".receipt-content .logo a:hover {\n  text-decoration: none;\n  color: #7793C4;\n}\n\n.receipt-content .invoice-wrapper {\n  background: #FFF;\n  border: 1px solid #CDD3E2;\n  box-shadow: 0px 0px 1px #CCC;\n  padding: 0px 10px 60px;\n  margin-top: 5px;\n  border-radius: 4px;\n}\n\n.receipt-content .invoice-wrapper .payment-details span {\n  color: #A9B0BB;\n  display: block;\n}\n\n.receipt-content .invoice-wrapper .payment-details a {\n  display: inline-block;\n  margin-top: 5px;\n}\n\n.receipt-content .invoice-wrapper .line-items .print a {\n  display: inline-block;\n  border: 1px solid #9CB5D6;\n  padding: 13px 13px;\n  border-radius: 5px;\n  color: #708DC0;\n  font-size: 13px;\n  transition: all 0.2s linear;\n}\n\n.receipt-content .invoice-wrapper .line-items .print a:hover {\n  text-decoration: none;\n  border-color: #333;\n  color: #333;\n}\n\n.receipt-content {\n  background: #ECEEF4;\n}\n\n@media (min-width: 1200px) {\n  .receipt-content .container {\n    width: 900px;\n  }\n}\n\n.receipt-content .logo {\n  text-align: center;\n  margin-top: 50px;\n}\n\n.receipt-content .logo a {\n  font-family: Myriad Pro, Lato, Helvetica Neue, Arial;\n  font-size: 36px;\n  letter-spacing: 0.1px;\n  color: #555;\n  font-weight: 300;\n  transition: all 0.2s linear;\n}\n\n.receipt-content .invoice-wrapper .intro {\n  line-height: 25px;\n  color: #444;\n}\n\n.receipt-content .invoice-wrapper .payment-info {\n  margin-top: 25px;\n  padding-top: 15px;\n}\n\n.receipt-content .invoice-wrapper .payment-info span {\n  color: #A9B0BB;\n}\n\n.receipt-content .invoice-wrapper .payment-info strong {\n  display: block;\n  color: #444;\n  margin-top: 3px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .payment-info .text-right {\n    text-align: left;\n    margin-top: 20px;\n  }\n}\n\n.receipt-content .invoice-wrapper .payment-details {\n  border-top: 2px solid #EBECEE;\n  margin-top: 10px;\n  padding-top: 10px;\n  line-height: 22px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .payment-details .text-right {\n    text-align: left;\n    margin-top: 20px;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items {\n  margin-top: 30px;\n}\n\n.receipt-content .invoice-wrapper .line-items .headers {\n  color: #A9B0BB;\n  font-size: 13px;\n  letter-spacing: 0.3px;\n  border-bottom: 2px solid #EBECEE;\n  padding-bottom: 4px;\n}\n\n.receipt-content .invoice-wrapper .line-items .items {\n  margin-top: 8px;\n  border-bottom: 2px solid #EBECEE;\n  padding-bottom: 8px;\n}\n\n.receipt-content .invoice-wrapper .line-items .items .item {\n  padding: 10px 0;\n  color: #696969;\n  font-size: 15px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .line-items .items .item {\n    font-size: 13px;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items .items .item .amount {\n  letter-spacing: 0.1px;\n  color: #84868A;\n  font-size: 16px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .line-items .items .item .amount {\n    font-size: 13px;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items .total {\n  margin-top: 30px;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .extra-notes {\n  float: left;\n  width: 40%;\n  text-align: left;\n  font-size: 13px;\n  color: #7A7A7A;\n  line-height: 20px;\n}\n\n@media (max-width: 767px) {\n  .receipt-content .invoice-wrapper .line-items .total .extra-notes {\n    width: 100%;\n    margin-bottom: 30px;\n    float: none;\n  }\n}\n\n.receipt-content .invoice-wrapper .line-items .total .extra-notes strong {\n  display: block;\n  margin-bottom: 5px;\n  color: #454545;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field {\n  margin-bottom: 7px;\n  font-size: 14px;\n  color: #555;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field.grand-total {\n  margin-top: 10px;\n  font-size: 16px;\n  font-weight: 500;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field.grand-total span {\n  color: #20A720;\n  font-size: 16px;\n}\n\n.receipt-content .invoice-wrapper .line-items .total .field span {\n  display: inline-block;\n  margin-left: 20px;\n  min-width: 85px;\n  color: #84868A;\n  font-size: 15px;\n}\n\n.receipt-content .invoice-wrapper .line-items .print {\n  margin-top: 50px;\n  text-align: center;\n}\n\n.receipt-content .invoice-wrapper .line-items .print a i {\n  margin-right: 3px;\n  font-size: 14px;\n}\n\n.receipt-content .footer {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  font-size: 12px;\n  color: #969CAD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2JpbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGNBQUE7QUFDSjs7QUFFRTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxjQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBS0EsMkJBQUE7QUFFSjs7QUFDRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQ0U7RUFDRSxtQkFBQTtBQUVKOztBQUFFO0VBQ0U7SUFBNkIsWUFBQTtFQUkvQjtBQUNGOztBQUZFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQURFO0VBQ0Usb0RBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFLQSwyQkFBQTtBQUlKOztBQURFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBSUo7O0FBREU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBREU7RUFDRSxjQUFBO0FBSUo7O0FBREU7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFJSjs7QUFERTtFQUNFO0lBQ0EsZ0JBQUE7SUFDQSxnQkFBQTtFQUlGO0FBQ0Y7O0FBSEU7RUFDRSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQUtKOztBQURFO0VBQ0U7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0VBSUY7QUFDRjs7QUFIRTtFQUNFLGdCQUFBO0FBS0o7O0FBSEU7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtBQU1KOztBQUpFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsbUJBQUE7QUFPSjs7QUFMRTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVFKOztBQU5FO0VBQ0U7SUFDQSxlQUFBO0VBU0Y7QUFDRjs7QUFSRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFVSjs7QUFSRTtFQUNFO0lBQ0EsZUFBQTtFQVdGO0FBQ0Y7O0FBVEU7RUFDRSxnQkFBQTtBQVdKOztBQVJFO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFSRTtFQUNFO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtFQVdGO0FBQ0Y7O0FBVEU7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBV0o7O0FBUkU7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBV0o7O0FBUkU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVdKOztBQVJFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFXSjs7QUFSRTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFXSjs7QUFSRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFXSjs7QUFORTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQVNKOztBQU5FO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFTSiIsImZpbGUiOiJiaWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY2VpcHQtY29udGVudCAubG9nbyBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgY29sb3I6ICM3NzkzQzQ7IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIge1xuICAgIGJhY2tncm91bmQ6ICNGRkY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI0NERDNFMjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDFweCAjQ0NDO1xuICAgIHBhZGRpbmc6IDBweCAxMHB4IDYwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgXG4gIH1cbiAgXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAucGF5bWVudC1kZXRhaWxzIHNwYW4ge1xuICAgIGNvbG9yOiAjQTlCMEJCO1xuICAgIGRpc3BsYXk6IGJsb2NrOyBcbiAgfVxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLnBheW1lbnQtZGV0YWlscyBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogNXB4OyBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5wcmludCBhIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlDQjVENjtcbiAgICBwYWRkaW5nOiAxM3B4IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjNzA4REMwO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnByaW50IGE6aG92ZXIge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBib3JkZXItY29sb3I6ICMzMzM7XG4gICAgY29sb3I6ICMzMzM7IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRUY0OyBcbiAgfVxuICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLnJlY2VpcHQtY29udGVudCAuY29udGFpbmVyIHt3aWR0aDogOTAwcHg7IH0gXG4gIH1cbiAgXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmxvZ28ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiA1MHB4OyBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAubG9nbyBhIHtcbiAgICBmb250LWZhbWlseTogTXlyaWFkIFBybywgTGF0bywgSGVsdmV0aWNhIE5ldWUsIEFyaWFsO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFweDtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIC1tcy10cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjsgXG4gIH1cbiAgXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAuaW50cm8ge1xuICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgIGNvbG9yOiAjNDQ0OyBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5wYXltZW50LWluZm8ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLnBheW1lbnQtaW5mbyBzcGFuIHtcbiAgICBjb2xvcjogI0E5QjBCQjsgXG4gIH1cbiAgXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAucGF5bWVudC1pbmZvIHN0cm9uZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgbWFyZ2luLXRvcDogM3B4OyBcbiAgfVxuICBcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gICAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5wYXltZW50LWluZm8gLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDsgfSBcbiAgfVxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLnBheW1lbnQtZGV0YWlscyB7XG4gICAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNFQkVDRUU7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBsaW5lLWhlaWdodDogMjJweDsgXG4gIH1cbiAgXG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLnBheW1lbnQtZGV0YWlscyAudGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyB9IFxuICB9XG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDsgXG4gIH1cbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5oZWFkZXJzIHtcbiAgICBjb2xvcjogI0E5QjBCQjtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IC4zcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNFQkVDRUU7XG4gICAgcGFkZGluZy1ib3R0b206IDRweDsgXG4gIH1cbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5pdGVtcyB7XG4gICAgbWFyZ2luLXRvcDogOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjRUJFQ0VFO1xuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7IFxuICB9XG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaXRlbXMgLml0ZW0ge1xuICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICBjb2xvcjogIzY5Njk2OTtcbiAgICBmb250LXNpemU6IDE1cHg7IFxuICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaXRlbXMgLml0ZW0ge1xuICAgIGZvbnQtc2l6ZTogMTNweDsgfSBcbiAgfVxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLml0ZW1zIC5pdGVtIC5hbW91bnQge1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgICBjb2xvcjogIzg0ODY4QTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICB9XG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAuaXRlbXMgLml0ZW0gLmFtb3VudCB7XG4gICAgZm9udC1zaXplOiAxM3B4OyB9IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnRvdGFsIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4OyBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZXh0cmEtbm90ZXMge1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHdpZHRoOiA0MCU7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgY29sb3I6ICM3QTdBN0E7XG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7IFxuICB9XG4gIFxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnRvdGFsIC5leHRyYS1ub3RlcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBmbG9hdDogbm9uZTsgfSBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZXh0cmEtbm90ZXMgc3Ryb25nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgY29sb3I6ICM0NTQ1NDU7IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnRvdGFsIC5maWVsZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBjb2xvcjogIzU1NTsgXG4gIH1cbiAgXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmludm9pY2Utd3JhcHBlciAubGluZS1pdGVtcyAudG90YWwgLmZpZWxkLmdyYW5kLXRvdGFsIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNTAwOyBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZmllbGQuZ3JhbmQtdG90YWwgc3BhbiB7XG4gICAgY29sb3I6ICMyMEE3MjA7XG4gICAgZm9udC1zaXplOiAxNnB4OyBcbiAgfVxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC50b3RhbCAuZmllbGQgc3BhbiB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIG1pbi13aWR0aDogODVweDtcbiAgICBjb2xvcjogIzg0ODY4QTtcbiAgICBmb250LXNpemU6IDE1cHg7IFxuICB9XG4gIFxuICAucmVjZWlwdC1jb250ZW50IC5pbnZvaWNlLXdyYXBwZXIgLmxpbmUtaXRlbXMgLnByaW50IHtcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXG4gIH1cbiAgXG4gIFxuICBcbiAgLnJlY2VpcHQtY29udGVudCAuaW52b2ljZS13cmFwcGVyIC5saW5lLWl0ZW1zIC5wcmludCBhIGkge1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTRweDsgXG4gIH1cbiAgXG4gIC5yZWNlaXB0LWNvbnRlbnQgLmZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6ICM5NjlDQUQ7IFxuICB9Il19 */");

/***/ }),

/***/ "QB/w":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "nSew");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let LoginComponent = class LoginComponent {
};
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    })
], LoginComponent);



/***/ }),

/***/ "RnhZ":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "K/tc",
	"./af.js": "K/tc",
	"./ar": "jnO4",
	"./ar-dz": "o1bE",
	"./ar-dz.js": "o1bE",
	"./ar-kw": "Qj4J",
	"./ar-kw.js": "Qj4J",
	"./ar-ly": "HP3h",
	"./ar-ly.js": "HP3h",
	"./ar-ma": "CoRJ",
	"./ar-ma.js": "CoRJ",
	"./ar-sa": "gjCT",
	"./ar-sa.js": "gjCT",
	"./ar-tn": "bYM6",
	"./ar-tn.js": "bYM6",
	"./ar.js": "jnO4",
	"./az": "SFxW",
	"./az.js": "SFxW",
	"./be": "H8ED",
	"./be.js": "H8ED",
	"./bg": "hKrs",
	"./bg.js": "hKrs",
	"./bm": "p/rL",
	"./bm.js": "p/rL",
	"./bn": "kEOa",
	"./bn-bd": "loYQ",
	"./bn-bd.js": "loYQ",
	"./bn.js": "kEOa",
	"./bo": "0mo+",
	"./bo.js": "0mo+",
	"./br": "aIdf",
	"./br.js": "aIdf",
	"./bs": "JVSJ",
	"./bs.js": "JVSJ",
	"./ca": "1xZ4",
	"./ca.js": "1xZ4",
	"./cs": "PA2r",
	"./cs.js": "PA2r",
	"./cv": "A+xa",
	"./cv.js": "A+xa",
	"./cy": "l5ep",
	"./cy.js": "l5ep",
	"./da": "DxQv",
	"./da.js": "DxQv",
	"./de": "tGlX",
	"./de-at": "s+uk",
	"./de-at.js": "s+uk",
	"./de-ch": "u3GI",
	"./de-ch.js": "u3GI",
	"./de.js": "tGlX",
	"./dv": "WYrj",
	"./dv.js": "WYrj",
	"./el": "jUeY",
	"./el.js": "jUeY",
	"./en-au": "Dmvi",
	"./en-au.js": "Dmvi",
	"./en-ca": "OIYi",
	"./en-ca.js": "OIYi",
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7",
	"./en-ie": "4dOw",
	"./en-ie.js": "4dOw",
	"./en-il": "czMo",
	"./en-il.js": "czMo",
	"./en-in": "7C5Q",
	"./en-in.js": "7C5Q",
	"./en-nz": "b1Dy",
	"./en-nz.js": "b1Dy",
	"./en-sg": "t+mt",
	"./en-sg.js": "t+mt",
	"./eo": "Zduo",
	"./eo.js": "Zduo",
	"./es": "iYuL",
	"./es-do": "CjzT",
	"./es-do.js": "CjzT",
	"./es-mx": "tbfe",
	"./es-mx.js": "tbfe",
	"./es-us": "Vclq",
	"./es-us.js": "Vclq",
	"./es.js": "iYuL",
	"./et": "7BjC",
	"./et.js": "7BjC",
	"./eu": "D/JM",
	"./eu.js": "D/JM",
	"./fa": "jfSC",
	"./fa.js": "jfSC",
	"./fi": "gekB",
	"./fi.js": "gekB",
	"./fil": "1ppg",
	"./fil.js": "1ppg",
	"./fo": "ByF4",
	"./fo.js": "ByF4",
	"./fr": "nyYc",
	"./fr-ca": "2fjn",
	"./fr-ca.js": "2fjn",
	"./fr-ch": "Dkky",
	"./fr-ch.js": "Dkky",
	"./fr.js": "nyYc",
	"./fy": "cRix",
	"./fy.js": "cRix",
	"./ga": "USCx",
	"./ga.js": "USCx",
	"./gd": "9rRi",
	"./gd.js": "9rRi",
	"./gl": "iEDd",
	"./gl.js": "iEDd",
	"./gom-deva": "qvJo",
	"./gom-deva.js": "qvJo",
	"./gom-latn": "DKr+",
	"./gom-latn.js": "DKr+",
	"./gu": "4MV3",
	"./gu.js": "4MV3",
	"./he": "x6pH",
	"./he.js": "x6pH",
	"./hi": "3E1r",
	"./hi.js": "3E1r",
	"./hr": "S6ln",
	"./hr.js": "S6ln",
	"./hu": "WxRl",
	"./hu.js": "WxRl",
	"./hy-am": "1rYy",
	"./hy-am.js": "1rYy",
	"./id": "UDhR",
	"./id.js": "UDhR",
	"./is": "BVg3",
	"./is.js": "BVg3",
	"./it": "bpih",
	"./it-ch": "bxKX",
	"./it-ch.js": "bxKX",
	"./it.js": "bpih",
	"./ja": "B55N",
	"./ja.js": "B55N",
	"./jv": "tUCv",
	"./jv.js": "tUCv",
	"./ka": "IBtZ",
	"./ka.js": "IBtZ",
	"./kk": "bXm7",
	"./kk.js": "bXm7",
	"./km": "6B0Y",
	"./km.js": "6B0Y",
	"./kn": "PpIw",
	"./kn.js": "PpIw",
	"./ko": "Ivi+",
	"./ko.js": "Ivi+",
	"./ku": "JCF/",
	"./ku.js": "JCF/",
	"./ky": "lgnt",
	"./ky.js": "lgnt",
	"./lb": "RAwQ",
	"./lb.js": "RAwQ",
	"./lo": "sp3z",
	"./lo.js": "sp3z",
	"./lt": "JvlW",
	"./lt.js": "JvlW",
	"./lv": "uXwI",
	"./lv.js": "uXwI",
	"./me": "KTz0",
	"./me.js": "KTz0",
	"./mi": "aIsn",
	"./mi.js": "aIsn",
	"./mk": "aQkU",
	"./mk.js": "aQkU",
	"./ml": "AvvY",
	"./ml.js": "AvvY",
	"./mn": "lYtQ",
	"./mn.js": "lYtQ",
	"./mr": "Ob0Z",
	"./mr.js": "Ob0Z",
	"./ms": "6+QB",
	"./ms-my": "ZAMP",
	"./ms-my.js": "ZAMP",
	"./ms.js": "6+QB",
	"./mt": "G0Uy",
	"./mt.js": "G0Uy",
	"./my": "honF",
	"./my.js": "honF",
	"./nb": "bOMt",
	"./nb.js": "bOMt",
	"./ne": "OjkT",
	"./ne.js": "OjkT",
	"./nl": "+s0g",
	"./nl-be": "2ykv",
	"./nl-be.js": "2ykv",
	"./nl.js": "+s0g",
	"./nn": "uEye",
	"./nn.js": "uEye",
	"./oc-lnc": "Fnuy",
	"./oc-lnc.js": "Fnuy",
	"./pa-in": "8/+R",
	"./pa-in.js": "8/+R",
	"./pl": "jVdC",
	"./pl.js": "jVdC",
	"./pt": "8mBD",
	"./pt-br": "0tRk",
	"./pt-br.js": "0tRk",
	"./pt.js": "8mBD",
	"./ro": "lyxo",
	"./ro.js": "lyxo",
	"./ru": "lXzo",
	"./ru.js": "lXzo",
	"./sd": "Z4QM",
	"./sd.js": "Z4QM",
	"./se": "//9w",
	"./se.js": "//9w",
	"./si": "7aV9",
	"./si.js": "7aV9",
	"./sk": "e+ae",
	"./sk.js": "e+ae",
	"./sl": "gVVK",
	"./sl.js": "gVVK",
	"./sq": "yPMs",
	"./sq.js": "yPMs",
	"./sr": "zx6S",
	"./sr-cyrl": "E+lV",
	"./sr-cyrl.js": "E+lV",
	"./sr.js": "zx6S",
	"./ss": "Ur1D",
	"./ss.js": "Ur1D",
	"./sv": "X709",
	"./sv.js": "X709",
	"./sw": "dNwA",
	"./sw.js": "dNwA",
	"./ta": "PeUW",
	"./ta.js": "PeUW",
	"./te": "XLvN",
	"./te.js": "XLvN",
	"./tet": "V2x9",
	"./tet.js": "V2x9",
	"./tg": "Oxv6",
	"./tg.js": "Oxv6",
	"./th": "EOgW",
	"./th.js": "EOgW",
	"./tk": "Wv91",
	"./tk.js": "Wv91",
	"./tl-ph": "Dzi0",
	"./tl-ph.js": "Dzi0",
	"./tlh": "z3Vd",
	"./tlh.js": "z3Vd",
	"./tr": "DoHr",
	"./tr.js": "DoHr",
	"./tzl": "z1FC",
	"./tzl.js": "z1FC",
	"./tzm": "wQk9",
	"./tzm-latn": "tT3J",
	"./tzm-latn.js": "tT3J",
	"./tzm.js": "wQk9",
	"./ug-cn": "YRex",
	"./ug-cn.js": "YRex",
	"./uk": "raLr",
	"./uk.js": "raLr",
	"./ur": "UpQW",
	"./ur.js": "UpQW",
	"./uz": "Loxo",
	"./uz-latn": "AQ68",
	"./uz-latn.js": "AQ68",
	"./uz.js": "Loxo",
	"./vi": "KSF8",
	"./vi.js": "KSF8",
	"./x-pseudo": "/X5v",
	"./x-pseudo.js": "/X5v",
	"./yo": "fzPg",
	"./yo.js": "fzPg",
	"./zh-cn": "XDpg",
	"./zh-cn.js": "XDpg",
	"./zh-hk": "SatO",
	"./zh-hk.js": "SatO",
	"./zh-mo": "OmwH",
	"./zh-mo.js": "OmwH",
	"./zh-tw": "kOpN",
	"./zh-tw.js": "kOpN"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "RnhZ";

/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/icons-angular */ "4r2+");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "t17N");





let AppComponent = class AppComponent {
    constructor(router, iconSet) {
        this.router = router;
        this.iconSet = iconSet;
        // iconSet singleton
        iconSet.icons = Object.assign({}, _coreui_icons__WEBPACK_IMPORTED_MODULE_4__["freeSet"]);
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        // tslint:disable-next-line
        selector: "body",
        template: "<router-outlet></router-outlet>",
        providers: [_coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_3__["IconSetService"]])
], AppComponent);



/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-angular */ "4r2+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");
/* harmony import */ var _coreui_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @coreui/angular */ "ZTs3");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.routing */ "beVS");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "dZIy");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "44PX");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./views/orders/bill/bill.component */ "MWds");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_20__);







const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};

// Import containers





const APP_CONTAINERS = [
    _containers__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutComponent"]
];

// Import routing module

// Import 3rd party components






let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _app_routing__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppAsideModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppBreadcrumbModule"].forRoot(),
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppFooterModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppHeaderModule"],
            _coreui_angular__WEBPACK_IMPORTED_MODULE_13__["AppSidebarModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_15__["BsDropdownModule"].forRoot(),
            ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_16__["TabsModule"].forRoot(),
            ng2_charts__WEBPACK_IMPORTED_MODULE_17__["ChartsModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconModule"],
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetModule"].forRoot(),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            angular2_moment__WEBPACK_IMPORTED_MODULE_20__["MomentModule"]
        ],
        declarations: [
            _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_19__["BillComponent"],
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            ...APP_CONTAINERS,
            _views_error_404_component__WEBPACK_IMPORTED_MODULE_9__["P404Component"],
            _views_error_500_component__WEBPACK_IMPORTED_MODULE_10__["P500Component"],
            _views_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
            _views_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
        ],
        providers: [
            {
                provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["LocationStrategy"],
                useClass: _angular_common__WEBPACK_IMPORTED_MODULE_3__["HashLocationStrategy"]
            },
            _coreui_icons_angular__WEBPACK_IMPORTED_MODULE_6__["IconSetService"],
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "bVw4":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/register/register.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mx-auto\">\n          <div class=\"card mx-4\">\n            <div class=\"card-body p-4\">\n              <form>\n                <h1>Register</h1>\n                <p class=\"text-muted\">Create your account</p>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\">@</span>\n                  </div>\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Email\" autocomplete=\"email\" required>\n                </div>\n                <div class=\"input-group mb-3\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"new-password\" required>\n                </div>\n                <div class=\"input-group mb-4\">\n                  <div class=\"input-group-prepend\">\n                    <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                  </div>\n                  <input type=\"password\" class=\"form-control\" placeholder=\"Repeat password\" autocomplete=\"new-password\" required>\n                </div>\n                <button type=\"button\" class=\"btn btn-block btn-success\">Create Account</button>\n              </form>\n            </div>\n            <div class=\"card-footer p-4\">\n              <div class=\"row\">\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-facebook\" type=\"button\"><span>facebook</span></button>\n                </div>\n                <div class=\"col-6\">\n                  <button class=\"btn btn-block btn-twitter\" type=\"button\"><span>twitter</span></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "beVS":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routes, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./containers */ "G/4p");
/* harmony import */ var _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/error/404.component */ "8gg5");
/* harmony import */ var _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/error/500.component */ "dxhq");
/* harmony import */ var _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/login/login.component */ "QB/w");
/* harmony import */ var _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/orders/bill/bill.component */ "MWds");
/* harmony import */ var _views_register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/register/register.component */ "4XPS");



// Import Containers






const routes = [
    {
        path: 'orders/:id',
        component: _views_orders_bill_bill_component__WEBPACK_IMPORTED_MODULE_7__["BillComponent"],
        data: {
            title: 'Orders'
        }
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
    },
    {
        path: '404',
        component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"],
        data: {
            title: 'Page 404'
        }
    },
    {
        path: '500',
        component: _views_error_500_component__WEBPACK_IMPORTED_MODULE_5__["P500Component"],
        data: {
            title: 'Page 500'
        }
    },
    {
        path: 'login',
        component: _views_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
        data: {
            title: 'Login Page'
        }
    },
    {
        path: 'register',
        component: _views_register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
        data: {
            title: 'Register Page'
        }
    },
    {
        path: '',
        component: _containers__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutComponent"],
        data: {
            title: 'Home'
        },
        children: [
            {
                path: 'reports',
                loadChildren: () => __webpack_require__.e(/*! import() | views-reports-reports-module */ "views-reports-reports-module").then(__webpack_require__.bind(null, /*! ./views/reports/reports.module */ "qUkX")).then(m => m.ReportsModule)
            },
            {
                path: 'orders',
                loadChildren: () => Promise.all(/*! import() | views-orders-orders-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("default~views-medicine-medicine-module~views-orders-orders-module"), __webpack_require__.e("views-orders-orders-module")]).then(__webpack_require__.bind(null, /*! ./views/orders/orders.module */ "lpX+")).then(m => m.OrdersModule)
            },
            {
                path: 'categories',
                loadChildren: () => Promise.all(/*! import() | views-categories-categories-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("common"), __webpack_require__.e("views-categories-categories-module")]).then(__webpack_require__.bind(null, /*! ./views/categories/categories.module */ "X7qy")).then(m => m.CategoriesModule)
            },
            {
                path: 'brands',
                loadChildren: () => Promise.all(/*! import() | views-brand-brand-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("common"), __webpack_require__.e("views-brand-brand-module")]).then(__webpack_require__.bind(null, /*! ./views/brand/brand.module */ "9OJM")).then(m => m.BrandModule)
            },
            {
                path: 'medicines',
                loadChildren: () => Promise.all(/*! import() | views-medicine-medicine-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("default~views-medicine-medicine-module~views-orders-orders-module"), __webpack_require__.e("default~views-base-base-module~views-medicine-medicine-module"), __webpack_require__.e("common"), __webpack_require__.e("views-medicine-medicine-module")]).then(__webpack_require__.bind(null, /*! ./views/medicine/medicine.module */ "P8Yz")).then(m => m.MedicineModule)
            },
            {
                path: 'base',
                loadChildren: () => Promise.all(/*! import() | views-base-base-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("default~views-base-base-module~views-medicine-medicine-module"), __webpack_require__.e("views-base-base-module")]).then(__webpack_require__.bind(null, /*! ./views/base/base.module */ "Cvcy")).then(m => m.BaseModule)
            },
            {
                path: 'buttons',
                loadChildren: () => Promise.all(/*! import() | views-buttons-buttons-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("views-buttons-buttons-module")]).then(__webpack_require__.bind(null, /*! ./views/buttons/buttons.module */ "Reju")).then(m => m.ButtonsModule)
            },
            {
                path: 'charts',
                loadChildren: () => __webpack_require__.e(/*! import() | views-chartjs-chartjs-module */ "views-chartjs-chartjs-module").then(__webpack_require__.bind(null, /*! ./views/chartjs/chartjs.module */ "Y+KY")).then(m => m.ChartJSModule)
            },
            {
                path: 'dashboard',
                loadChildren: () => Promise.all(/*! import() | views-dashboard-dashboard-module */[__webpack_require__.e("default~views-base-base-module~views-brand-brand-module~views-buttons-buttons-module~views-categorie~5eb7e71c"), __webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./views/dashboard/dashboard.module */ "6dU7")).then(m => m.DashboardModule)
            },
            {
                path: 'icons',
                loadChildren: () => __webpack_require__.e(/*! import() | views-icons-icons-module */ "views-icons-icons-module").then(__webpack_require__.bind(null, /*! ./views/icons/icons.module */ "aPNi")).then(m => m.IconsModule)
            },
            {
                path: 'notifications',
                loadChildren: () => Promise.all(/*! import() | views-notifications-notifications-module */[__webpack_require__.e("default~views-brand-brand-module~views-categories-categories-module~views-medicine-medicine-module~v~432c2d80"), __webpack_require__.e("views-notifications-notifications-module")]).then(__webpack_require__.bind(null, /*! ./views/notifications/notifications.module */ "KpDv")).then(m => m.NotificationsModule)
            },
            {
                path: 'theme',
                loadChildren: () => Promise.all(/*! import() | views-theme-theme-module */[__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("views-theme-theme-module")]).then(__webpack_require__.bind(null, /*! ./views/theme/theme.module */ "AgMk")).then(m => m.ThemeModule)
            },
            {
                path: 'widgets',
                loadChildren: () => Promise.all(/*! import() | views-widgets-widgets-module */[__webpack_require__.e("default~views-dashboard-dashboard-module~views-theme-theme-module~views-widgets-widgets-module"), __webpack_require__.e("common"), __webpack_require__.e("views-widgets-widgets-module")]).then(__webpack_require__.bind(null, /*! ./views/widgets/widgets.module */ "XVX6")).then(m => m.WidgetsModule)
            }
        ]
    },
    { path: '**', component: _views_error_404_component__WEBPACK_IMPORTED_MODULE_4__["P404Component"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "c2Qq":
/*!*************************!*\
  !*** ./src/app/_nav.ts ***!
  \*************************/
/*! exports provided: navItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navItems", function() { return navItems; });
const navItems = [
    {
        name: 'Dashboard',
        url: '/dashboard',
        icon: 'icon-speedometer',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        title: true,
        name: 'Operation'
    },
    {
        name: 'Medicine',
        url: '/medicines',
        icon: 'cil-medical-cross'
    },
    {
        name: 'Category',
        url: '/categories',
        icon: 'cil-map'
    },
    {
        name: 'Brand',
        url: '/brands',
        icon: 'cil-description'
    },
    {
        name: 'Orders',
        url: '/orders',
        icon: 'cil-hand-point-up'
    },
    {
        name: 'Reports',
        url: '/reports',
        icon: 'cil-library'
    },
    {
        title: true,
        name: 'Components'
    },
    {
        name: 'Base',
        url: '/base',
        icon: 'icon-puzzle',
        children: [
            {
                name: 'Cards',
                url: '/base/cards',
                icon: 'icon-puzzle'
            },
            {
                name: 'Carousels',
                url: '/base/carousels',
                icon: 'icon-puzzle'
            },
            {
                name: 'Collapses',
                url: '/base/collapses',
                icon: 'icon-puzzle'
            },
            {
                name: 'Forms',
                url: '/base/forms',
                icon: 'icon-puzzle'
            },
            {
                name: 'Navbars',
                url: '/base/navbars',
                icon: 'icon-puzzle'
            },
            {
                name: 'Pagination',
                url: '/base/paginations',
                icon: 'icon-puzzle'
            },
            {
                name: 'Popovers',
                url: '/base/popovers',
                icon: 'icon-puzzle'
            },
            {
                name: 'Progress',
                url: '/base/progress',
                icon: 'icon-puzzle'
            },
            {
                name: 'Switches',
                url: '/base/switches',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tables',
                url: '/base/tables',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tabs',
                url: '/base/tabs',
                icon: 'icon-puzzle'
            },
            {
                name: 'Tooltips',
                url: '/base/tooltips',
                icon: 'icon-puzzle'
            }
        ]
    },
    {
        name: 'Buttons',
        url: '/buttons',
        icon: 'icon-cursor',
        children: [
            {
                name: 'Buttons',
                url: '/buttons/buttons',
                icon: 'icon-cursor'
            },
            {
                name: 'Dropdowns',
                url: '/buttons/dropdowns',
                icon: 'icon-cursor'
            },
            {
                name: 'Brand Buttons',
                url: '/buttons/brand-buttons',
                icon: 'icon-cursor'
            }
        ]
    },
    {
        name: 'Charts',
        url: '/charts',
        icon: 'icon-pie-chart'
    },
    {
        name: 'Icons',
        url: '/icons',
        icon: 'icon-star',
        children: [
            {
                name: 'CoreUI Icons',
                url: '/icons/coreui-icons',
                icon: 'icon-star',
                badge: {
                    variant: 'success',
                    text: 'NEW'
                }
            },
            {
                name: 'Flags',
                url: '/icons/flags',
                icon: 'icon-star'
            },
            {
                name: 'Font Awesome',
                url: '/icons/font-awesome',
                icon: 'icon-star',
                badge: {
                    variant: 'secondary',
                    text: '4.7'
                }
            },
            {
                name: 'Simple Line Icons',
                url: '/icons/simple-line-icons',
                icon: 'icon-star'
            }
        ]
    },
    {
        name: 'Notifications',
        url: '/notifications',
        icon: 'icon-bell',
        children: [
            {
                name: 'Alerts',
                url: '/notifications/alerts',
                icon: 'icon-bell'
            },
            {
                name: 'Badges',
                url: '/notifications/badges',
                icon: 'icon-bell'
            },
            {
                name: 'Modals',
                url: '/notifications/modals',
                icon: 'icon-bell'
            }
        ]
    },
    {
        name: 'Widgets',
        url: '/widgets',
        icon: 'icon-calculator',
        badge: {
            variant: 'info',
            text: 'NEW'
        }
    },
    {
        divider: true
    },
    {
        title: true,
        name: 'Extras',
    },
    {
        name: 'Pages',
        url: '/pages',
        icon: 'icon-star',
        children: [
            {
                name: 'Login',
                url: '/login',
                icon: 'icon-star'
            },
            {
                name: 'Register',
                url: '/register',
                icon: 'icon-star'
            },
            {
                name: 'Error 404',
                url: '/404',
                icon: 'icon-star'
            },
            {
                name: 'Error 500',
                url: '/500',
                icon: 'icon-star'
            }
        ]
    },
];


/***/ }),

/***/ "dxhq":
/*!**********************************************!*\
  !*** ./src/app/views/error/500.component.ts ***!
  \**********************************************/
/*! exports provided: P500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P500Component", function() { return P500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./500.component.html */ "Lrxh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



let P500Component = class P500Component {
    constructor() { }
};
P500Component.ctorParameters = () => [];
P500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        template: _raw_loader_500_component_html__WEBPACK_IMPORTED_MODULE_1__["default"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], P500Component);



/***/ }),

/***/ "gCzM":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/orders/bill/bill.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"receipt-content\">\n  <div class=\"container bootstrap snippets bootdey\">\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"invoice-wrapper\">\n          <div class=\"payment-details\">\n            <div class=\"row\">\n              <div class=\"col-sm-8\">\n                <h2>M/s Nutan Pharma Medical</h2>\n                <p>\n                  67, Ashta <br />\n                  Ph No. 345343534 <br />\n                  <strong>DL No.</strong> 20/695/30/2020<br />\n                </p>\n              </div>\n              <div class=\"col-sm-4 text-right\">\n                <h4>Customer Name : {{ bill?.customerName }}</h4>\n                <p>Contact : {{ bill?.customerContact }}<br /></p>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"line-items\">\n            <div class=\"invoice-heading row\" style=\"border: 1px solid gray; margin-left: 1px; margin-right: 1px; \">\n              <div class=\"item1 col-sm-4\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n                <strong>DL No.</strong> : 20B-24, 21B-25 <br>\n                <strong>GSTIN</strong> : 23AADFG2132L1ZR\n              </div>\n              <div class=\"item2 col-sm-4\" style=\"padding: 12px; border-left: 1px solid gray ; border-right: 1px solid gray ; text-align: center;\" >\n                <h4>GST INVOICE</h4>\n              </div>\n              <div class=\"item3 col-sm-4\" style=\"padding-top: 5px; padding-bottom: 5px;\">\n                Invoice No. : <strong>NU{{ bill?.invoiceId }} </strong><br>\n                    Date : {{ paymentDate | amDateFormat: \"l\" }}\n              </div>\n            </div>\n\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>S. No.</th>\n                  <th>Product Name</th>\n                  <th>Packing</th>\n                  <th>Expiry</th>\n                  <th>Quantity</th>\n                  <th>Rate</th>\n                  <th>GST</th>\n                  <th>Amount</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let item of items; let i = index\">\n                  <td>{{ i + 1 }}</td>\n                  <td>{{ item?.medicine }}</td>\n                  <td>{{ item?.pcaking }}</td>\n                  <td>{{ item?.expiry | amDateFormat: \"MMM YYYY\" }}</td>\n                  <td>{{ item?.orderQuantity }}</td>\n                  <td>{{ item?.rate }}</td>\n                  <td>{{bill?.gstRate}} %</td>\n                  <td>{{ item?.total | number: \"2.2-2\" | currency: \"INR\" }}</td>\n                </tr>\n              </tbody>\n            </table>\n            <div class=\"row\" style=\"border: 1px solid gray; margin: 1px; margin-top: 0px;\">\n              <div class=\"col-sm-6 text-left\">\n                <p >\n                  <strong>\n                    Terms & Conditions\n                  </strong><br />\n                  All Disputed Subjected to Ashta jurisdiction <br/>\n                  A/C No. : 566575757575<br/>\n                  IFSC Code : CN3425562334, Canara Bank\n              \n                </p>\n              </div>\n              <div class=\"col-sm-6\">\n                <table class=\"table\" style=\"margin: 0px; padding: 0px;\">\n                  <thead>\n                    <tr>\n                      <th>Sub Total</th>\n                      <th>\n                        {{ bill?.subTotal | number: \"2.2-2\" | currency: \"INR\" }}\n                      </th>\n                    </tr>\n                    <tr>\n                      <th>GST @ {{ bill?.gstRate }} %</th>\n                      <th>\n                        {{ bill?.gstAmount | number: \"2.2-2\" | currency: \"INR\" }}\n                      </th>\n                    </tr>\n                    <tr *ngIf=\"bill?.discount\" >\n                      <th>Discount</th>\n                      <th>\n                        {{ bill?.discount | number: \"2.2-2\" | currency: \"INR\" }}\n                      </th>\n                    </tr>\n                    <tr>\n                      <th>Grand Total</th>\n                      <th>\n                        {{ bill?.grandTotal | number: \"2.2-2\" | currency: \"INR\" }}\n                      </th>\n                    </tr>\n                    <tr>\n                      <th>Paid Amount</th>\n                      <th>\n                        {{ bill?.paidAmount | number: \"2.2-2\" | currency: \"INR\" }}\n                      </th>\n                    </tr>\n                    <tr *ngIf=\"bill?.dueAmount\">\n                      <th>Due Amount</th>\n                      <th>\n                        {{ bill?.dueAmount | number: \"2.2-2\" | currency: \"INR\" }}\n                      </th>\n                    </tr>\n                  </thead>\n                </table>\n              </div>\n   \n              \n            </div>\n\n\n            <div class=\"row\">\n\n\n            </div>\n            <span>This is an auto generated invoice no signature required</span>\n            <div class=\"print\">\n              <button (click)=\"printBill()\">print</button>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"footer\">Copyright © Nutan Pharma</div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "lm8q":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/containers/default-layout/default-layout.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header\n  [navbarBrandRouterLink]=\"['/dashboard']\"\n  [fixed]=\"true\"\n  [sidebarToggler]=\"'lg'\">\n</app-header>\n<div class=\"app-body\">\n  <app-sidebar #appSidebar [fixed]=\"true\" [display]=\"'lg'\" [minimized]=\"sidebarMinimized\" (minimizedChange)=\"toggleMinimize($event)\">\n    <app-sidebar-nav [navItems]=\"navItems\" [perfectScrollbar] [disabled]=\"appSidebar.minimized\"></app-sidebar-nav>\n  </app-sidebar>\n  <!-- Main content -->\n  <main class=\"main\">\n\n    <div class=\"container-fluid\">\n      <router-outlet></router-outlet>\n    </div><!-- /.container-fluid -->\n  </main>\n</div>\n\n");

/***/ }),

/***/ "nAJl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/error/404.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app flex-row align-items-center\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-md-6\">\n        <div class=\"clearfix\">\n          <h1 class=\"float-left display-3 mr-4\">404</h1>\n          <h4 class=\"pt-3\">Oops! You're lost.</h4>\n          <p class=\"text-muted\">The page you are looking for was not found.</p>\n        </div>\n        <div class=\"input-prepend input-group\">\n          <div class=\"input-group-prepend\">\n            <span class=\"input-group-text\"><i class=\"fa fa-search\"></i></span>\n          </div>\n          <input id=\"prependedInput\" class=\"form-control\" size=\"16\" type=\"text\" placeholder=\"What are you looking for?\">\n          <span class=\"input-group-append\">\n            <button class=\"btn btn-info\" type=\"button\">Search</button>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "nSew":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"app-body\">\n  <main class=\"main d-flex align-items-center\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-8 mx-auto\">\n          <div class=\"card-group\">\n            <div class=\"card p-4\">\n              <div class=\"card-body\">\n                <form>\n                  <h1>Login</h1>\n                  <p class=\"text-muted\">Sign In to your account</p>\n                  <div class=\"input-group mb-3\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-user\"></i></span>\n                    </div>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" autocomplete=\"username\" required>\n                  </div>\n                  <div class=\"input-group mb-4\">\n                    <div class=\"input-group-prepend\">\n                      <span class=\"input-group-text\"><i class=\"icon-lock\"></i></span>\n                    </div>\n                    <input type=\"password\" class=\"form-control\" placeholder=\"Password\" autocomplete=\"current-password\" required>\n                  </div>\n                  <div class=\"row\">\n                    <div class=\"col-6\">\n                      <button type=\"button\" class=\"btn btn-primary px-4\">Login</button>\n                    </div>\n                    <div class=\"col-6 text-right\">\n                      <button type=\"button\" class=\"btn btn-link px-0\">Forgot password?</button>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </div>\n            <div class=\"card text-white bg-primary py-5 d-md-down-none\" style=\"width:44%\">\n              <div class=\"card-body text-center\">\n                <div>\n                  <h2>Sign up</h2>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>\n                  <button type=\"button\" class=\"btn btn-primary active mt-3\">Register Now!</button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n</div>\n");

/***/ }),

/***/ "vmt5":
/*!*******************************************!*\
  !*** ./src/app/services/bills.service.ts ***!
  \*******************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let BillService = class BillService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    getOrders(id) {
        return this.http.get(`${this.apiUrl}api/c/orders/${id}`);
    }
};
BillService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
BillService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], BillService);



/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"], {
    useJit: true,
    preserveWhitespaces: true
})
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map