import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public auth:AuthService, private router:Router) { }

  ngOnInit() {
  }
logout(){
  console.log("hello")
  localStorage.clear();
  console.log(localStorage.getItem('token'))
  this.router.navigate(['']);
}
}
