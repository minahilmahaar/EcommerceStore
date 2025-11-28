 import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule, NgForOf } from '@angular/common';
import { userServices } from '../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, NgForOf],
  templateUrl: './admin.html',
  styleUrls: ['./admin.css'],
})
export class AdminComponent implements OnInit, OnDestroy {

  user: any = null;
  subscription!: Subscription;

  constructor(private userService: userServices) {}

  ngOnInit() {
    this.subscription = this.userService.selectedUser$
      .subscribe(selected => {
        this.user = selected;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
