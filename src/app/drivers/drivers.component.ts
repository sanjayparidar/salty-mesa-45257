import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
public table:any;
public searchText:any;
public user:any;
public noumberuser:any;
public driver:any;
public driverprice:any;

  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
      this.myservices.drivers()
      .subscribe(res=>{
       this.table=res
      console.log(this.table)
      })


    //   forkJoin(
    //     this.myservices.user(),
    //     this.myservices.drivers(),
    //     this.myservices.order()
    //    )
    //   .subscribe(([res1, res2,res3])=>{
    //     console.log(res1,res2,res3)
    //    this.user=res1
    //    this.noumberuser=this.user.length;
    //    this.driver=res2
    //    function count(array, key) {
    //     return array.reduce(function (r, a) {
    //         return r + a[key];
    //     }, 0);
    // }
    //  this.driverprice= count(this.driver,'')

    //     });
     
     
    }
 
     
}
