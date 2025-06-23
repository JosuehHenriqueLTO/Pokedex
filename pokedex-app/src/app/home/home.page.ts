import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
         IonCardContent, IonCardHeader, IonCardTitle, IonButton, 
         IonIcon, IonButtons } from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { FavoritesService } from '../services/favorites.service';
import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, IonToolbar, IonTitle, IonContent, IonCard, 
    IonCardContent, IonCardHeader, IonCardTitle, CommonModule, 
    NgxPaginationModule, IonButton, IonIcon, IonButtons, RouterLink
  ]
})
export class HomePage implements OnInit {
  pokemons: any[] = [];
  page = 1;
  totalPokemons = 0;
  favoritePokemons: Set<string> = new Set();

  constructor(
    private dataService: DataService,
    private router: Router,
    private favoritesService: FavoritesService
  ) {
    addIcons({ heart, heartOutline });
  }

  async ngOnInit() {
    await this.loadFavorites();
    this.getPokemons();
  }

  async loadFavorites() {
    const favorites = await this.favoritesService.getFavorites();
    this.favoritePokemons = new Set(favorites.map((p: any) => p.name));
  }

  isFavorite(pokemonName: string): boolean {
    return this.favoritePokemons.has(pokemonName);
  }

  async toggleFavorite(pokemon: any, event: Event) {
    event.stopPropagation();
    
    if (this.isFavorite(pokemon.name)) {
      await this.favoritesService.removeFavorite(pokemon.name);
    } else {
      await this.favoritesService.addFavorite(pokemon);
    }
    
    await this.loadFavorites();
  }

  getPokemons() {
    this.dataService
      .getPokemons(50, (this.page - 1) * 50)
      .subscribe((response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((result: any) => {
          this.dataService
            .getPokemonDetails(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
            });
        });
      });
  }

  openPokemonDetail(pokemon: any) {
    this.router.navigate(['/pokemon-detail'], {
      state: { pokemon },
    });
  }
}