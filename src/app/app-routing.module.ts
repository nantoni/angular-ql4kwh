import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'compte',
    loadChildren: './components/compte/compte.module#CompteModule'
  },
  {
    path: 'catalogue',
    loadChildren: './components/liste/liste.module#ListeModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
