import { Injectable } from '@angular/core';
import { Hero } from './../NgEntity/hero';
import { HEROES } from './../Mocks/heroes-mock.constant';

@Injectable()
export class HeroService {
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
