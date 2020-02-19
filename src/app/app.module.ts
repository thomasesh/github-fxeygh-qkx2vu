import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalA } from './module-a';
import { AppComponent } from './app.component';

// Import PrimeNG modules

import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { DialogService } from 'primeng/api';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DynamicDialogModule,
    ModalA
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [DialogService],
})

export class AppModule { }
