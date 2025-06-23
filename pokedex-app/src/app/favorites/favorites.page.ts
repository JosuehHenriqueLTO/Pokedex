import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
         IonCardContent, IonCardHeader, IonCardTitle, IonButton, 
         IonIcon, IonBackButton, IonNote, IonButtons } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { FavoritesService } from '../services/favorites.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardTitle, CommonModule, 
    IonButton, IonIcon, IonBackButton, IonNote, IonButtons
  ]
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(
    private favoritesService: FavoritesService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.favorites = await this.favoritesService.getFavorites();
  }

  async removeFavorite(pokemon: any, event: Event) {
    event.stopPropagation();
    await this.favoritesService.removeFavorite(pokemon.name);
    this.favorites = await this.favoritesService.getFavorites();
  }

  openPokemonDetail(pokemon: any) {
    this.router.navigate(['/pokemon-detail'], {
      state: { pokemon }
    });
  }
}