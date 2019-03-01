import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
 employees : Employee[]=[
   {
    id: 10,
    name: "gaurv",
    gender: 'male', 
    email: 'gouravthakur0000@gmail.com',
    contactPreference: 'dhanno',
    dateOfBirth:new Date('06/19/1995'),
    department: "it",
    isActive: true,
    photoPath: 'assets/Images/emp1.png'
   },
   {
    id: 2,
    name: 'Sourav',
    gender: 'male', 
    email: 'souravthakur0000@gmail.com',
    phoneNumber : 9630113752,
    contactPreference: 'dhanno',
    dateOfBirth:new Date('02/26/1999'),
    department: "Agri",
    isActive: true,
    photoPath: 'assets/Images/emp2.png'
   },
   {
    id: 3,
    name: 'Rakesh',
    gender: 'male', 
    email: 'rakeshthakur0000@gmail.com',
    phoneNumber : 9630113752,
    contactPreference: 'dhanno',
    dateOfBirth:new Date('07/21/1997'),
    department: "it",
    isActive: true,
    photoPath: 'assets/Images/emp4.png'
   },
  ];
  constructor() { }

  ngOnInit() {
  }

}
