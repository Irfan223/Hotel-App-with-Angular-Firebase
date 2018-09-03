import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './router.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { RoomsComponent } from './accommodation/rooms/rooms.component';
import { FoodAndDrinkComponent } from './food-and-drink/food-and-drink.component';
import { RestaurantsComponent } from './food-and-drink/restaurants/restaurants.component';
import { BarsComponent } from './food-and-drink/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { ResortsAndActivitiesComponent } from './lifestyle/resorts-and-activities/resorts-and-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { WeddingsAndCeremoniesComponent } from './weddings-and-ceremonies/weddings-and-ceremonies.component';
import { ThaiComponent } from './weddings-and-ceremonies/thai/thai.component';
import { WesternComponent } from './weddings-and-ceremonies/western/western.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { SigninComponent } from './authorization/signin/signin.component';
import { SignupComponent } from './authorization/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavListComponent } from './navigation/sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationComponent,
    RoomsComponent,
    FoodAndDrinkComponent,
    RestaurantsComponent,
    BarsComponent,
    LifestyleComponent,
    ResortsAndActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WellnessAndSpaComponent,
    WeddingsAndCeremoniesComponent,
    ThaiComponent,
    WesternComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthorizationComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    NavtabsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
