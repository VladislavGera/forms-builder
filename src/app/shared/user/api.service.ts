import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
  constructor(private http: HttpClient) {}

  apiLoginUser(data: any) {
    return this.http.post<any>('http://localhost:3000/login', data).pipe(
      map((res: any) => {
        // return res;
        // you are registred
        // error heandler
        return res;
      })
    );
  }
  apiRegisterUser(data: any) {
    return this.http.post<any>('http://localhost:3000/register', data).pipe(
      map((res: any) => {
        // return res;
        // you are registred
        // error heandler
      })
    );
  }
}