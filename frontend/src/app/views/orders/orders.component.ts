import { Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { Response } from "../../interfaces/response";
import { MedicineService } from "../../services/medicine.service";
import { OrdersService } from "../../services/orders.service";

@Component({
  selector: "app-orders",
  templateUrl: "./orders.component.html",
  styleUrls: ["./orders.component.scss"],
})
export class OrdersComponent implements OnInit, OnDestroy {
  medicines = [];
  orders = [];
  public orderForm: FormGroup;
  public submitted = false;
  @ViewChild("orderDateIN") _orderDate;
  constructor(
    private medServ: MedicineService,
    private orderserv: OrdersService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getMedicines();
    this.getOrders();
    setTimeout(() => {
      console.log('this._orderDate: ', this._orderDate);
      this._orderDate.nativeElement.valueAsDate = new Date();
    }, 1000);
  }

  getMedicines() {
    this.medServ.getMedicines().subscribe((res: Response) => {
      console.log("res: >>>>>>>>>>>>", res);
      this.medicines = res.data;
      console.log(this.medicines);
    });
  }
  getOrders() {
    this.orderserv.getOrders().subscribe((res: Response) => {
      this.orders = res.data;
      console.log(this.orders);
    });
  }
  deleteOrder(id) {
    this.orderserv.deleteOrder(id).subscribe((resp) => {
      this.getOrders();
    });
  }
  medicine;
  rate;
  quantity;
  orderQuantity;
  // total1;
  subTotal = 0;
  discount;
  gstRate;
  // grandTotal;
  gstAmount;
  disAmount;
  paidAmount;
  listId = 1;
  paymentMethod;
  orderedProduct = [];
  // gstTotal;
  orderDate;
  customerName;
  customerContact;

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

  // onQuant(ev) {
  //   this.orderQuantity = ev.target.value;
  //   // this.total = this.rate * this.orderQuantity;
  // }

  localMedicine = {};
  orderList = [];

  @ViewChild("select1") select1;
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

  ngOnDestroy() {}

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
}
