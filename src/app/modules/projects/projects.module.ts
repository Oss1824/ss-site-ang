import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ProjectsComponent } from './projects.component';
import { FormsModule } from '@angular/forms';
import { CurrentProjectsComponent } from './current-projects/current-projects.component';
import { CompletedProjectsComponent } from './completed-projects/completed-projects.component';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    CurrentProjectsComponent,
    CompletedProjectsComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'current-projects',
        pathMatch: 'full',
      },
      {
        path: 'current-projects',
        component: CurrentProjectsComponent,
      },
      {
        path: 'completed-projects',
        component: CompletedProjectsComponent,
      },
    ]),
  ],
})
export class ProjectsModule {}
