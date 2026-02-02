import { Component } from '@angular/core';
export class LoginComponent {
  showPassword = false;

  togglePassword(){
    this.showPassword = !this.showPassword;
  }
}

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

}
