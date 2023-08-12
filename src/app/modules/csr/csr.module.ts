import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CsrComponent } from './csr.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CsrComponent],
  imports: [CommonModule, NgbModule],
})
export class CsrModule {}
