import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonSpinner,
  IonImg,
  IonBadge,
  NavController,
} from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';
import { CommonModule, NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { IonGrid } from '@ionic/angular';
import { Router } from '@angular/router';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardContent,
    IonCardHeader,
    NgFor,
    CommonModule,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
  ],
})
export class HomePage {
  pokemons: any[] = [];

  constructor(private dataService: DataService, private router: Router) {}

  openPokemonDetail(pokemon: any) {
    this.router.navigate(['/pokemon-detail'], {
      state: { pokemon },
    });
  }

  ngOnInit(): void {
    this.dataService
      .getPokemons()
      .subscribe((response: { results: { name: string; url: string }[] }) => {
        response.results.forEach((result: { name: string; url: string }) => {
          this.dataService
            .getPokemonDetails(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
              console.log(this.pokemons);
            });
        });
      });
  }
}
