import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TestComponent} from "./core/components/test/test.component";
import {LoginComponent} from "./auth/components/login/login.component";
import {SignupComponent} from "./auth/components/signup/signup.component";
import {HomeComponent} from "./core/components/home/home.component";
import {ContactComponent} from "./contact/components/contact/contact.component";
import {AuthGuard} from "./auth/service/auth.guard";

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

  },
  {
    path:'contact',
    component: ContactComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
