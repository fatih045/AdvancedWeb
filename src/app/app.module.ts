import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HomeworkComponent } from './app/homework/homework.component';

import { NavbarComponent } from './app/navbar/navbar.component';
import { CourseComponent } from './app/course(ngfor)/course.component';
import {FormsModule} from "@angular/forms";
import { UserComponent } from './models/user/user.component';
import {CustomerService} from "./app/course(ngfor)/customer.service";
import { NgIfComponent } from './ng-if/ng-if.component';


@NgModule({
  declarations: [
    AppComponent,

    HomeworkComponent,

     NavbarComponent,
      CourseComponent,
      UserComponent,
      NgIfComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {




}
