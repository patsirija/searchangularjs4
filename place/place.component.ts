import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  eapm() {
    this.router.navigate(['eapm']); 
  }
  search() {
    this.router.navigate(['search']); 
  } 
}
