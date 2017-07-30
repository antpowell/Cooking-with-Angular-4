import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  homeValue = 'Home';
  headings = ['ABOUT', 'CONTACT', 'YOU'];
  constructor() { }

  ngOnInit() {
  }

}
