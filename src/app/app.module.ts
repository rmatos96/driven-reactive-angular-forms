import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DrivenComponent } from './components/driven/driven.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { DiretivaDirective } from './directives/diretiva.directive';
import { DialogComponent } from './components/dialog/dialog.component';
import { Dialog2Component } from './components/dialog2/dialog2.component';

@NgModule({
  declarations: [
    AppComponent,
    DrivenComponent,
    ReactiveComponent,
    DiretivaDirective,
    DialogComponent,
    Dialog2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
