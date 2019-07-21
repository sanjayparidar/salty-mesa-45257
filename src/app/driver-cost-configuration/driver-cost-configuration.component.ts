import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-driver-cost-configuration',
  templateUrl: './driver-cost-configuration.component.html',
  styleUrls: ['./driver-cost-configuration.component.css']
})
export class DriverCostConfigurationComponent implements OnInit {

  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
  }
  driverModel={driver_cost:""}

  onSubmit(){
    this.myservice.driver_cost(this.driverModel)
    .subscribe(res=>{
      console.log("++++++++++++++++++",res,"++++++++++++++++")
    })
  }

}
