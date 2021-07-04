import { User } from './../../models/user.model';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'; 

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashbordComponent implements OnInit {
  users:any
  numberOfUsers : number
  user : string = localStorage.getItem("username")
  constructor(private readonly userService: ApiService) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(
      res => {
        this.users = res.data
        this.numberOfUsers = res.data.length
      }
    )

  }

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      position: 'right',
      custom: [],
    },
    pager: {
      display: true,
      perPage: 4
    },
    columns: {
      name: {
        title: 'Name',
        type: 'string',
      },
      email: {
        title: 'Email',
        type: 'string',
      },
      gender: {
        title: 'Gender',
        type: 'string',
      },
     }
    }
}
