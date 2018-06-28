import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {Contact} from "../model/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getUrl = environment.apiUrl + 'contact';
  postUrl = environment.apiUrl + 'contact';


  constructor(private http: HttpClient) {
  }

  async getContacts(): Promise<any> {

    const data = await this.http.get<{ success: boolean,records: any }>(this.getUrl
      )
      .pipe(map(result => {
        return result.records;
      })).toPromise();
    return data;



  }

  /**
   *
   * save a contact
   *
   * @param {Contact} contact
   * @returns {Promise<any>}
   */
  async saveContact(contact: Contact): Promise<any> {
    console.log('saving a contact:', contact);
    try {
      const result = await this.http.post<any>(this.postUrl,
        contact
      )
        .pipe(map(result => {
          console.log('contact save result', result);
          return result;
        })).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        error: e.getMessages()
      };

    }
  }
}
