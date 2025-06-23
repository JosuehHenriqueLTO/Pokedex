import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
  }

  async addFavorite(pokemon: any): Promise<void> {
    const favorites = await this.getFavorites();
    if (!favorites.some((fav: any) => fav.name === pokemon.name)) {
      favorites.push(pokemon);
      await this._storage?.set('favorites', favorites);
    }
  }

  async removeFavorite(pokemonName: string): Promise<void> {
    let favorites = await this.getFavorites();
    favorites = favorites.filter((fav: any) => fav.name !== pokemonName);
    await this._storage?.set('favorites', favorites);
  }

  async getFavorites(): Promise<any[]> {
    return (await this._storage?.get('favorites')) || [];
  }

  async isFavorite(pokemonName: string): Promise<boolean> {
    const favorites = await this.getFavorites();
    return favorites.some((fav: any) => fav.name === pokemonName);
  }
}