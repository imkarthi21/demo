import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EligibilityCalculatorRoutingModule } from './eligibility-calculator-routing.module';
import { EligibilityCalculatorComponent } from './eligibility-calculator.component';
import {HeaderComponent} from '../header/header.component'

@NgModule({
  declarations: [EligibilityCalculatorComponent,HeaderComponent],
  imports: [
    CommonModule,
    EligibilityCalculatorRoutingModule
  ]
})
export class EligibilityCalculatorModule { }
