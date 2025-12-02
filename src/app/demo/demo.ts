import { AfterContentChecked, AfterContentInit, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input,OnChanges, OnDestroy,OnInit,  SimpleChanges, ViewChild } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './demo.html',
  styleUrls: ['./demo.css'],
})
export class Demo implements 
  OnChanges, 
  OnInit, 
  DoCheck, 
  AfterContentInit, 
  AfterContentChecked, 
  AfterViewInit, 
 
  OnDestroy 
{
 // title: string = 'Demo';

  @Input() message: string = '';

  //@ViewChild('temp') tempPara!: ElementRef;
  //@ContentChild('childMsg') paraContent!: ElementRef;

//   constructor() {
//     console.log('Demo Constructor Called');
// }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('ngOnChanges Called');
    // console.log(changes);
  }

  ngOnInit() {
    // console.log('ngOnInit Called');
    // console.log(this.tempPara?.nativeElement?.innerHTML);
  }

  ngDoCheck() {
    // console.log('ngDoCheck Called');
  }

  ngAfterContentInit() {
    // console.log('ngAfterContentInit Called');
    // console.log('ContentChild:', this.paraContent?.nativeElement);
  }

  ngAfterContentChecked() {
    // console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    // console.log('ngAfterViewInit Called');
    // console.log('ViewChild:', this.tempPara);
  }

 // ngAfterViewChecked() {
   // console.log('ngAfterViewChecked Called');
    // console.log(this.tempPara?.nativeElement?.textContent);
  //}

  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }
}
