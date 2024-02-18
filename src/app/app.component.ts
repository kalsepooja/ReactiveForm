import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validators';
import { Icountry } from './shared/model/country';
import { COUNTRIES_META_DATA } from './shared/const/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ReactiveForm';
  signUpForm !:  FormGroup;
  CountryInfo: Array<Icountry> = []
  constructor(){

  }
  ngOnInit(): void {
    this.CountryInfo = COUNTRIES_META_DATA;
    this.CreateSignUpForm();

    console.log(this.signUpForm.value);
    
  }

  CreateSignUpForm(){
    this.signUpForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.username)]),
      email: new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.email)]),
      empId: new FormControl(null, [Validators.required]),
      gender: new FormControl(null),
      currentAdress: new FormGroup({
        country: new FormControl('India', [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        zipCode: new FormControl(null, [Validators.required])
      }),
      permenentAdress: new FormGroup({
        country: new FormControl(null, [Validators.required]),
        state: new FormControl(null, [Validators.required]),
        city: new FormControl(null, [Validators.required]),
        zipCode: new FormControl(null, [Validators.required])
      }),
      isAddressSame: new FormControl(null),
      password: new FormControl(null, [Validators.required, Validators.pattern(CustomRegex.password)]),
      comfirmPassword: new FormControl(null, [Validators.required])
    });
  }
  onSignUp(){
    console.log(this.signUpForm);
    console.log( this.signUpForm.value);
   
   
  }
}
