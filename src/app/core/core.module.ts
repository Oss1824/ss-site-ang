import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [BrowserModule, NgbModule, RouterModule],
  declarations: [NavbarComponent, FooterComponent],
  exports: [FooterComponent, NavbarComponent, BrowserModule],
})
export class CoreModule {}
