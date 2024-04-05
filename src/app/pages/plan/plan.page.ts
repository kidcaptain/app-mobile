import { Component, OnInit } from '@angular/core';
import { PlanService } from 'src/app/services/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.page.html',
  styleUrls: ['./plan.page.scss'],
})
export class PlanPage implements OnInit {

  _subscriptions = [];

  countSubscriptions : number = 0;

  constructor(private planService: PlanService) { }

  ngOnInit() {
    setTimeout(() => {
      this.planService.getSubscribes().subscribe((res)=> {this._subscriptions = res; this.countSubscriptions = res.length; this._subscriptions.length = 3})
    
    }, 1000);
  }
  onClick(){
    this._subscriptions.length = 0;
    this.planService.getSubscribes().subscribe((res)=> {this._subscriptions = res; this.countSubscriptions = res.length; })
  }
}
