import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-app',
  templateUrl: './color-app.component.html',
  styleUrls: ['./color-app.component.css']
})
export class ColorAppComponent implements OnInit {

  constructor() { }

  public Header:string="color tool  ";
  public Colors:string[]=[
    "red","white","orange","blue","green",
  ];
  public newColor:string="";
  public addColor(){
    this.Colors.push(this.newColor);
  }

  ngOnInit(): void {
  }

}
