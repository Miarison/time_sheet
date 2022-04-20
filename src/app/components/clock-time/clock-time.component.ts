import { Component, OnInit } from '@angular/core';
import { TimeLock } from './../../models/time-lock';
import { ActivatedRoute, Router } from '@angular/router';
import { DayDetailsComponent } from './../day-details/day-details.component';
import * as moment from 'moment';

@Component({
  selector: 'app-clock-time',
  templateUrl: './clock-time.component.html',
  styleUrls: ['./clock-time.component.css']
})


export class ClockTimeComponent implements OnInit {

  data: TimeLock[] = [];
  responses: any = [];
  donneee : TimeLock[] = [];
  detailClockTime:TimeLock [] = [];
  name: string | undefined;
  timeWorkedDetail: string | undefined;
  isDetailComponent = false;
  isNameClicked = true;
  isClockIn = false;
  constructor(private router:Router,private route:ActivatedRoute) {
   }

  ngOnInit(): void {
    this.getResponseJSON();
    this.getListTimeSheetGroupByName();
  }
  
  getResponseJSON(){
    this.responses.push(localStorage.getItem('time') || '{}');
    var jSonParse = JSON.parse(this.responses);

    jSonParse.forEach((element: any) => {
            this.donneee.push(element);
    }); 
    
  }
  getListTimeSheetGroupByName(){
      for(let i = 0; i < this.donneee.length ; i++ ){
          if(this.donneee[i].clockTime == 'clock in'){
             this.data.push(new TimeLock(this.donneee[i].name,this.donneee[i].clockTime,this.donneee[i].timeClock));
          }else if(this.donneee[i].clockTime == 'leave on break' || this.donneee[i].clockTime == 'return from break'  || this.donneee[i].clockTime == 'clock out'){
            this.data.push();
          }
      }
      return this.data;
   }
  getDetailClockTimeByName(name?:string){
    for(let i = 0; i <this.donneee.length; i++){ 
         if(this.donneee[i].name === name ){
            this.name = name;
            this.isDetailComponent = true;
            this.isNameClicked = false;
            this.detailClockTime.push(new TimeLock(this.donneee[i].name,this.donneee[i].clockTime,this.donneee[i].timeClock));
            if(this.donneee[i].clockTime == 'clock in'){
              const dateClockIn = this.donneee[i].timeClock;              
              let dateClock = new Date(dateClockIn as string);
              
              let dateString = '20/4/2022 11:57:80';  
              let momentVariable = moment(dateString, 'MM-DD-YYYYHH:mm:ss');  
              let stringvalue = momentVariable.format('MM-DD-YYYYHH:mm:ss');   
              console.log(stringvalue);
            } if(this.donneee[i].clockTime == 'leave on break'){
              const dateLeaveOnBreak = this.donneee[i].timeClock;
              console.log('date leave on break '+dateLeaveOnBreak);
              
           }if(this.donneee[i].clockTime == 'retrun from break'){
               const dateReturnFromBreak = this.donneee[i].timeClock;
               console.log('date return from break '+ this.donneee[i].timeClock)
           }if(this.donneee[i].clockTime == 'clock out '){
               const dateClockOut = this.donneee[i].timeClock;
               console.log('date clock out '+dateClockOut);
               

           }
            
         }
     }
  }


}
