import { NgModule, ViewChild } from '@angular/core';
import { OrdersComponent} from './orders.component';
import { OrdersRoutingModule } from './orders-routing.module';
import { ModalDirective, ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentModule } from 'angular2-moment';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    OrdersRoutingModule,
    ModalModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    Ng2SearchPipeModule,
    NgSelectModule


  ],
  declarations: [ OrdersComponent ]
})
export class OrdersModule { 
  @ViewChild('largeModal') public largeModal: ModalDirective;

}
