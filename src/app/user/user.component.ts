import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
public table:any;
public searchText:any=""; 
  constructor(private myservices:MyserviceService) { }

  ngOnInit() {
    this.myservices.user()
    .subscribe(res=>{
      this.table=res
      console.log(this.table)
    })
  }

}
