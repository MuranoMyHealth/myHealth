import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartCardComponent } from './components/start-card/start-card.component';

import { ExercisesPlayerComponent } from './components/exercises-player/exercises-player.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartCardComponent },
  { path: 'exercises', component: ExercisesPlayerComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
