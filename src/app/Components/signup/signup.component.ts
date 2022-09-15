import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  hide:boolean = false;
  issubmitted = false;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      fullname:['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      mobile:['', [Validators.required]],
    });
  }

  get f() { return this.signupForm.controls;}
  onSubmit(){
    this.issubmitted = true;
    if(this.signupForm.invalid)
    {
      return;
    }
    console.log(this.signupForm.value);
  }
}
