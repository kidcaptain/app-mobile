import { Component, Input, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-progress-plan',
  templateUrl: './progress-plan.component.html',
  styleUrls: ['./progress-plan.component.scss'],
})
export class ProgressPlanComponent implements OnInit {

  @Input() planProgression : any;

  plan : any;

  progression : number = 0;

  constructor(private planService : PlanService) { }

  ngOnInit(): void {
    this.planService.getPlanById(this.planProgression.idPlan).subscribe((res)=>{
      this.plan = {...res, ...this.planProgression}
      this.progression = this.planProgression.progression / 200
      if ((this.planProgression.progression%20000 == 0) && this.planProgression.progression >= this.planProgression.niveau * 20000) {
        this.planProgression.progression += 1000;
        this.planProgression.niveau = 1 + this.planProgression.niveau ;
        this.planService.setSubscribesByIdPlan(this.planProgression).subscribe()
      }
      if ( this.progression > 100) {
        this.progression = this.progression - 100;
      }
    })
  }
}
