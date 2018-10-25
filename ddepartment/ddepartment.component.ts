import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-ddepartment',
  templateUrl: './ddepartment.component.html',
  styleUrls: ['./ddepartment.component.css']
})
export class DdepartmentComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  inlist() {
    this.router.navigate(['inlist']); 
  } 
  dddepartment() {
    this.router.navigate(['dddepartment']); 
  } 
}
