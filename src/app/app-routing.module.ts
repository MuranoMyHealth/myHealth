import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartCardComponent } from './components/start-card/start-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/start', pathMatch: 'full' },
  { path: 'start', component: StartCardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
