import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatSelectModule
    ],
    exports: [
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatCardModule,
        MatListModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatSnackBarModule,
        MatSelectModule
    ]
})

export class MaterialModule { }