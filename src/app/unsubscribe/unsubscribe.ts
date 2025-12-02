import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-unsubscribe',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css',
})
export class Unsubscribe {
numbers: number[] = [1, 2, 3, 4, 5];

}
