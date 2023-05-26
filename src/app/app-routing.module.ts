import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedError404Component } from './shared/pages/error404/pages.component';

const routes: Routes = [
  { path: 'auxi', loadChildren: () => import('./auxi/auxi.module').then(m => m.AuxiModule) },
  { path: '404', component: SharedError404Component },
  { path: '', redirectTo: 'auxi', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
