import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-login',
  templateUrl: './signup-login.component.html',
  styleUrls: ['./signup-login.component.scss']
})
export class SignupLoginComponent implements OnInit {

  show:boolean=false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login()
  {
    this.show = false;
    this.router.navigateByUrl('');
  }

  signup()
  {
    this.show = true;
    this.router.navigateByUrl('singup');
  }

}
