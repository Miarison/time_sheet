import { DatePipe } from '@angular/common';
import { Observable, Observer } from 'rxjs';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { TimeSheetService } from 'src/app/services/time-sheet.service';
import { ClockTimeComponent } from './../clock-time/clock-time.component';
import { Task } from './task';

import { TimeLock } from 'src/app/models/time-lock';

@Component({
  selector: 'app-time-sheet',
  templateUrl: './time-sheet.component.html',
  styleUrls: ['./time-sheet.component.css']
})
export class TimeSheetComponent implements OnInit {

  timeSheetForm: any;
  dateTime : any;
  dataClock: TimeLock [] = [];
  timeSheet : TimeLock[] = [];
  dataClockTime: any = [];
  timeClock = new TimeLock();
  public object = Task;
  
  constructor(private timeSheetService: TimeSheetService, public router: Router,public clockTimeComponent: ClockTimeComponent) { 
         
  }
  ngOnInit(): void {
      this.timeSheetForm = new FormGroup({
        email : new FormControl(),
        password:new FormControl(),
        task : new FormControl()
    });
  }

  dateActuel = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  }); 
  
   getTimeSheet(elementDiv: string){
     this.timeSheetService.timeSheet((this.timeSheetForm.get('email')).value,(this.timeSheetForm.get('password').value)).subscribe(
       (res: any) => {
          var result= JSON.stringify(res);
          var jsonn  = JSON.parse(result);
          let name = jsonn.data.firstname;
          const maDate: Date = new Date();
          let dateko = maDate.getDate() + '/' + (( maDate.getMonth() + 1)) + '/' + maDate.getFullYear()+ ' ' + maDate.getHours() + ':' + maDate.getMinutes()+ ':' + maDate.getSeconds();
          let dateTime = new Date(dateko);
          //get element in div 
          const clockIn = document.getElementById('clockIn')?.innerText.toLowerCase();                
          const clockOut = document.getElementById('clockOut')?.innerText.toLowerCase();
          const leaveOnBreak = document.getElementById('leaveOnBreak')?.innerText.toLowerCase();
          const returnFromBreak = document.getElementById('returnFromBreak')?.innerText.toLowerCase();
          
          if(clockIn as string == elementDiv){
              let clock = clockIn as string;
              this.timeClock = new TimeLock(name, clock,dateko);
            }if(clockOut as string  == elementDiv){
              let clock_out = clockOut as string;
              this.timeClock = new TimeLock(name,clock_out,dateko);
          }if(leaveOnBreak as string  == elementDiv){
              let leave_on_break = leaveOnBreak as string;
              this.timeClock = new TimeLock(name, leave_on_break,dateko);
          }if(returnFromBreak as string == elementDiv){
              let returnFrom_break = returnFromBreak as string;
              this.timeClock = new TimeLock(name, returnFrom_break,dateko);
          }
          this.dataClock.push(this.timeClock);

          const jsonData = JSON.stringify(this.dataClock);
          localStorage.setItem('time',jsonData);
          this.timeSheetForm.reset();
          },
           (error: any) => {
               console.log(error);
          }
     );
   }
}

