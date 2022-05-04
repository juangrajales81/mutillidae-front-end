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
import { OwaspVersionsComponent } from './owasp-versions/owasp-versions.component';
import { WebServicesComponent } from './web-services/web-services.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { LabsComponent } from './labs/labs.component';
import { GettingStartedComponent } from './getting-started/getting-started.component';
import { WhatShouldIDoComponent } from './what-should-i-do/what-should-i-do.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { VideoTutorialsComponent } from './video-tutorials/video-tutorials.component';
import { ListingOfVulnerabilitiesComponent } from './listing-of-vulnerabilities/listing-of-vulnerabilities.component';
import { HelpfulHintsAndScriptsComponent } from './helpful-hints-and-scripts/helpful-hints-and-scripts.component';
import { DonateComponent } from './donate/donate.component';
import { MutillidaeLdifFileComponent } from './mutillidae-ldif-file/mutillidae-ldif-file.component';
import { DropTlsComponent } from './drop-tls/drop-tls.component';
import { ResetDbComponent } from './reset-db/reset-db.component';
import { ViewLogComponent } from './view-log/view-log.component';
import { ToggleSecurityComponent } from './toggle-security/toggle-security.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CapturedDataComponent,
    OwaspVersionsComponent,
    WebServicesComponent,
    DocumentationComponent,
    LabsComponent,
    GettingStartedComponent,
    WhatShouldIDoComponent,
    HelpMeComponent,
    VideoTutorialsComponent,
    ListingOfVulnerabilitiesComponent,
    HelpfulHintsAndScriptsComponent,
    DonateComponent,
    MutillidaeLdifFileComponent,
    DropTlsComponent,
    ResetDbComponent,
    ViewLogComponent,
    ToggleSecurityComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path:'home', component: HomeComponent },
      { path:'login', component: LoginComponent },
      { path:'signup', component: SignupComponent },
      { path:'owasp-versions', component: OwaspVersionsComponent },
      { path:'web-services', component: WebServicesComponent },
      { path:'captured-data', component: CapturedDataComponent },
      { path:'documentation', component: DocumentationComponent },
      { path:'labs', component: LabsComponent },
      { path:'', redirectTo: 'home', pathMatch:'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
