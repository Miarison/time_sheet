import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClockTimeComponent } from './components/clock-time/clock-time.component';
import { DayDetailsComponent } from './components/day-details/day-details.component';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';

const routes: Routes = [
    {path:'',component:TimeSheetComponent},
    {path:'timeSheet',component:TimeSheetComponent},
    {path: 'clockTime',component:ClockTimeComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
