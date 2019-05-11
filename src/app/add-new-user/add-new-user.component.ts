import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.css']
})
export class AddNewUserComponent implements OnInit {

  constructor(public myservice:MyserviceService) { }

  ngOnInit() {
  }
userModel={email:"",password:""}
onSubmit(){

  console.log("hello")
  this.myservice.add_new_user(this.userModel)
  .subscribe(res=>{
    console.log("heolo")
    console.log(res)
  })

}
}
