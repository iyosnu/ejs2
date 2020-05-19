import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';

import { TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';
import { ColorPickerAllModule } from '@syncfusion/ej2-angular-inputs';
import { AddpersonComponent } from './person/addperson/addperson.component';
import { Display1Component } from './display1/display1.component';
import { PersonComponent } from './person/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AddpersonComponent,
    Display1Component,
    PersonComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextBoxAllModule,
    ColorPickerAllModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
