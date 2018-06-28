import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contact} from "../../model/contact";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: Contact ={
    firstName: null,
    lastName: null,
    email: null,
    phone: null
  };
  constructor() { }

  ngOnInit() {
  }

  async onSubmit(form: NgForm){

  }

}
