import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-unverified-driver',
  templateUrl: './unverified-driver.component.html',
  styleUrls: ['./unverified-driver.component.css']
})
export class UnverifiedDriverComponent implements OnInit {
public table:any;
public searchText:any=""; 
  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
    this.myservices.unverified_driver()
    .subscribe(res=>{
     this.table=res
    })
  }

}
