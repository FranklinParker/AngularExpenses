import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegistrationModel} from "../../model/registration-model";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  isLoading = false;
  passwordMinLength = 8;
  passwordMatch = '';

  registrant: RegistrationModel ={
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  /**
   *  registers the user
   *
   * @param {NgForm} form
   */
  onSignup(form: NgForm) {
    this.authService.registerUser(this.registrant);
  }

  /**
   * checks if passwords match
   *
   *
   * @returns {boolean}
   */
  get passwordsDoNotMatch() {
    if (this.registrant.password.length >= this.passwordMinLength &&
      this.registrant.password !== this.passwordMatch) {
      return true
    } else {
      return false;
    }
  }


  get passwordsMatch() {
    if (this.registrant.password.length >= this.passwordMinLength &&
      this.registrant.password === this.passwordMatch) {
      console.log('this.registrant.password:' + this.registrant.password);
      console.log('this.passwordMatch:' + this.passwordMatch);
      return true
    } else {
      return false;
    }
  }
}
