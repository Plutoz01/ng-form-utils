import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomFormComponent } from './demo1/custom-form/custom-form.component';
import { CancallableInputComponent } from './demo1/cancallable-input/cancallable-input.component';
import { CustomSelectComponent } from './demo1/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent,
    CancallableInputComponent,
    CustomSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
