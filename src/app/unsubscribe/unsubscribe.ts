import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-unsubscribe',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './unsubscribe.html',
  styleUrl: './unsubscribe.css',
})
export class Unsubscribe {

counter =  interval(1000);
data1: number[] = [];
data2: number[] = [];
data3: number[] = [];
subscribe1: Subscription;
subscribe2: Subscription;
subscribe3: Subscription;
OnSubscribe1(){
this.subscribe1 = this.counter.subscribe((val) => {
  this.data1.push(val)
})
}
OnSubscribe2(){
this.subscribe2 = this.counter.subscribe((val) => {
  this.data2.push(val)
})
}
OnSubscribe3(){
this.subscribe3 = this.counter.subscribe((val) => {
  this.data3.push(val)
})
}
OnUnSubscribe1(){
this.subscribe1?.unsubscribe();
}
OnUnSubscribe2(){
this.subscribe2?.unsubscribe();
}
OnUnSubscribe3(){
this.subscribe3?.unsubscribe();
}

}
