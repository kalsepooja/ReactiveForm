import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  signUpForm !:  FormGroup;
  constructor(){

  }
  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      email: new FormControl(null,[Validators.required])
    });
    
  }
  onSignUp(){
   console.log( this.signUpForm.value);
   console.log(this.signUpForm);
   
   
  }
}
