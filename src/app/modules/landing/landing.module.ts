import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LandingComponent } from './landing.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [HeaderComponent, LandingComponent],
})
export class LandingModule {}
