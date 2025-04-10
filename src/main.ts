import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
//importation de la dependances
import {defineCustomElements} from '@ionic/pwa-elements/loader'

defineCustomElements(window);
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
