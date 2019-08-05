import { Component, OnInit } from '@angular/core';
import { HEROES } from './../mock-heroes';
import { Hero } from './hero';
// import { Hero } from './hero';

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
  heros =  HEROES;

  constructor() { }

  ngOnInit() {
  }

  selectHero: Hero;
  // 每一个hero的点击事件 
  onSelect (hero: Hero): void{
    console.log(hero,"hero");
    this.selectHero = hero;
    console.log(this.selectHero,"selectHero")
  }

}
 