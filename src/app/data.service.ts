
import {User} from './user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //properties 
private userList : User[] = [];

  //constructor

  constructor() { }

//methods
addUser(userObject: User){
  this.userList.push(userObject);

  console.log('the state of the array is,', this.userList);
}

getAllUsers(){
  return this.userList;
}
}