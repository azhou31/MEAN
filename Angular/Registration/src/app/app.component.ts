import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    firstName:'',
    lastName:'',
    email:'',
    password:'',
    address:'',
    unit:'',
    city:''

  }
  onSubmit(){
    console.log("submit");
    this.user = {
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      address:'',
      unit:'',
      city:''
    }
  }
}
