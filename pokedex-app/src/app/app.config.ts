import { ApplicationConfig } from '@angular/core';
import { 
  RouteReuseStrategy, 
  provideRouter, 
  withPreloading, 
  PreloadAllModules,
  RouterModule
} from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage-angular';
import { routes } from './app.routes'; // Importação adicionada aqui

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), // Agora routes está definido
    provideHttpClient(),
    { provide: Storage, useFactory: () => new Storage() }
  ]
};