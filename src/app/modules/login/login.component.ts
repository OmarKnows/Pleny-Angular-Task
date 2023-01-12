import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { loginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private loginService: loginService, private router: Router) {}

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const { email, password } = form.value;
    this.loginService.login(email, password).subscribe(
      (res) => {
        console.log(res);
        this.router.navigate(['/products']);
      },
      (err) => {
        console.log(err);
      }
    );
    form.reset();
  }
}
