import { Component, OnInit, Injectable, Input } from '@angular/core';
import { ClockTimeComponent } from './../clock-time/clock-time.component';
import { TimeLock } from './../../models/time-lock';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-day-details',
  templateUrl: './day-details.component.html',
  styleUrls: ['./day-details.component.css']
})

@Injectable()
export class DayDetailsComponent implements OnInit {

  @Input() detailData: TimeLock [] = [];
  @Input() name: string | undefined;
  @Input() timeworked: string| undefined;

  constructor() { 
     
  }

  ngOnInit(): void {    
  }

}
