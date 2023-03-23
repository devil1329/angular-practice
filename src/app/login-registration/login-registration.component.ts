import { Component } from '@angular/core';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-login-registration',
  templateUrl: './login-registration.component.html',
  styleUrls: ['./login-registration.component.css']
})
export class LoginRegistrationComponent {
  constructor(private restService : RestService) {}

  loginStatus! : string;
  username! : string;
  password! : string;

  loginObj = {
    username : this.username,
    password : this.password
  }
  login(){
    this.restService.login(this.loginObj).subscribe({
      next : (data : string) => this.loginStatus = data,
      error : (err) => console.log(err)
    })
  }
}
