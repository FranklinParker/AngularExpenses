import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  getUrl = environment.apiUrl + 'test';
  postUrl = environment.apiUrl + 'testpost';


  constructor(private http: HttpClient) {
  }

  async getData(): Promise<any> {
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

  async postData(data): Promise<any> {

    try {
      const result = await this.http.post<any>(this.postUrl,
        data
      )
        .pipe(map(result => {
          return result;
        })).toPromise();
      return data;
    } catch (e) {
      return {
        success: false,
        error: e.getMessages()
      };

    }
  }

}
