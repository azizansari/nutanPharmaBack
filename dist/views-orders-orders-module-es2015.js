(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-orders-orders-module"],{

/***/ "MOE4":
/*!********************************************!*\
  !*** ./src/app/services/orders.service.ts ***!
  \********************************************/
/*! exports provided: OrdersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersService", function() { return OrdersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "AytR");




let OrdersService = class OrdersService {
    constructor(http) {
        this.http = http;
        this.apiUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl;
    }
    postOrders(payload) {
        return this.http.post(`${this.apiUrl}api/c/orders/create`, payload);
    }
    getOrders() {
        return this.http.get(`${this.apiUrl}api/c/orders`);
    }
    deleteOrder(id) {
        return this.http.delete(`${this.apiUrl}api/c/orders/${id}`);
    }
};
OrdersService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
OrdersService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], OrdersService);



/***/ }),

/***/ "N8wx":
/*!**************************************************!*\
  !*** ./src/app/views/orders/orders.component.ts ***!
  \**************************************************/
/*! exports provided: OrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersComponent", function() { return OrdersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./orders.component.html */ "SLuX");
/* harmony import */ var _orders_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component.scss */ "UQSn");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_medicine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/medicine.service */ "gHm9");
/* harmony import */ var _services_orders_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/orders.service */ "MOE4");







let OrdersComponent = class OrdersComponent {
    constructor(medServ, orderserv, router) {
        this.medServ = medServ;
        this.orderserv = orderserv;
        this.router = router;
        this.medicines = [];
        this.orders = [];
        this.submitted = false;
        // total1;
        this.subTotal = 0;
        this.listId = 1;
        this.orderedProduct = [];
        // onQuant(ev) {
        //   this.orderQuantity = ev.target.value;
        //   // this.total = this.rate * this.orderQuantity;
        // }
        this.localMedicine = {};
        this.orderList = [];
    }
    ngOnInit() {
        this.getMedicines();
        this.getOrders();
        setTimeout(() => {
            console.log('this._orderDate: ', this._orderDate);
            this._orderDate.nativeElement.valueAsDate = new Date();
        }, 1000);
    }
    getMedicines() {
        this.medServ.getMedicines().subscribe((res) => {
            console.log("res: >>>>>>>>>>>>", res);
            this.medicines = res.data;
            console.log(this.medicines);
        });
    }
    getOrders() {
        this.orderserv.getOrders().subscribe((res) => {
            this.orders = res.data;
            console.log(this.orders);
        });
    }
    deleteOrder(id) {
        this.orderserv.deleteOrder(id).subscribe((resp) => {
            this.getOrders();
        });
    }
    onChange(e) {
        console.log(e.target.value);
        this.medicine = this.medicines.find((med) => med._id == e.target.value);
        console.log("this.medicine: ", this.medicine);
        this.rate = this.medicine.rate;
        this.quantity = this.medicine.quantity;
        console.log(this.medicine.rate);
    }
    get total() {
        const val = this.rate * this.orderQuantity;
        return isNaN(val) ? "" : val;
    }
    get gstTotal() {
        const val = 0.01 * this.gstRate * this.subTotal;
        this.gstAmount = isNaN(val) ? "" : val;
        return this.subTotal + this.gstAmount;
    }
    get grandTotal() {
        const val = 0.01 * this.discount * this.subTotal;
        this.disAmount = isNaN(val) ? "" : val;
        const gt = this.subTotal + this.gstAmount - this.disAmount;
        return gt;
    }
    get dueAmount() {
        const val = this.grandTotal - this.paidAmount;
        return isNaN(val) ? "" : val;
    }
    onAdd() {
        this.localMedicine = {
            brand: this.medicine.brand,
            batchNo: this.medicine.batchNo,
            expiry: this.medicine.expiry,
            pcaking: this.medicine.packing,
            medicine: this.medicine.productName,
            rate: this.rate,
            orderQuantity: this.orderQuantity,
            total: this.total,
            id: this.listId,
        };
        this.orderList.push(this.localMedicine);
        console.log(this.orderList);
        this.rate = "";
        this.quantity = "";
        this.orderQuantity = "";
        this.subTotal =
            this.subTotal + this.orderList[this.orderList.length - 1].total;
        console.log(this.subTotal);
        this.select1.nativeElement.value = "0";
        this.listId = this.listId + 1;
        this.subTotal = 0;
        this.orderTotal();
    }
    orderTotal() {
        for (let i = 0; i < this.orderList.length; i++) {
            if (this.orderList[i].total) {
                this.subTotal = this.subTotal + this.orderList[i].total;
            }
        }
        // this.grandTotal = this.subTotal;
        // this.gstTotal = this.subTotal;
    }
    removeItem(id) {
        this.orderList = this.orderList.filter((orderitem) => id != orderitem.id);
        this.subTotal = 0;
        this.orderTotal();
    }
    submit() {
        console.log(this.formValues);
        this.orderserv.postOrders(this.formValues).subscribe((resp) => {
            this.getOrders();
        });
    }
    ngOnDestroy() { }
    reSet() {
        this.orderForm.reset();
    }
    toGetPrint(id) {
        this.router.navigate([]).then((result) => {
            window.open(`#/orders/${id}`, "_blank");
        });
    }
    get formValues() {
        return {
            orderDate: this.orderDate,
            customerName: this.customerName,
            customerContact: this.customerContact,
            orderedItem: this.orderList,
            subTotal: this.subTotal,
            gstRate: this.gstRate,
            gstAmount: this.gstAmount,
            discount: this.disAmount,
            dueAmount: this.dueAmount,
            paidAmount: this.paidAmount,
            grandTotal: this.grandTotal,
            paymentType: this.paymentMethod,
        };
    }
};
OrdersComponent.ctorParameters = () => [
    { type: _services_medicine_service__WEBPACK_IMPORTED_MODULE_5__["MedicineService"] },
    { type: _services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
OrdersComponent.propDecorators = {
    _orderDate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["orderDateIN",] }],
    select1: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ["select1",] }]
};
OrdersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-orders",
        template: _raw_loader_orders_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_orders_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_medicine_service__WEBPACK_IMPORTED_MODULE_5__["MedicineService"],
        _services_orders_service__WEBPACK_IMPORTED_MODULE_6__["OrdersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], OrdersComponent);



/***/ }),

