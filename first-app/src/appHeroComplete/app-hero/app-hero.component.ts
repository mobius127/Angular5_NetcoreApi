import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './app-hero.component.html',
})
export class AppHeroComponent implements OnInit {
  title = 'Heroes Application';

  constructor() { }

  ngOnInit() {
  }
}
