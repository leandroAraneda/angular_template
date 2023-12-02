import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
