import { HeroService } from './../hero.service';
import { Observable, Subject, from } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import{debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor( private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.heroService.searchHeroes(term)),
    )
  }

  search(term: string): void{
   this.searchTerms.next(term);
  }

  

}
