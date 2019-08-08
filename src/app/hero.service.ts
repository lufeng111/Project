import { Hero } from './heroes/hero';
// import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import {Observable, of, from} from 'rxjs';
import {MessageService} from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  // 这是典型的服务注入服务
  constructor(
    private http: HttpClient,
    private messageService: MessageService
    ) { }

    private log(message: string) {
      this.messageService.add(`HeroService: ${message}`);
    }
    private heroesUrl = 'api/heroes';



  // getHeros(): Hero[] {
  //   return HEROES;
  // }
  // 把 getHeroes（）方法转换成下面HttpClient
  // getHeroes(): Observable<Hero[]>{
  //   return of(HEROES)
  // }
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl).pipe(
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }



  // getHeroes(): Observable<Hero[]>{
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  // getHeroes(): Observable<Hero[]> {
  //   this.messageService.add('HeroService: fetched heroes');
  //   return of(HEROES);
  // }

  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }


}
