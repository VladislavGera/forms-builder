import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/shared/user/api.service';
import { Router } from '@angular/router';
import { UserState } from 'src/app/models/user.model'; 

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class RegistartionComponent implements OnInit {
  title: string = 'Registration';
  userRegistration!: (args: UserState) => void;
  saveUser!: (args: UserState) => void;

  constructor(private api: ApiUserService, private router: Router) {}

  ngOnInit() {
    this.userRegistration = (data: UserState) => {
      this.api.apiRegisterUser(data).subscribe((res) => {
        // console.log(res, 'res');
        this.router.navigate(['login']);
      });
    };
  }
}
