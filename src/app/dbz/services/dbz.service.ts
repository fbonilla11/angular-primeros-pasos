import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

//Clase que contiene toda la lógica de negocio

@Injectable({ providedIn: 'root' })
export class DbzService {
  characters: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000,
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9999,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 7500,
    },
  ];

  onNewCharacter(character: Character): void {
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters.push(newCharacter);
  }

  deleteCharacter(index: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== index
    );
  }
}
