import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {map} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {RegistrationModel} from "../model/registration-model";
import {LoggedInUser} from "../model/loggedInUser";
import {LoginResult} from "../model/loginResult";
import {BehaviorSubject, Observable} from "rxjs/index";



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedInUserSubject = new BehaviorSubject<LoggedInUser>(null);


  private registerUrl = environment.apiUrl + 'register';
  private loginUrl = environment.apiUrl + 'login';


  constructor(private http: HttpClient) {
  }


  /**
   *
   *
   * @returns {Observable<LoggedInUser>}
   */
  getUserLoggedInUserObservable(): Observable<LoggedInUser>{
    return this.loggedInUserSubject.asObservable();
  }

  logout(){
    localStorage.clear();
    this.loggedInUserSubject.next(null);
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
      const result = await this.http.post<LoginResult>(this.loginUrl, body)
        .pipe(map((result: LoginResult) => {
          console.log('loginResult', result);
          if (result.success) {
            const mapResult: { success: boolean, token: string, user: LoggedInUser } = {
              success: true,
              token: result.token,
              user: new LoggedInUser(result.record._id,
                result.record.firstName,
                result.record.lastName,
                result.record.email)
            };
            return mapResult;
          }
          return result;
        })).toPromise();
      if (result.success) {
        this.setTokenUser(result);
        this.loggedInUserSubject.next(result['user']);
      }
      return result;
    } catch (e) {
      return {
        success: false,
        error: e
      };

    }
  }

  /**
   *
   *
   * @param {{token: string; user: LoggedInUser}} result
   */
  private setTokenUser(result) {
    localStorage.setItem('loggedInUser', JSON.stringify(result.user));
    localStorage.setItem('token', result.token);
  }

  /**
   * get loggedInUser from local storage
   *
   * @returns {LoggedInUser}
   */

  getUserLoggedInUser(): LoggedInUser{
    const loggedInUserStr = localStorage.getItem('loggedInUser');
    if(loggedInUserStr){
      const loggedInUser:LoggedInUser = JSON.parse(loggedInUserStr);
      return loggedInUser;
    }else{
      return null;
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
