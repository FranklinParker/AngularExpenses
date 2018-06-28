import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ContactComponent} from './components/contact/contact.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    ContactComponent
  ],
  exports: [
    ContactComponent
  ]
})
export class ContactModule {
}
