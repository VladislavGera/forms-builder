import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { inputValueState } from 'src/app/models/input.model';

@Injectable({
  providedIn: 'root',
})
export class ApiUserService {
  constructor(private http: HttpClient) {}

  apiLoginUser(data: inputValueState) {
    return this.http.post<any>('http://localhost:8000/auth/login', data).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  apiRegisterUser(data: inputValueState) {
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

    const id = localData.user.id;
    const token = localData.token;

    return this.http
      .get<any>(`http://localhost:8000/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  postElement(data: any) {
    const localStorageStringData: any = localStorage.getItem('user');

    const localData = JSON.parse(localStorageStringData);

    // todo data element
    const token = localData.token;

    return this.http
      .post<any>(`http://localhost:8000/elements`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  deleteElement(id: string) {
    const localStorageStringData: any = localStorage.getItem('user');

    const localData = JSON.parse(localStorageStringData);

    // todo data element
    const token = localData.token;

    return this.http
      .delete<any>(`http://localhost:8000/elements/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  getElement() {
    const localStorageStringData: any = localStorage.getItem('user');

    const localData = JSON.parse(localStorageStringData);

    // todo data element
    const token = localData.token;

    return this.http
      .get<any>(`http://localhost:8000/elements`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  updateElement(data: any) {
    const localStorageStringData: any = localStorage.getItem('user');

    const localData = JSON.parse(localStorageStringData);

    // todo data element
    const token = localData.token;

    return this.http
      .put<any>(`http://localhost:8000/elements`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
