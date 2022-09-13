import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBadgeModule } from '@angular/material/badge';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
const materialModules = [
  MatCardModule,
  MatButtonModule,
  MatDialogModule,
  MatToolbarModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatInputModule,
  MatFormFieldModule,
  FormsModule,
  ReactiveFormsModule,
  MatStepperModule,
  MatIconModule,
  MatBadgeModule
];

@NgModule({
  declarations: [
    // ...pipes
  ],
  imports: [
    CommonModule,
    ...materialModules,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  exports: [
    ...materialModules,
    FormsModule
  ],
})
export class MaterialModule { }
