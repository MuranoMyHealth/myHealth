import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoExercisesPageComponent } from './components/do-exercises-page/do-exercises-page.component';
import { SettingsComponent } from './components/settings/settings.component';


const routes: Routes = [
  { path: "exercises", component: DoExercisesPageComponent },
  { path: "settings", component: SettingsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
