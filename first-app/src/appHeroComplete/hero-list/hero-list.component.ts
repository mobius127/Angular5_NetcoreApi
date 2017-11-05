import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeroService } from '../Services/hero.service';
import { Hero } from '../Entities/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService, private router: Router) {}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  goToDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
