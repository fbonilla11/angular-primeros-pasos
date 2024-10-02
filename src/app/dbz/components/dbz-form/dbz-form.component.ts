import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrl: './dbz-form.component.css',
})
export class DbzFormComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { name: '', power: 0 };

  addCharacter(): void {
    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = { name: '', power: 0 };
  }

  removeCharacter(): void{
    console.log(this.character);
  }
}
