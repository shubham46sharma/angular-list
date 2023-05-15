import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  homeTitle = "Welcome to the Directory App!";
  @Input() ninja :any;
  
  @Output() onYell = new EventEmitter();


  fireYellEvent(e : any) {
    this.onYell.emit(e);
  }
}


