import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-detailstransaction',
  templateUrl: './detailstransaction.component.html',
  styleUrls: ['./detailstransaction.component.css']
})
export class DetailstransactionComponent implements OnInit {
public transectionid:any;
public table:any={};
  constructor(private route:ActivatedRoute, private myservices:MyserviceService) { }

  ngOnInit() {
    this.route.params.subscribe( params =>
      
      this.transectionid=params['id']
  )
  this.myservices.transactiondetail(this.transectionid)
  .subscribe(res=>{
    console.log(res)
    this.table=res
    console.log(this.table)
  })
    
  }

}
