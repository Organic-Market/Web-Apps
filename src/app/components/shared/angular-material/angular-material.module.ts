import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { matDialogAnimations, MatDialogModule} from '@angular/material/dialog';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';

import {
  DateAdapter,
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { CustomDateAdapter } from './custom-adapter';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTabsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatListModule

  ],
  exports:[
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatSelectModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatCardModule,
    MatGridListModule,
    MatMenuModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatDialogModule,
    MatDatepickerModule,
    MatTabsModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatListModule
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    { provide: DateAdapter, useClass: CustomDateAdapter },
  ],
  
})
export class AngularMaterialModule { }
