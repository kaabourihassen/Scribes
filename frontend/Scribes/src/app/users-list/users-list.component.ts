import { Component, OnInit } from '@angular/core';
import { USERS } from '../models/usersList';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users = USERS;
  

  constructor() { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers():typeof USERS{
    return this.users;
  }
}
