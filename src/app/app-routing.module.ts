import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: 'index', component: AppComponent},
  {path: '1', component: AppComponent},
  {path: '2', component: AppComponent},
  {path: '3', component: AppComponent},
  {path: 'about', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
