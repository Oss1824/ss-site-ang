import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app.routing';
import { LandingModule } from './modules/landing/landing.module';
import { PeopleModule } from './modules/people/people.module';
import { ContactUsModule } from './modules/contact-us/contact-us.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutUsModule } from './modules/about-us/about-us.module';
import { CsrModule } from './modules/csr/csr.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    NgbModule,
    RouterModule,
    CoreModule,
    AppRoutingModule,
    LandingModule,
    PeopleModule,
    ContactUsModule,
    ProjectsModule,
    AboutUsModule,
    CsrModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
