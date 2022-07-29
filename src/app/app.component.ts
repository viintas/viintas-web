import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import * as AOS from "aos";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'viintas-web';

  constructor(public router: Router) { }

  ngOnInit(): void {
    /*Animation Scroll*/
    // AOS.init();
  }
}
