import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponentStudent implements OnInit {
  userEmail : String;
  userPassword : String;
  constructor(private authService : AuthService, private router : Router) { }

  ngOnInit() {
  }
  signin(){
    this.authService.validate(this.userEmail, this.userPassword)
    .then((response) => {
      this.authService.setUserInfo({'user' : response['user']});
      this.router.navigate(['home']);

    })
  }
}
