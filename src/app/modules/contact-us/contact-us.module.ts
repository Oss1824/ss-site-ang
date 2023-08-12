import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  imports: [CommonModule, FormsModule, NgbModule],
  declarations: [ContactUsComponent],
})
export class ContactUsModule {}
