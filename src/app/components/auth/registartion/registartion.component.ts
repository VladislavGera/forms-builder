import { Component, OnInit } from '@angular/core';
import { ApiUserService } from 'src/app/shared/user/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registartion',
  templateUrl: './registartion.component.html',
  styleUrls: ['../../../app.component.css'],
})
export class RegistartionComponent implements OnInit {
  title: string = 'Registration';
  userRegistration!: (args: any) => void;
  saveUser!: (args: any) => void;

  constructor(private api: ApiUserService, private router: Router) {}

  ngOnInit() {
    this.userRegistration = (data: any) => {
      this.api.apiRegisterUser(data).subscribe((res) => {
        // console.log(res, 'res');
        this.router.navigate(['login']);
      });
    };
  }
}
