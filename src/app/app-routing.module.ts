import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExercisesPlayerComponent } from './components/exercises-player/exercises-player.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  { path: "exercises", component: ExercisesPlayerComponent },
  { path: "settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
