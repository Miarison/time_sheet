import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimeSheetComponent } from './components/time-sheet/time-sheet.component';
import { ClockTimeComponent } from './components/clock-time/clock-time.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { DayDetailsComponent } from './components/day-details/day-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeSheetComponent,
    ClockTimeComponent,
    LoginComponent,
    DayDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ClockTimeComponent,DayDetailsComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
