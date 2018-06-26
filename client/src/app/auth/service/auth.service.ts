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
          console.log('result', result.success);
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
