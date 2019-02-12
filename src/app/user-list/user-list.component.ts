import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users = [];
  todo = {};

  constructor() {
    // add some test users
    this.users.push('user Cero');
    this.users.push('user 1');
    this.users.push('user 2');
    this.users.push('another users');
    this.users.push('last user');
  }

  ngOnInit() {}

  addNew() {
    console.log(this.todo);
    this.users.push('Dummy!');
  }
}
