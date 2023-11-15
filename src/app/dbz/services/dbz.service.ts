import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'; //generar id unicos

console.log(uuid())


@Injectable({providedIn: 'root'}) // decorador para tratarlo como servicio
export class DbzService {
  public character: Character[] = [
    {
    id: uuid(),
    name: 'Krillin',
    power: 1000,
    },
    {
    id: uuid(),
    name: 'Goku',
    power: 9000,
    },
    {
    id: uuid(),
    name: 'Vegetta',
    power: 7500,
    },
  ];

  onNewCharacter(character: Character):void {

    const newCharacter: Character = {id: uuid(), ...character} //usamos eso para no escribir a manos todos los dato, name power...

    //----AGREGAMOS LOS PERSONAJES----
    this.character.push(newCharacter);
  }

  /* recibir el indice de list.componente */
  //onDeleteCharacter( index: number) {
    //this.character.splice(index,1)}

    deleteCharacterById( id:string ){
      this.character = this.character.filter( character => character.id !== id)
    }



}
