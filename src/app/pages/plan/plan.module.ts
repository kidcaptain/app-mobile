import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProgressPlanComponent } from 'src/app/components/progress-plan/progress-plan.component';
import { IonicModule } from '@ionic/angular';

import { PlanPageRoutingModule } from './plan-routing.module';

import { PlanPage } from './plan.page';
import { CardPlanComponent } from 'src/app/components/card-plan/card-plan.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlanPageRoutingModule
  ],
  declarations: [PlanPage,ProgressPlanComponent, CardPlanComponent]
})
export class PlanPageModule {}
