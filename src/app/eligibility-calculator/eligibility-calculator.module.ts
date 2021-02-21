import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EligibilityCalculatorRoutingModule } from './eligibility-calculator-routing.module';
import { EligibilityCalculatorComponent } from './eligibility-calculator.component';


@NgModule({
  declarations: [EligibilityCalculatorComponent],
  imports: [
    CommonModule,
    EligibilityCalculatorRoutingModule
  ]
})
export class EligibilityCalculatorModule { }
