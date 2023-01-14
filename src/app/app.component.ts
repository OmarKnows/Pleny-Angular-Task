import { Component } from '@angular/core';
import { StoreService } from './app-states/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private store: StoreService) {}
  title = 'Pleny-Angular-Task';
}
