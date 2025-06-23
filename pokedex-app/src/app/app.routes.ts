import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'pokemon-detail',
    loadComponent: () => import('./pokemon-detail/pokemon-detail.page').then((m) => m.PokemonDetailPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.page').then( m => m.FavoritesPage)
  },
];