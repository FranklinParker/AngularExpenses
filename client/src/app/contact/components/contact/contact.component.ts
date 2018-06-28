import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";
import {Contact} from "../../model/contact";
import {ContactService} from "../../service/contact.service";

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
  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  /**
   * save a contact
   *
   * @param {NgForm} form
   * @returns {Promise<void>}
   */
  async onSubmit(form: NgForm){
    await this.contactService.saveContact(this.contact);
  }

}
