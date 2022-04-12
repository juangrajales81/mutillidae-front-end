import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CapturedDataComponent } from './captured-data/captured-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CapturedDataComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent },
      { path:'login', component: LoginComponent },
      { path:'signup', component: SignupComponent },
      { path:'captured-data', component: CapturedDataComponent },
      { path:'', redirectTo: 'home', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
