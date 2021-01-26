import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
// import {IvyCarouselModule} from 'angular-responsive-carousel';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { WebComponent } from './portfolio/web/web.component';
import { PrintComponent } from './portfolio/print/print.component';
import { PhotoComponent } from './portfolio/photo/photo.component';
import { RouterModule, Routes } from '@angular/router';
import { ReferComponent } from './refer/refer.component';
import { from } from 'rxjs';

const appRoutes: Routes = [
  {path: '', component: LandingPageComponent },
  {path: 'web', component: WebComponent },
  {path: 'print', component: PrintComponent },
  {path: 'photo', component: PhotoComponent },
  {path: 'portfolio', component: PortfolioComponent },
  {path: 'about-me', component: AboutMeComponent },
  {path: 'contact', component: ContactComponent },
  {path: 'refer', component: ReferComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    PortfolioComponent,
    AboutMeComponent,
    ContactComponent,
    FooterComponent,
    WebComponent,
    PrintComponent,
    PhotoComponent,
    ReferComponent
    // IvyCarouselModule
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
