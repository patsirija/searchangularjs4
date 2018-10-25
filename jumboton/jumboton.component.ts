import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-jumboton',
  templateUrl: './jumboton.component.html',
  styleUrls: ['./jumboton.component.css']
})
export class JumbotonComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }
  home2() {
    this.router.navigate(['home2']); 
  }
  home3() {
    this.router.navigate(['home3']); 
  }
  place() {
    this.router.navigate(['place']); 
}
  search() {
  this.router.navigate(['search']); 
} 
department() {
  this.router.navigate(['department']); 
}
}
