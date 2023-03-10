import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgsmService } from 'agsm';
import { Subscription } from 'rxjs';
import { authActionsService } from 'src/app/app-states/actions/auth/auth-action.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  authSubscription: Subscription;

  constructor(
    private agsm: AgsmService,
    private authActions: authActionsService
  ) {}

  ngOnInit(): void {
    console.log(this.authActions.isAuthenticated());

    this.authSubscription = this.agsm
      .stateSelector((state) => state.user)
      .subscribe((stateValue) => {});
  }

  onSubmit(form: NgForm) {
    if (form.invalid) return;

    const { email, password } = form.value;

    this.authActions.login(email, password);
    form.reset();
  }
}
