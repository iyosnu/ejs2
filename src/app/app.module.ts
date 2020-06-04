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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/register/register.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    AddpersonComponent,
    Display1Component,
    PersonComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TextBoxAllModule,
    ColorPickerAllModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
