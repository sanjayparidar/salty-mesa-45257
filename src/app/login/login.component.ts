import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
public table:any;
 
  constructor(private myservices:MyserviceService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
  }
  userModel = {Email:"", Password: ""}
  onSubmit(){
  this.myservices.login(this.userModel)
  .subscribe(res=>{
    this.table=res
    console.log(this.table)
    if(this.table.token){
      console.log('hello')
      this.auth.sendToken("userLoggedin")
      localStorage.setItem("token",this.table.token);
      this.router.navigate(['/index']);
    }
    else{
        console.log("not login")
    }
  })
  
}
}
