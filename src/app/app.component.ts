import { Component, Input, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @Input() appSection = 'recipes';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCxPNi5FrclH2Zl0Qa2k_SOC_YL7XrkNk0',
      authDomain: 'angular-course-practice.firebaseapp.com'
    });
  }

  showSection(section: string) {
    this.appSection = section;
  }
}
