import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeros(): Hero[] {
  //   return HEROES;
  // }
  getHeroes(): Observable<Hero[]>{
    return of(HEROES)
  }


}
