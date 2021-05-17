import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

   users:User[];
  constructor(private data:DataService) { }

  ngOnInit(): void {
this.data.userList().subscribe(
  res => this.users =res     
)

  }

}
