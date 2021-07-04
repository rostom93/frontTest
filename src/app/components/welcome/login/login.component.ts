import { ApiService } from './../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  users: any = [];
  email : string = ""
  error: string
  constructor(private readonly service : ApiService,
    private router : Router) { }

  login(){
    this.service.getAllUsers().subscribe(
      res => {
        this.users = res.data
        let user = this.users.find(U=>U.email === this.email)
      
        if (user == null || user == undefined)
            {
              this.error="Invalid email"             
            }else {    
                 localStorage.setItem("username",user.name) 
                 this.router.navigate(["/dashboard"])
            }
      },
      err => {
        console.log(err)
      }
    )
  }
}
