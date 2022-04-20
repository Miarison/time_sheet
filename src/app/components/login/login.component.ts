import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers:[AppComponent],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  loginform: any;  
  
  constructor(public loginService: LoginService,public router:Router
    ) { }
  ngOnInit(): void {
    this.loginform = new FormGroup({
      login : new FormControl(),
      mdp:new FormControl()
   });
  }
 
loginUser(): void{
  this.loginService.authenfication((this.loginform.get('login').value),(this.loginform.get('mdp').value)).subscribe(
        (res) =>{
            window.sessionStorage.setItem("id",res.id);
            this.isLoggedIn = true;
            this.isLoginFailed = false;
            this.router.navigate(['administrator/']);
           
        },
        error => {
          console.log(error);
            this.isLoggedIn = false;
            this.isLoginFailed = true;
            this.errorMessage = error.error.message;
        }
  );
}

}