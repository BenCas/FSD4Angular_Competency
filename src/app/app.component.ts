import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fsdi 204 angular';
  userName: string = 'Sergio Inzunza';
  counter = 1;

  sayHello() {
    console.log("I'm a ts method");
    console.log(this.userName);
  }

  increase() {
    console.log('increase called');
    this.counter += 1;
  }
}
