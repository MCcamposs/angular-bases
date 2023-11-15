import { Component, EventEmitter, Output} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent {

  @Output() /* decorador que indica que la propiedad onNewCharacter es un evento de salida. */
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();
  /* onNewCharacter es una propiedad de tu componente que está marcada como un evento de salida */
  /* clase EventEmitter de Angular para crear una instancia de un emisor de eventos asociado a objetos del tipo Character */

  public character: Character = { /* Vacio, lo llenamos nosotros desde el input*/
    name: '',
    power: 0,
  }

  emitCharacter():void {
    console.log(this.character)
    // pequeña Validación, no toleramos que no tenga nombre
    if (this.character.name.length === 0 ) return;


    this.onNewCharacter.emit(this.character); //! Emitir los personajes

    // Vaciamos los datos, limpiamos el componente
    this.character = { name: '', power: 0}
  }

}
