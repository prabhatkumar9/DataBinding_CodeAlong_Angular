import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DatabindingComponent } from './databinding/databinding.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'databinding', component: DatabindingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
