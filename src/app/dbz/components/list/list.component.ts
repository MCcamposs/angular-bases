import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  //ELIMINAR PERSONAJES
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter //cambiamos el number del index por el string de id



  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunk',
      power: 10,
    }
  ]

  // emitimos el index
  // Esta funcion la usamos en el boton para conseguir el indice y
  // despues emitirlo
  onDeleteCharacter(id: string):void {
    this.onDeleteId.emit(id);
  }

}
