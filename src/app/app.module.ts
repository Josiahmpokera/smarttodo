import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './views/auth/login/login.component';
import { CreateAccountComponent } from './views/auth/create-account/create-account.component';
import { HomeComponent } from './views/home/home.component';
import { SplashComponent } from './views/splash/splash.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HomeModule} from "./views/home/home.module";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    HomeComponent,
    SplashComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
