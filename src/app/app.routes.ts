import { Routes } from '@angular/router';
import { ExploreComponent } from './pages/explore.component';
import { PlannerComponent } from './pages/planner.component';
import { AgenciesComponent } from './pages/agencies.component';

export const routes: Routes = [
  { path: '', redirectTo: 'explore', pathMatch: 'full' },
  { path: 'explore', component: ExploreComponent },
  { path: 'agencies', component: AgenciesComponent },
  { path: 'planner', component: PlannerComponent },
  { path: '**', redirectTo: 'explore' }
];

