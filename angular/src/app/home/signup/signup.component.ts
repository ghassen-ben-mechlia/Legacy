import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  name: string;
  email : string;
  password : string;


  constructor() {}

  ngOnInit(): void {
  }
onSubmit(form: NgForm){
 console.log(form.value)
}

}