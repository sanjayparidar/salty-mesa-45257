import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
public table:any;
public filter:any;
public searchText:any;
  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
    this.myservices.order()
    .subscribe(res=>{
      this.table=res
      console.log(this.table)
      this.filter=res
    })
   

  }

  addItem(data){
  
    this.filter = this.table.filter(x => x.CurrentStatus == data);
    console.log(this.filter,"+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_")
    
  }

}
