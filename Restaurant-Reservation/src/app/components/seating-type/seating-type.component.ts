import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seating-type',
  templateUrl: './seating-type.component.html',
  styleUrls: ['./seating-type.component.css']
})
export class SeatingTypeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToDetailPage(){
    this.router.navigate(['CustomerDetailPage']);
  }

}
