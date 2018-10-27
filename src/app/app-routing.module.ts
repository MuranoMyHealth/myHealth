import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartCardComponent } from './components/start-card/start-card.component';

import { DoExercisesPageComponent } from './components/do-exercises-page/do-exercises-page.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartCardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'exercises', component: DoExercisesPageComponent },
  { path: 'settings', component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
