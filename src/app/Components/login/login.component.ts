import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hide: boolean = true;
  isActive:boolean = true;
  loginForm!:FormGroup;
  submitted = false;
  value:any;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formbuilder.group({
      emailId: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });
  }

  get f() { return this.loginForm.controls;}

  onSubmit(){
    this.submitted = true;
    if(this.loginForm.invalid)
    {
    this.isActive = false;
    return;
    }
    this.isActive = true;
    console.log(this.loginForm.value);
  }




}
