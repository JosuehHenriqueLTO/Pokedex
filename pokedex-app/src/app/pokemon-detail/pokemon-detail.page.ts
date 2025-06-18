import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonProgressBar,
  IonBadge
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonProgressBar,
    IonBadge
  ]
})
export class PokemonDetailPage implements OnInit {
  pokemon: any;
  loading: boolean = true;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.pokemon = navigation?.extras?.state?.['pokemon'];
  }

  ngOnInit() {
    if (!this.pokemon) {
      this.router.navigate(['/']);
    } else {
      this.loading = false;
    }
  }

  getHeightInMeters(height: number): string {
    return (height / 10).toFixed(1);
  }

  getWeightInKg(weight: number): string {
    return (weight / 10).toFixed(1);
  }
}