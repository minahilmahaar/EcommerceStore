import { Component, Input, input, OnChanges, ViewEncapsulation } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './header/topmenu/topmenu';
import { Productlist } from './productlist/productlist';
import { ParentComponent } from './parent/parent';
import { ChildComponent } from './child/child';
import { CommonModule } from '@angular/common';
import { Demo } from './demo/demo';
import { AppClassDirective } from './CustomDirectives/class';
import { AppStyleDirective } from './CustomDirectives/style'; 
import { Comp1} from './comp1/comp1';
import { Comp2 } from './comp2/comp2';
import { AdminComponent } from './header/admin/admin';
import { UserList } from './header/admin/user-list/user-list';
import { UserDetail } from './header/admin/user-detail/user-detail';
import { Topheader } from './topheader/topheader';
import { TestComponentRenderer } from '@angular/core/testing';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, Topheader, TopmenuComponent, Productlist, ParentComponent, ChildComponent, Demo, CommonModule, AppClassDirective, AppStyleDirective, Comp1, Comp2, AdminComponent, UserList, UserDetail],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  encapsulation: ViewEncapsulation.None

})

export class AppComponent {
  title = 'Angular 17 Standalone App'; 
  InputVal: string = '';
  toDestroy: boolean = false;
 message:string[] =[];

 constructor(){
  //console.log('App Component Constructor Called');
 }
  ngAfterViewInit(){
//console.log('ngAfterViewInit Test Called');
  }
 
 btnClick(MyTestBox :string)
  {
    //console.log(MyTestBox);
    this.InputVal = (MyTestBox);
  }
  DestroyComponent(){
    //this.toDestroy = !this.toDestroy;
  }
  active: boolean = false;
  //active: boolean = true;
  isOpen = true;   

  toggle() {
    this.isOpen = !this.isOpen;
  }


}