/***/ "SLuX":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/orders/orders.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div\n  bsModal\n  #largeModal=\"bs-modal\"\n  class=\"modal fade\"\n  tabindex=\"-1\"\n  role=\"dialog\"\n  aria-labelledby=\"myModalLabel\"\n  aria-hidden=\"true\"\n>\n  <div class=\"modal-dialog modal-lg\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header card-header\">\n        <h4 class=\"modal-title\">New Order</h4>\n        <button\n          type=\"button\"\n          class=\"close\"\n          (click)=\"largeModal.hide()\"\n          aria-label=\"Close\"\n        >\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-3\">\n            <label for=\"date-input\">Order Date</label>\n            <input\n              #orderDateIN\n              class=\"form-control\"\n              id=\"date-input\"\n              type=\"date\"\n              name=\"date-input\"\n              placeholder=\"date\"\n              [(ngModel)]=\"orderDate\"\n            />\n          </div>\n        </div>\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"form-group col-md-5\">\n            <label for=\"cutomerName\">Customer Name</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Customer Name\"\n              [(ngModel)]=\"customerName\"\n            />\n          </div>\n          <div class=\"form-group col-md-5\">\n            <label for=\"customerContact\">Contact</label>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              id=\"customerContact\"\n              placeholder=\"Contact\"\n              [(ngModel)]=\"customerContact\"\n            />\n          </div>\n        </div>\n        <div class=\"table\" style=\"border-bottom: 2px solid grey\">\n          <table class=\"table table-striped\">\n            <thead>\n              <tr>\n                <th>Product</th>\n                <th>Rate</th>\n                <th>Available Quantity</th>\n                <th>Quantity</th>\n                <th>Total</th>\n                <th>Add</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr>\n                <td>\n                  <div class=\"form-group\">\n                    <!-- <ng-select\n                    #select1\n                    name=\"select1\" \n                    class=\"form-control\"\n                    (change)=\"onChange($event)\"\n                    >\n                      <ng-option  *ngFor=\"let medicine of medicines\"  [value]=\"medicine?._id\">\n                        {{ medicine?.productName }}\n                      </ng-option>\n                   </ng-select> -->\n\n                    <select\n                      #select1\n                      name=\"select1\"\n                      class=\"form-control\"\n                      (change)=\"onChange($event)\"\n                    >\n                      <option value=\"0\">Select Medicine</option>\n                      <option\n                        [value]=\"medicine?._id\"\n                        *ngFor=\"let medicine of medicines\"\n                      >\n                        {{ medicine?.productName }}\n                      </option>\n                    </select>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      disabled\n                      [(ngModel)]=\"rate\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      disabled\n                      [(ngModel)]=\"quantity\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"orderQuantity\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <input\n                      type=\"text\"\n                      class=\"form-control\"\n                      disabled\n                      [(ngModel)]=\"total\"\n                    />\n                  </div>\n                </td>\n                <td>\n                  <Button class=\"btn btn-success\" (click)=\"onAdd()\"\n                    ><span class=\"cil-plus\"></span\n                  ></Button>\n                </td>\n              </tr>\n              <tr *ngFor=\"let orderitem of orderList\">\n                <td>{{ orderitem?.medicine }}</td>\n                <td>{{ orderitem?.rate }}</td>\n                <td></td>\n                <td>{{ orderitem?.orderQuantity }}</td>\n                <td>{{ orderitem?.total }}</td>\n                <td>\n                  <button\n                    class=\"btn btn-danger\"\n                    (click)=\"removeItem(orderitem?.id)\"\n                  >\n                    <span class=\"cil-trash\"></span>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n        <div class=\"form-group row\" style=\"margin: 20px\">\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"subtotal\">Sub Total</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"subtotal\"\n                disabled\n                [(ngModel)]=\"subTotal\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"gst\">GST</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"gst\"\n                placeholder=\"GST %\"\n                [(ngModel)]=\"gstRate\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"total\">Total</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"total\"\n                disabled\n                [(ngModel)]=\"gstTotal\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"discount\">Discount (in %)</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"discount\"\n                placeholder=\"Discount %\"\n                [(ngModel)]=\"discount\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"grandtotal\">Grand Total</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"grangtotal\"\n                disabled\n                [(ngModel)]=\"grandTotal\"\n              />\n            </div>\n          </div>\n          <div class=\"col-md-5\">\n            <div class=\"form-group\">\n              <label for=\"paidamount\">Paid Amount</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"paidamount\"\n                placeholder=\"Amount\"\n                [(ngModel)]=\"paidAmount\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"dueamount\">Due Amount</label>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                id=\"dueamount\"\n                disabled\n                [(ngModel)]=\"dueAmount\"\n              />\n            </div>\n            <div class=\"form-group\">\n              <label for=\"paymentType\">Payment Type</label>\n              <select\n                id=\"select1\"\n                name=\"select1\"\n                class=\"form-control\"\n                [(ngModel)]=\"paymentMethod\"\n              >\n                <option value=\"0\">Please select</option>\n                <option value=\"Cash\">Cash</option>\n                <option value=\"Card\">Card</option>\n                <option value=\"UPI\">UPI</option>\n              </select>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n        <button\n          type=\"submit\"\n          class=\"btn btn-primary col-md-3\"\n          (click)=\"submit()\"\n        >\n          <i class=\"fa fa-dot-circle-o\"></i> Submit\n        </button>\n        <button type=\"reset\" class=\"btn btn-danger col-md-3\">\n          <i class=\"fa fa-ban\"></i> Reset\n        </button>\n        <button\n          type=\"button\"\n          class=\"btn btn-secondary col-md-3\"\n          (click)=\"largeModal.hide()\"\n        >\n          Close\n        </button>\n      </div>\n    </div>\n    <!-- /.modal-content -->\n  </div>\n  <!-- /.modal-dialog -->\n</div>\n<!-- /.modal -->\n\n<div class=\"card\">\n  <div class=\"card-header\">\n    <h6>Order datails</h6>\n  </div>\n  <div class=\"card-body\">\n    <div class=\"header row\" style=\"margin-bottom: 20px\">\n      <div class=\"input-group col-md-3\">\n        <input\n          type=\"text\"\n          id=\"input1-group2\"\n          name=\"input1-group2\"\n          class=\"form-control\"\n          placeholder=\"Search Orders\"\n          [(ngModel)]=\"term\"\n        />\n        <span class=\"input-group-append\">\n          <button type=\"button\" class=\"btn btn-primary btn-pill\">\n            <i class=\"fa fa-search\"></i> Search\n          </button>\n        </span>\n      </div>\n      <button\n        type=\"button\"\n        class=\"btn btn-pill btn-secondary mr-1 col-md-3\"\n        data-toggle=\"modal\"\n        (click)=\"largeModal.show()\"\n      >\n        New Order\n      </button>\n    </div>\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th>S.No.</th>\n          <th>Invoice Id</th>\n          <th>Order Date</th>\n          <th>Customer Name</th>\n          <th>Contact</th>\n          <th>Payment status</th>\n          <th>update</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let order of orders | filter:term; let i = index\">\n          <td>{{ i + 1 }}</td>\n          <td>{{order?.invoiceId}}</td>\n          <td>{{ order?.createdAt | amDateFormat: \"DD/MM/YYYY\" }}</td>\n          <td>{{ order?.customerName }}</td>\n          <td>{{ order?.customerContact }}</td>\n          <td>{{ order?.paymentType }}</td>\n          <td>\n            <div class=\"update row\">\n              <button\n              class=\"btn btn-sm btn-secondary btn-pill\"\n              (click)=\"toGetPrint(order?._id)\"\n            >\n              Print\n            </button>\n              <button\n                class=\"btn btn-sm btn-danger btn-pill\"\n                (click)=\"deleteOrder(order?._id)\"\n              >\n                <span class=\"cil-trash\"></span>\n              </button>\n\n            </div>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n  <div class=\"card-footer\">\n    <ul class=\"pagination\">\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Prev</a></li>\n      <li class=\"page-item active\">\n        <a class=\"page-link\" href=\"#\">1</a>\n      </li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">Next</a></li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "UQSn":
/*!****************************************************!*\
  !*** ./src/app/views/orders/orders.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvcmRlcnMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "lpX+":
/*!***********************************************!*\
  !*** ./src/app/views/orders/orders.module.ts ***!
  \***********************************************/
