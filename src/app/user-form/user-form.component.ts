import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  // properties
  componentTitle: string = 'Register New User';
  userName: string;
  personalInfoShown: boolean = true;

  userModel: User = new User();

  // props password validation
  arePasswordEqual: boolean = true;
  secondPassword: string;

  // constructor
  // this its automatically called when the userFormmComponent its created
  // comonly used to initialize properties in the class
  constructor() {
    console.log("I'm the UserFormComponent constructor");

    // example of working with classes
    /*
    var aUser = new User(
      'myUser',
      'sinzunza@sdgku.com',
      'pass123',
      'Ben',
      'Castillo'
    );

    // accesing an attribute of the object
    console.log(aUser.email);

    // executing a method of the object
    aUser.sayHello();
    */
  }

  // angular component lifecycle
  // this its automatically called once the component fish loading
  ngOnInit() {
    console.log("I'm the ngOnInit for UserFormComponent");
  }

  // methods / functions

  save() {
    this.validatePassword();

    console.log(this.userModel);

    // the this.userModel object its ready to be saved/ sent to a server
  }

  validatePassword() {
    var pass1 = this.userModel.password;
    var pass2 = this.secondPassword;
    if (pass1 != pass2) this.arePasswordEqual = false;
    else this.arePasswordEqual = true;

    console.log(this.arePasswordEqual);
  }

  hide() {
    this.personalInfoShown = false;
  }

  show() {
    this.personalInfoShown = true;
  }
}
