import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder){
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      remember:[false]
    });

  }

  getControlName(controlName:string){
    const control = this.loginForm.controls[controlName]
    console.log(control.invalid && control.touched)
    return control.invalid && control.touched;
  }

  
  onSubmit(){
  }

}
