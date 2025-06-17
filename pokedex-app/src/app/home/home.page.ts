import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from '@ionic/angular/standalone';
import { PokemonCardComponent } from '../pokemon-card/pokemon-card.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, PokemonCardComponent],
})
export class HomePage {
  pokemons: any[] = []; // Consider using a more specific type instead of any[]

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getPokemons().subscribe((response: { results: { name: string, url: string }[] }) => {
      response.results.forEach((result: { name: string, url: string }) => {
        this.dataService.getPokemonDetails(result.name).subscribe((uniqueResponse: any) => {
          this.pokemons.push(uniqueResponse);
          console.log(this.pokemons);
        });
      });
    });
  }
}