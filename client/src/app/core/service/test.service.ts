import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class TestService {
  testUrl = environment.apiUrl + 'test';

  constructor(private http: HttpClient) {
  }

  async getData(): Promise<any> {
    try {
      const data = await this.http.get<{ data: any }>(this.testUrl
        + '?name=test')
        .pipe(map(result => {
          return result.data;
        })).toPromise();
      return data;
    } catch (e) {
      console.log('err', e);
      return {
        success: false,
        error: e.getMessages()
      };

    }
  }
}
