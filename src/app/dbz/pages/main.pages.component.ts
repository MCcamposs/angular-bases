import { Component, EventEmitter } from '@angular/core';
//----- SERVICIOS---
import { DbzService } from '../services/dbz.service';
/* Interfaces */
import { Character } from '../interfaces/character.interface';


@Component({
  selector: 'app-dbz-main-pages',
  templateUrl: './main.pages.component.html'
})

export class MainPageComponent  {
  //. todo lo que teniamos antes lo hemos pasado al services
  //para traerlo de vuelta usamos el constructor
  // (onDeleteId)="dbzService.onDeleteCharacter($event)" añadimos ese dbzService.
  constructor( private dbzService: DbzService){}


  get characters(): Character[] {
    return [...this.dbzService.character];
  }

  onDeleteCharacter( id: string):void {
    this.dbzService.deleteCharacterById(id)
  }

  onNewCharacter( characters: Character): void{
    this.dbzService.addCharacter(characters);
  }
}
