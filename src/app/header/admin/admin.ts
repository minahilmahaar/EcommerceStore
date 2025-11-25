import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.html',
  styleUrl: './admin.css',
})
export class AdminComponent {
  showUserList: boolean = false;

  userlist = [
    { name: "Minahil", gender: "Female", subtype: "Premium", active: true },
    { name: "Ali", gender: "Male", subtype: "Standard", active: false },
  ];


  onAdminClick() {
    this.showUserList = !this.showUserList;
  }


  showUserDetail(user: any) {
    console.log("User Detail:", user);
    alert("User Detail: " + JSON.stringify(user));
  }
}


