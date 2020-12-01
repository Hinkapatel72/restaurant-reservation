import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  onClickSignIn(dataForm){
    const jsonValue = JSON.stringify(dataForm);
    this.http.post<any>('http://localhost:5000/user/login', jsonValue, {headers: {'Content-Type': 'application/json'}}).subscribe({
        next: data => {
          console.log(data);
          alert('SignIn Success');
          this.router.navigate(['bookingPage']);
        },
        error: error => {
            console.error('There was an error!', error);
            alert('Login Failed: Incorrect Email or Password - If you are new user, please signup');
        }
    });
  }
}
