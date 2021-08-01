import { Component } from '@angular/core';

interface Person {
  name: string;
  favorites: Favorite[];
}

interface Favorite {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dynamics',
  templateUrl: './dynamics.component.html',
  styles: [
  ]
})
export class DynamicsComponent {

  newGame = '';

  person: Person = {
    name: 'Daniel',
    favorites: [
      { id: 1, name: 'Dota 2' },
      { id: 2, name: 'Fifa 21' },
    ]
  };

  addGame(): void {
    const newFavorite: Favorite = {
      id: this.person.favorites.length + 1,
      name: this.newGame
    };

    this.person.favorites.push({ ...newFavorite });
    this.newGame = '';
  }

  deleteGame(index: number ): void {
    this.person.favorites.splice(index, 1);
  }

  saveGame(): void {
    console.log('form posted');
  }
}
