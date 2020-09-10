import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormBuilderComponent } from './components/generic-form-builder/generic-form-builder.component';
import { GenericFieldBuilderComponent } from './components/generic-form-builder/generic-field-builder/generic-field-builder.component';
import { CheckboxComponent } from './components/generic-form-builder/elementos/checkbox/checkbox.component';
import { DropdownComponent } from './components/generic-form-builder/elementos/dropdown/dropdown.component';
import { TextboxComponent } from './components/generic-form-builder/elementos/textbox/textbox.component';
import { FileComponent } from './components/generic-form-builder/elementos/file/file.component';
import { RadioComponent } from './components/generic-form-builder/elementos/radio/radio.component';

@NgModule({
  declarations: [
    AppComponent,
    GenericFormBuilderComponent,
    GenericFieldBuilderComponent,
    CheckboxComponent,
    DropdownComponent,
    FileComponent,
    RadioComponent,
    TextboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
