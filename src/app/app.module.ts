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
import { StatComponent } from './components/dashboard/stat/stat.component'; 
import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    DashbordComponent,
    CarouselComponent,
    LoginComponent,
    StatComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
   Ng2SmartTableModule,
   ChartsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
