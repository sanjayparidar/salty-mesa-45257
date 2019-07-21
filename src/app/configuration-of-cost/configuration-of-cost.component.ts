import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-configuration-of-cost',
  templateUrl: './configuration-of-cost.component.html',
  styleUrls: ['./configuration-of-cost.component.css']
})
export class ConfigurationOfCostComponent implements OnInit {

  constructor(private myserivce:MyserviceService) { }

  ngOnInit() {
    // this.myserivce.configaration_of_cost()
    // .subscribe(res=>{
    //   console.log(res)
    // })
  }

}
