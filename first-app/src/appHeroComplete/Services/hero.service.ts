import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from '../Entities/hero';
// import { HEROES } from '../Mocks/heroes-mock.constants';

@Injectable()
export class HeroService {
  private heroesUrl = 'http://localhost/Test.Core/api/Heroes';

  constructor(private http: Http) {}

  getHeroes(): Promise<Hero[]> {
    return this.http
      .get(this.heroesUrl)
      .toPromise()
      .then(response => {
        return Promise.resolve(response.json());
        // response.json().data as Hero[];
      });
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes().then(heroes => heroes.find(hero => hero.id === id));
  }

  private handleError(error: any): Promise<any> {
    // console.error('An Error occurred:', error);
    return Promise.reject(error.message || error);
  }

  // getHeroes(): Promise<Hero[]> {
  //   return Promise.resolve(HEROES);
  // }

  // getHero(id: number): Promise<Hero> {
  //   return this.getHeroes().then(heroes => heroes.find(hero => hero.Id === id));
  // }
}
