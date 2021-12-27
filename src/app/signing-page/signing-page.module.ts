import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigningPageRoutingModule } from 'src/app/signing-page/signing-page-routing.module';
import { SigningPageComponent } from './signing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [SigningPageComponent],
  imports: [
    CommonModule,
    SigningPageRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatPseudoCheckboxModule,
    MatCheckboxModule,
    MatGridListModule,
    MatDividerModule
  ]
})
export class SigningPageModule {}
