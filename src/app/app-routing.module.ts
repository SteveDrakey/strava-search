import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FreeSearchComponent } from './free-search/free-search.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: 'search', component: FreeSearchComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '', component: FreeSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
