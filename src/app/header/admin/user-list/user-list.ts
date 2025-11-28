 import { Component } from '@angular/core';
 import { CommonModule } from '@angular/common';

interface User {
  name: string;
  gender: string;
  active: boolean; 
}

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './user-list.html',
  styleUrls: ['./user-list.css']
})
export class UserListComponent {
  // Sample users
  userlist: User[] = [
    { name: 'Ali', gender: 'Male', active: true },
    { name: 'Sara', gender: 'Female', active: false },
   // { name: 'Ahmed', gender: 'Male', active: true },
    //{ name: 'Fatima', gender: 'Female', active: false }
  ];
}
