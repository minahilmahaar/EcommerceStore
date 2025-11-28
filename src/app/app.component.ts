import { Component, ElementRef, Input, OnChanges, ViewChild, ViewEncapsulation, AfterViewInit } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './header/topmenu/topmenu';
import { Productlist } from './productlist/productlist';
import { ParentComponent } from './parent/parent';
import { ChildComponent } from './child/child';
import { CommonModule } from '@angular/common';
import { Demo } from './demo/demo';
import { AppClassDirective } from './CustomDirectives/class';
import { AppStyleDirective } from './CustomDirectives/style'; 
import { Comp1 } from './comp1/comp1';
import { Comp2 } from './comp2/comp2';
import { AdminComponent } from './header/admin/admin';
import { UserListComponent } from './header/admin/user-list/user-list';
import { UserDetail } from './header/admin/user-detail/user-detail';
import { Topheader } from './topheader/topheader';
import { from, Observable, of, fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent, Topheader, TopmenuComponent, Productlist, ParentComponent,
    ChildComponent, Demo, CommonModule, AppClassDirective, AppStyleDirective,
    Comp1, Comp2, AdminComponent, UserListComponent, UserDetail
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Angular 17 Standalone App'; 

  InputVal: string = '';
  toDestroy: boolean = false;
  message: string[] = [];

  showAdmin: boolean = false;         
  active: boolean = false;
  isOpen = true;   
  data: any[] = [];

  @ViewChild('creatbtn', { static: false }) creatBtn!: ElementRef;
  creatBtnObs!: Observable<Event>;

  arry1 = [1, 2, 3, 4, 5];
  arry2 = ['A', 'B', 'C', 'D'];
  count: any =0;
  promis = new Promise((resolve, reject) => {
    resolve([10, 20, 30, 40, 50, this.arry1])
  });

  myObservable = from(this.promis);

  constructor() { }

  //ngAfterViewInit() {
    
    //this.buttonClicked();
  //}

  onSubscribeFromHeader() {            
    // Toggle showAdmin
    this.showAdmin = !this.showAdmin;
  }

  btnClick(MyTestBox: string) {
    this.InputVal = MyTestBox;
  }

  DestroyComponent() {
    // this.toDestroy = !this.toDestroy;
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

  GetAsyncData() {
    this.myObservable.subscribe({
      next: (val: any) => {
        this.data.push(val);
      },
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        alert('all the data streamed');
      }
    });
  }

  // li
  buttonClicked() { 
   
    if (this.creatBtn) {
      this.creatBtnObs = fromEvent(this.creatBtn.nativeElement, 'click');
      this.creatBtnObs.subscribe(() => {
        console.log(this.data);
        this.showitem(this.count++);
      });
    }
  this.showitem(this.count++);

  }
  ngAfterViewInit(){
this.buttonClicked();
  }
  showitem(val){
    let div = document.createElement('div');
div.innerText= 'item'+ val;
div.className='data-list';
document.getElementById('container').appendChild(div);
  }


}

