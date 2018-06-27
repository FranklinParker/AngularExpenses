import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {RegistrationModel} from "../model/registration-model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private getUrl = environment.apiUrl + 'test';
  private registerUrl = environment.apiUrl + 'register';
  private loginUrl = environment.apiUrl + 'login';


  constructor(private http: HttpClient) {
  }

  private async getData(): Promise<any> {
    try {
      const data = await this.http.get<{ data: any }>(this.getUrl
        + '?name=test')
        .pipe(map(result => {
          return result.data;
        })).toPromise();
      return data;
    } catch (e) {
      return {
        success: false,
        error: e.getMessages()
      };

    }
  }

  /**
   * login
   *
   *
   * @param {string} email
   * @param password
   * @returns {Promise<any>}
   */

  async login(email: string, password) {
    const body = {
      email,
      password
    };
    try {
      const result = await this.http
        .post<{ success: boolean, message?: string, record?: any }>(this.loginUrl,
          body)
        .pipe(map(result => {
          console.log('login data', result);
          return result;
        })).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        error: e
      };

    }
  }

  /**
   * registers a user
   *
   * @param data
   * @returns {Promise<any>}
   */
  async registerUser(data): Promise<any> {

    try {
      const result = await this.http
        .post<{ success: boolean, message?: string, record?: RegistrationModel }>(this.registerUrl, data)
        .pipe(map(result => {
          console.log('registration result', result);
          return result;
        })).toPromise();
      return result;
    } catch (e) {
      return {
        success: false,
        error: e
      };

    }
  }
}
