import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { SeatingTypeComponent } from './components/seating-type/seating-type.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';


const routes: Routes = [
  { path: 'landingPage', component: LandingPageComponent },
  { path: '', component: LandingPageComponent },
  { path: 'bookingPage', component: BookingPageComponent},
  { path: 'seatingTypePage', component: SeatingTypeComponent},
  { path: 'CustomerDetailPage', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
