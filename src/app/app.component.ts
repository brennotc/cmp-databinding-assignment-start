import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  evenComponents: number[] = [];
  oddComponents: number[] = [];

  onGenerateComponent(id: number) {
    if(id % 2 == 0) {
      this.evenComponents.push(id);
    } else {
      this.oddComponents.push(id);
    }
  }
}
