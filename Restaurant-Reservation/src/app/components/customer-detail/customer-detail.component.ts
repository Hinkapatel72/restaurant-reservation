import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.css']
})
export class CustomerDetailComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  goToConfirmationPage(dataForm) {
    const jsonValue = JSON.stringify(dataForm);
    console.log(jsonValue);
    this.http.post<any>('http://localhost:5000/user/reserve', jsonValue, {headers: {'Content-Type': 'application/json'}}).subscribe({
      next: data => {
        console.log(data);
        alert('Reservation Completed');
        this.router.navigate(['ConfirmationPage']);
      },
      error: error => {
        console.error('There was an error!', error);
        alert('Failed To Create User');
      }
    });
  }
}
