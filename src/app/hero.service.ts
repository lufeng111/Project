import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {MessageService} from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // 这是典型的服务注入服务
  constructor(private messageService: MessageService) { }

  // getHeros(): Hero[] {
  //   return HEROES;
  // }
  // getHeroes(): Observable<Hero[]>{
  //   return of(HEROES)
  // }

  getHeroes(): Observable<Hero[]>{
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }


}
