import {Component} from '@angular/core';
import {UserComponent} from "../../models/user/user.component";
import {CustomerService} from "./customer.service";

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',

  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  names: string [] = ["Ahmet ", "Mehmet ", "Hasan"]
  customers;
  constructor( service :CustomerService) {
    this.customers=service.getCustomer();


  }


}
