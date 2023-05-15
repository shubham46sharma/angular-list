import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent {

  ninjas = [
    {name: "Shubham", belt: "Black"},
    {name: "Rishabh", belt: "Red"},
    {name: "Raghav", belt: "Blue"}
  ]
  name: string;

  constructor(private route: ActivatedRoute){
    this.name = route.snapshot.params['name'];   //adding dynamic routing based on name value in the url
  }
}
