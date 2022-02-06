import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeltaModuleComponent } from './delta-module/delta-module.component';
import { PercentageModuleComponent } from './percentage-module/percentage-module.component';



const routes: Routes = [

  { path: '',   redirectTo: '/delta', pathMatch: 'full' },
  { path: 'delta', component: DeltaModuleComponent },
  { path: 'percentage', component: PercentageModuleComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
