import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-color',
  templateUrl: './new-color.component.html',
  styleUrls: ['./new-color.component.css']
})
export class NewColorComponent implements OnInit {
  power: string = "ON";
  color: string = "red";
  constructor() { 
    this.power="OFF";
    this.color="red";
  }
  onClick(){
    if(this.power == "OFF"){
      this.power = "ON";
      this.color="green";
    }else{
      this.power ="OFF";
      this.color="red";
    }
  }
  ngOnInit() {
  }

}
