import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directory-list';
  name = 'ninja';
  ninja = {
    name: "Shubham",
    belt: "Black, Red, Gold, All the the fucking belts!!!"
  }
yell(e:any){
  alert("I am yelling!")
}

}
  