import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CustomFormComponent } from './components/custom-form/custom-form.component';
import { CancallableInputComponent } from './components/demo1/cancallable-input/cancallable-input.component';
import { CustomSelectComponent } from './components/demo1/custom-select/custom-select.component';
import { CancallableSelectComponent } from './components/demo2/cancallable-select/cancallable-select.component';
import { ConfirmationService } from './services/confirmation.service';


@NgModule({
  declarations: [
    AppComponent,
    CustomFormComponent,
    CancallableInputComponent,
    CustomSelectComponent,
    CancallableSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
