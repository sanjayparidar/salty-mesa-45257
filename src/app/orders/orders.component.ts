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
public order={Order_id:""};

  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
    this.myservices.order()
    .subscribe(res=>{
      this.table=res
      console.log(this.table)
      this.filter = this.table.filter(x => x.CurrentStatus == 0);
    })
   
  
  }
  
 addItem(data){

    this.filter = this.table.filter(x => x.CurrentStatus == data);
  }
  cancel(data){


    var index= this.table.findIndex(i => i.Order_id ===data);
    console.log(index)
    this.table.splice(index,1)
    this.filter =this.table.filter(x => x.CurrentStatus == 1);
       this.myservices.ordercancel(data)
      .subscribe(res =>  {
       },
       error =>{
         console.log(error)
        
       }
     );
  }

  cancelconfermation(data){
      this.order=data
      console.log(this.order)

  }

}
