import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private userauth : AuthserviceService) {}

  registerForm: any =  FormGroup;

  submitted = false;

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {

    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    if(this.submitted)
    {
      alert("Sucesso!!");
      this.router.navigate(['']);

      var myFormData = new FormData();
      myFormData.append('myemail', this.registerForm.value.email);
      myFormData.append('mypassword', this.registerForm.value.password);
      this.userauth.loginUser(myFormData);
    }

  }
}
