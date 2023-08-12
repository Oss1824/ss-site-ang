import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { LandingComponent } from './modules/landing/landing.component';
import { PeopleComponent } from './modules/people/people.component';
import { ProjectsComponent } from './modules/projects/projects.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { CompletedProjectsComponent } from './modules/projects/completed-projects/completed-projects.component';
import { CurrentProjectsComponent } from './modules/projects/current-projects/current-projects.component';
import { CsrComponent } from './modules/csr/csr.component';
import { AboutUsComponent } from './modules/about-us/about-us.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: LandingComponent },
        { path: 'people', component: PeopleComponent },
        { path: 'contact-us', component: ContactUsComponent },
        { path: 'csr', component: CsrComponent },
        { path: 'about-us', component: AboutUsComponent },
        {
          path: 'projects',
          component: ProjectsComponent,
          loadChildren: () =>
            import('./modules/projects/projects.module').then(
              (m) => m.ProjectsModule
            ),
        },
        { path: '**', component: NotFoundComponent },
      ],
      {
        useHash: true,
      }
    ),
  ],
  exports: [],
})
export class AppRoutingModule {}
