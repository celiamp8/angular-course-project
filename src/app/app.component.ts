import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() appSection = 'recipes';

  showSection(section: string) {
    this.appSection = section;
  }
}
