import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { BasketService } from '../services/basket.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm = this.fb.group({
    login: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private basketService: BasketService,
    private router: Router,
    public dialogRef: MatDialogRef<LoginComponent>
  ){}

  login(){
    if((this.loginForm.value.login == 'admin') && (this.loginForm.value.password == 'admin')){
      this.router.navigate(['/gerant']);
      this.dialogRef.close();
    }else{
      this.basketService.login(
        this.loginForm.value.login!,
        this.loginForm.value.password!
      ).subscribe((data) => {
        console.log(data)
      })
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
