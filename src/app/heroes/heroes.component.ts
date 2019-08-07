import { Component, OnInit } from '@angular/core';
// import { HEROES } from './../mock-heroes';
import { Hero } from './hero';
// import { Hero } from './hero';
import {HeroService} from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  // hero = 'hello world'
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // }
  // heros =  HEROES;
  heros : Hero[];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    // 初始化页面调用getHeroes方法
    this.getHeroes();
  }

  selectHero: Hero;
  // 每一个hero的点击事件 
  onSelect (hero: Hero): void{
    console.log(hero,"hero");
    this.selectHero = hero;
    console.log(this.selectHero,"selectHero")
  }

  // getHeroes(): void {
  //   this.heros = this.heroService.getHeros();
  //   console.log("this.heros",this.heros)
  //   console.log("this.heroService",this.heroService)
  //   console.log("this.heroService.getHeros()",this.heroService.getHeros())
  // }

  getHeroes(): void{
    console.log("this.heroService.getHeroes()", this.heroService.getHeroes())
    this.heroService.getHeroes().subscribe(heroes => this.heros = heroes);
  }



}
 