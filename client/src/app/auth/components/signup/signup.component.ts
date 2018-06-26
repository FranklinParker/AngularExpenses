import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {RegistrationModel} from "../../model/registration-model";

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

  constructor() {
  }

  ngOnInit() {
  }


  onSignup(form: NgForm) {

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

}
