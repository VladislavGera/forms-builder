import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserState } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
  constructor(private http: HttpClient) {}

  apiLoginUser(data: UserState) {
    return this.http.post<any>('http://localhost:3000/login', data).pipe(
      map(
        (res: any) => {
          console.log(res, 'res');

          // return res;
          // you are registred
          // error heandler
          return res;
        },
        (err: any) => {
          alert(err);
        }
      )
    );
  }
  apiRegisterUser(data: UserState) {
    return this.http.post<any>('http://localhost:3000/register', data).pipe(
      map(() => {
        // return res;
        // you are registred
        // error heandler
      })
    );
  }
}
