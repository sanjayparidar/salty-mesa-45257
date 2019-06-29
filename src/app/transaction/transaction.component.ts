import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
public table:any;
public searchText:any=""; 
orderdetail:any={id:'',amount:'',amount_refunded:'',balance_transaction:'',paid:'',captured:'',receipt_url:''};
  constructor(private myservices: MyserviceService) { }

  ngOnInit() {
    this.myservices.transaction()
    .subscribe(res=>{
      console.log(res)
      this.table=res
    })
  }
  orderdeatil(id){
    this.myservices.transactiondetail(id)
    .subscribe(res=>{
      this.orderdetail=res
      console.log(res)
    })
  }

  gotoGoogle(id) : void {
    window.open(id, "_blank");
}

}
