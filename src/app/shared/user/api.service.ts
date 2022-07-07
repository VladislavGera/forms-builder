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
    return this.http.post<any>('http://localhost:8000/auth/login', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  apiRegisterUser(data: UserState) {
    return this.http
      .post<any>('http://localhost:8000/auth/register', data)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  authUser() {
    const localStorageStringData: any = localStorage.getItem('user');

    const localData = JSON.parse(localStorageStringData);

    const email = localData.email;
    const token = localData.token;

    return this.http
      .get<any>(`http://localhost:8000/users?email=${email}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
