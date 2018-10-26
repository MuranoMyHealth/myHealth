import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { StartCardComponent} from './components/start-card/start-card.component';
import { MatButtonModule, MatCheckboxModule, MatCardModule, MatToolbarModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    StartCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
