import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomRegex } from './shared/const/validators';
import { Icountry } from './shared/model/country';
import { COUNTRIES_META_DATA } from './shared/const/country';
import { __values } from 'tslib';
import { NoSpaceValidator } from './shared/validations/noSpace';
import { empIdValidator } from './shared/validations/empIdValidator';

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
      userName: new FormControl(null, [Validators.required, 
        Validators.pattern(CustomRegex.username),
        Validators.minLength(5),
        Validators.maxLength(8),
        NoSpaceValidator.noSpace
      ]),
      email: new FormControl(null,[Validators.required, Validators.pattern(CustomRegex.email)]),
      empId: new FormControl(null, [Validators.required, empIdValidator.idValidator]),
      gender: new FormControl(null),
      skills: new FormArray([new FormControl(null), new FormControl(null)]),
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
      comfirmPassword: new FormControl({value: null, disabled: true}, [Validators.required])
    });
  }
  onSignUp(){
    console.log(this.signUpForm);
    console.log( this.signUpForm.value);
  };

  get f(){
    return this.signUpForm.controls
  }

  get getUserName(){
    return this.signUpForm.get("userName") as FormControl
  }

  get skillsFormArray(){
    return this.signUpForm.get('skills') as FormArray
  };

  onSkillAdd(){
   if(this.skillsFormArray.length < 5){
    let skillControl = new FormControl(null, [Validators.required]);
    this.skillsFormArray.push(skillControl)
   }
  };
  onSkillRemove(i: number){
    this.skillsFormArray.removeAt(i)
  }
}
