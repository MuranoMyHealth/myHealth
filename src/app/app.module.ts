import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppToolbarComponent } from './components/app-toolbar/app-toolbar.component';
import { StartCardComponent} from './components/start-card/start-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesPlayerComponent } from './components/exercises-player/exercises-player.component';

import {
  MatButtonModule, MatCheckboxModule, MatCardModule,
  MatToolbarModule, MatStepperModule, MatIcon, MatIconModule, MatSelectModule, MatDividerModule, MatSlideToggleModule
} from '@angular/material';
import { SettingsComponent } from './components/settings/settings.component';


@NgModule({
  declarations: [
    AppComponent,
    AppToolbarComponent,
    StartCardComponent,
    ExercisesPlayerComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    HttpClientModule,
    MatStepperModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
