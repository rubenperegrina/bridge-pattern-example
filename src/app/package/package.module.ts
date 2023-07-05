import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryComponent } from './components/delivery/delivery.component';



@NgModule({
  declarations: [
    DeliveryComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DeliveryComponent]
})
export class PackageModule { }
