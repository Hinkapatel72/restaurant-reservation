import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { SeatingTypeComponent } from './components/seating-type/seating-type.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { ConfirmedReservationComponent } from './components/confirmed-reservation/confirmed-reservation.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'bookingPage', component: BookingPageComponent},
  { path: 'seatingTypePage', component: SeatingTypeComponent},
  { path: 'CustomerDetailPage', component: CustomerDetailComponent},
  { path: 'ConfirmationPage', component: ConfirmedReservationComponent},
  { path: 'SigninPage', component: SignInComponent},
  { path: 'SignupPage', component: SignUpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
