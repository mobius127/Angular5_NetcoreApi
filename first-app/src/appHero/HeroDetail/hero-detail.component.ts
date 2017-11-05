import { Component, Input } from '@angular/core';
import { Hero } from '../NgEntity/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html'
})
export class HeroComponent {
  @Input() hero: Hero;
}