/*! exports provided: OrdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersModule", function() { return OrdersModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orders.component */ "N8wx");
/* harmony import */ var _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders-routing.module */ "zFpL");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-bootstrap/modal */ "K3ix");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-moment */ "5eXZ");
/* harmony import */ var angular2_moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-search-filter */ "cZdB");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");











let OrdersModule = class OrdersModule {
};
OrdersModule.propDecorators = {
    largeModal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['largeModal',] }]
};
OrdersModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _orders_routing_module__WEBPACK_IMPORTED_MODULE_3__["OrdersRoutingModule"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_4__["ModalModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            angular2_moment__WEBPACK_IMPORTED_MODULE_8__["MomentModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_9__["Ng2SearchPipeModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_10__["NgSelectModule"]
        ],
        declarations: [_orders_component__WEBPACK_IMPORTED_MODULE_2__["OrdersComponent"]]
    })
], OrdersModule);



/***/ }),

/***/ "zFpL":
/*!*******************************************************!*\
  !*** ./src/app/views/orders/orders-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: OrdersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrdersRoutingModule", function() { return OrdersRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _orders_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orders.component */ "N8wx");




const routes = [
    {
        path: '',
        component: _orders_component__WEBPACK_IMPORTED_MODULE_3__["OrdersComponent"],
        data: {
            title: 'Orders'
        }
    }
];
let OrdersRoutingModule = class OrdersRoutingModule {
};
OrdersRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], OrdersRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-orders-orders-module-es2015.js.map