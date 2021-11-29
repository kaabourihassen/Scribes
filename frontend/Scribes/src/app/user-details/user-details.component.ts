import { Component, OnInit } from '@angular/core';
import { USERS } from '../models/usersList';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  users = USERS;
  id: String ="";
  user : User={
    id: "",
    fullname: "",
    email: "",
    phone: "",
    bio: "",
  }
  
 constructor(private route: ActivatedRoute) { }

 ngOnInit(): void {
  this.route.params.subscribe(params=>{
    this.id = params.id;
    //console.log(this.restaurantCode);
  })
  this.getElementById(this.id);
}

  getElementById(id : String){
    let index = this.users.findIndex(user=> user.id === id);
    this.user = this.users[index];
  }
}

