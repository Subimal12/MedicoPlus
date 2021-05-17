import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor() {}

  ngOnInit(){

  }
  myimage1:string="assets/Medicine.jpg";
  myimage2:string="assets/Medicine2.jpg";
  url="./assets/Medicine3.jpg";
}

