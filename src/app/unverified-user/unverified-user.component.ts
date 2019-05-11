import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-unverified-user',
  templateUrl: './unverified-user.component.html',
  styleUrls: ['./unverified-user.component.css']
})
export class UnverifiedUserComponent implements OnInit {
public table:any;
public searchText:any=""; 
  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
    this.myservices.unverified_user()
    .subscribe(res=>{
      this.table=res
    })
  }

}
