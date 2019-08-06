import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeros(): Hero[] {
    return HEROES;
  }

}
