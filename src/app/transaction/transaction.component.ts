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
  constructor(private myservices: MyserviceService) { }

  ngOnInit() {
    this.myservices.transaction()
    .subscribe(res=>{
      this.table=res
    })
  }

}
