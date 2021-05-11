import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

export enum SidenavStatus {
  OPENED = 'opened',
  DISABLED = 'disabled',
  CLOSED = 'closed',
}

@Component({
  selector: 'bba-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Users Dashboard';

  links = [
    { path: '/', icon: 'home', title: 'home' },
    { path: '/users', icon: 'account_circle', title: 'users' },
  ];

  constructor() {}

  isAuthenticated$: Observable<boolean> = of(true);
  sidenavStatus = SidenavStatus.OPENED;
}
