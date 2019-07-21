import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
public table:any=[];
// public apartments: Object[];
public user:any;
public unverifieduser:any;
public driver:any;
public unverifieddriver:any;
public noumberuser:any;
public driverprice:any;
public order:any;
public noumberdriver:any;
public noumberorder:any;
public totalprice:any;
public driverearning:any;
public adminearning:any;
public drivercost:any={};
configurationcost:any={};
  constructor(public myservices:MyserviceService) { }

  ngOnInit() {



    // }
  //   this.myservices.user()
  //   .subscribe(res=>{
  //   this.table=res
    
  //   })
  //   this.myservices.unverified_user()
  //   .subscribe(res=>{
  //     this.user=this.table.length;
  //     this.table=res
  //     this.unverifieduser=this.table.length;
  //     console.log(this.user,this.unverifieduser,"+_+_+_+_++_+_+_+_+_+_++P+_P_+))+_)+_)+_+)+_)")

  //   })
  //   this.myservices.drivers()
  //   .subscribe(res=>{
  //     this.table=res
  //   })
  //   this.myservices.unverified_driver()
  //   .subscribe(res=>{
  //     this.driver=this.table.length;
  //     this.table=res
  //     this.unverifieddriver=this.table.length
  //     console.log(this.unverifieddriver,this.driver)
  //   })


  // forkJoin
    forkJoin(
        this.myservices.user(),
        this.myservices.drivers(),
        this.myservices.order(),
        this.myservices.get_driver_cost(),
        this.myservices.get_configuration_of_cost()
       )
      .subscribe(([res1, res2,res3,res4,res5])=>{
        console.log("hello")
        this.user=res1
        this.noumberuser=this.user.length;
       this.order=res3
       function count(array, key) {
        return array.reduce(function (r, a) {
            return parseInt(r) + parseInt(a[key]);
        }, 0);
    }

     this.totalprice= count(this.order,'Price')
     this.driverearning=count(this.order,"Earning")
     this.adminearning= this.totalprice-this.driverearning
     console.log(this.driverearning,this.adminearning)
     this.driver=res2
     this.noumberdriver=this.driver.length;
      this.noumberorder=this.order.length;
      console.log("+++++++++++++++++++++++",res4,res5,"++++++++++++++++++++++")
      this.drivercost=res4[0];
      this.configurationcost=res5[0];
      // console.log(this.noumberuser,this.noumberdriver,this.noumberorder)
      

        });
 
  }

  
driverCostModel={_id:"",driver_cost:""};
configurationCostModel={_id:"",cost:""}

  onSubmit2(data){
    console.log("hello")
      this.driverCostModel=data
      console.log(this.configurationCostModel)
      this.myservices.configuration_of_cost(this.configurationCostModel)
      .subscribe(res=>{
        console.log(res)
      })
  
    }
  
    editask_driver(u){
      console.log(u)
      this.driverCostModel=u
     }

  
     onSubmit1(data){
      console.log("hello")
        this.driverCostModel=data
        console.log(this.driverCostModel)
        this.myservices.driver_cost(this.driverCostModel)
        .subscribe(res=>{
          console.log(res)
        })
    
      }
    
      editask_configurationcost(u){
        console.log(u)
        this.configurationCostModel=u
       }
}
