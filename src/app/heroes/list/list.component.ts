import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroesNames: string[] = ['Spiderman', 'Superman', 'Batman', 'Ironman'];
  lastHero?: string | undefined = '-';

  deleteLastHero(): void {
    this.lastHero = this.heroesNames.pop()!;
  }

  public get getLastHero(): string | undefined {
    return this.lastHero;
  }
}
