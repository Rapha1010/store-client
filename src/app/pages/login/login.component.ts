import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { UserService } from '../../services/UserService';
// import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel: UserModel = new UserModel();

  constructor(private userService : UserService, private router: Router) { 
  }

  ngOnInit(): void {
  }

  onClickSubmit(): void {

    this.userService.signIn(this.userModel.login, this.userModel.password).subscribe(
      {
        next: (data) => {
          this.userModel = data;
          sessionStorage.setItem("token", this.userModel.token);
          this.router.navigate(['/home']);
        }
        ,error: (err) => {
          // this.notifier.notify('error', `status ${err.status} - ${err.error} `);
        }
      });
  }

}
