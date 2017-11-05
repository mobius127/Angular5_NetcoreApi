import { Component, OnInit } from '@angular/core';
import { Hero } from './NgEntity/hero';
import { HeroService } from './Services/hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './app-hero.component.html',
  providers: [HeroService]
})
export class AppHeroComponent implements OnInit {
  title = 'Heroes';
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) {
    // this.heroes = this.heroService.getHeroes();
  }
  ngOnInit(): void {
    this.getHeroes();
  }
  onselect(hero: Hero): void {
    this.selectedHero = hero;
  }
  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}
