import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel : User = new User();


  constructor() { }

  validateLogin(){
    console.log('validating', this.userModel);
    var email = this.userModel.email;
    var pass = this.userModel.password;


    //compare the data with each user

    
  }
  ngOnInit() {
  }

}