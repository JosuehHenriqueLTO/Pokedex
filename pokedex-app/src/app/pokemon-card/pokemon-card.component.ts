import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from '@ionic/angular/standalone';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-pokemon-card',
  standalone: true, // <-- Add this line
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
  imports: [
    CommonModule, // Required for *ngFor
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
  ],
})
export class PokemonCardComponent implements OnInit {
  pokemons: any[] = []; // Consider using a more specific type instead of any[]

  constructor(private dataService: DataService) {}

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