import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = 'IronMan';
  public name2: string = 'Spiderman';
  public age: number = 45;
  public age2: number = 20;

  /* get es un metodo */
  /* idea es capitalizae el nombre */
  get capitalizedNmae():string {
    return this.name.toUpperCase(); /* hay un PIPE que ya te lo hace */
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

//------------TAREA-----------------
//función que cambie le nombre a Spiderman
changeHero():string{
  return this.name = this.name2
}

changeAge():number{

  return this.age = this.age2
}



  constructor(){}

}
