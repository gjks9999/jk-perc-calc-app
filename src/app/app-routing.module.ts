import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeltaModuleComponent } from './delta-module/delta-module.component';
import { PercentageModuleComponent } from './percentage-module/percentage-module.component';
import { StoplossComponent } from './stoploss/stoploss.component';



const routes: Routes = [

  { path: '',   redirectTo: '/delta', pathMatch: 'full' },
  { path: 'delta', component: DeltaModuleComponent },
  { path: 'percentage', component: PercentageModuleComponent },
  { path: 'stoploss', component: StoplossComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
