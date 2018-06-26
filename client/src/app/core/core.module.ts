import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from "../shared/shared.module";
import { TestComponent } from './components/test/test.component';
import {AppRoutingModule} from "../app-routing.module";
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    TestComponent,
    HeaderComponent,
    SideNavComponent
  ],
  exports: [
    HeaderComponent,
    SideNavComponent,
    TestComponent
  ]
})
export class CoreModule { }
