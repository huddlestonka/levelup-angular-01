import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './routing.module';
import { MaterialModule } from '@bba/material';
import { CoreStateModule } from '@bba/core-state';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserDetailsComponent,
    UsersListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    RoutingModule,
    MaterialModule,
    CoreStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
