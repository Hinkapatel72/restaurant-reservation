import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FooterComponent } from './components/footer/footer.component';
import { BookingPageComponent } from './components/booking-page/booking-page.component';
import { SeatingTypeComponent } from './components/seating-type/seating-type.component';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { ConfirmedReservationComponent } from './components/confirmed-reservation/confirmed-reservation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingPageComponent,
    FooterComponent,
    BookingPageComponent,
    SeatingTypeComponent,
    CustomerDetailComponent,
    ConfirmedReservationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
