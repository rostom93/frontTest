import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Ng2SmartTableModule} from "ng2-smart-table";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcome/welcome.component'; 
import { DashbordComponent } from './components/dashboard/dashboard.component';
import { CarouselComponent } from './components/welcome/carousel/carousel.component';
import { LoginComponent } from './components/welcome/login/login.component'; 

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashbordComponent,
    CarouselComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   Ng2SmartTableModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
