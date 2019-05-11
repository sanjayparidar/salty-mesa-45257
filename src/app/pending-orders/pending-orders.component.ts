import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-pending-orders',
  templateUrl: './pending-orders.component.html',
  styleUrls: ['./pending-orders.component.css']
})
export class PendingOrdersComponent implements OnInit {
public table:any;
public searchText:any=""; 
  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
    this.myservices.pendin_order()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    })
  }

}
