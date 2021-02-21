import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EligibilityCalculatorComponent } from './eligibility-calculator.component';

const routes: Routes = [{ path: '', component: EligibilityCalculatorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EligibilityCalculatorRoutingModule { }
