import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { ApiUserService } from './api.service';

describe('User login', () => {
  let apiUserService: ApiUserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;
  let USER = {
    id: '1',
    email: 'vheranin@gmail.com',
    password: 'password',
  };
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    apiUserService = new ApiUserService(httpClientSpy);
  });

  describe('user Login and Registartion service', () => {
    it('Login user', (done: DoneFn) => {
      httpClientSpy.post.and.returnValue(of(USER));
      apiUserService.apiLoginUser(USER).subscribe({
        next: (user) => {
          expect(user).toEqual(USER);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });
    it('Registration user', (done: DoneFn) => {
      httpClientSpy.post.and.returnValue(of(USER));
      apiUserService.apiRegisterUser(USER).subscribe({
        next: (user) => {
          expect(user).toEqual(USER);
          done();
        },
        error: () => {
          done.fail;
        },
      });
      expect(httpClientSpy.post).toHaveBeenCalledTimes(1);
    });
  });
//   it('Get user', (done: DoneFn) => {
//     httpClientSpy.get.and.returnValue(of(USER));
//     apiUserService.authUser().subscribe({
//       next: (user) => {
//         expect(user).toEqual(USER);
//         done();
//       },
//       error: () => {
//         done.fail;
//       },
//     });
//     expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
//   });
});