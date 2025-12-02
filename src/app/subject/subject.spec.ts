import { Component, OnInit } from '@angular/core';
import { Subject as RxSubject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.html',
  styleUrls: ['./subject.css'],
  standalone: true
})
export class SubjectComponent implements OnInit {   
  ngOnInit() {
    const subject = new RxSubject<any>();
    const data = ajax('https://randomuser.me/api/');

    subject.subscribe(res => console.log("Sub 1:", res));
    subject.subscribe(res => console.log("Sub 2:", res));
    subject.subscribe(res => console.log("Sub 3:", res));

    data.subscribe(res => subject.next(res.response));
  }
}
