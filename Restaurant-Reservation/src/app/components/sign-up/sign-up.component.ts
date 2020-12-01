import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClickSignUp(dataForm){
    const jsonValue = JSON.stringify(dataForm);
    this.http.post<any>('http://localhost:5000/user/add', jsonValue, {headers: {'Content-Type': 'application/json'}}).subscribe({
        next: data => {
          console.log(data);
          alert('Successfully Created User Profile');
          this.router.navigate(['bookingPage']);
        },
        error: error => {
            console.error('There was an error!', error);
            alert('Failed To Create User');
        }
    });
  }
}
