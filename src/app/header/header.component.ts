import { Component, EventEmitter, Output } from '@angular/core';
import { AdminComponent } from './admin/admin';
@Component({
  selector: 'app-header',
  standalone: true,
   imports: [AdminComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    showAdmin = false;

  toggleAdmin(event: Event) {
    event.preventDefault();
    this.showAdmin = !this.showAdmin;
  }
  selectedTab: string = 'home';

 @Output() subscribeClicked = new EventEmitter<void>();  // <<< add this

  HomeClicked() {
    this.selectedTab = 'home';}

AdminClicked() {
this.selectedTab = 'admin';}
OnClickForUser(){
this.subscribeClicked.emit();   }
  OnSubscribe() {
     alert('Thank you fo Subscribing');
}
}
