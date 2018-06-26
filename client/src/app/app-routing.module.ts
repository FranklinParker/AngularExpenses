import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from "./core/components/test/test.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {SignupComponent} from "./auth/components/signup/signup.component";

const routes: Routes = [
  {
    path: 'test',
    component: TestComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: SignupComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
