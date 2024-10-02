import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './dbz-list.component.html',
  styleUrl: './dbz-list.component.css',
})
export class DbzListComponent {
  @Output()
  characterIndex: EventEmitter<string> = new EventEmitter();

  @Input()
  characterList: Character[] = [];

  removeCharacter(index: number): void {
    //TODO: Emitir el id del personaje
    this.characterIndex.emit(this.characterList[index].id);
  }
}
