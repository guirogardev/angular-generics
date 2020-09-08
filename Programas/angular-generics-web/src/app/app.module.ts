import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormBuilderComponent } from './components/generic-form-builder/generic-form-builder.component';
import { GenericFieldBuilderComponent } from './components/generic-form-builder/generic-field-builder/generic-field-builder.component';
import { TextBoxComponent } from './components/generic-form-builder/elementos/textbox';
import { DropDownComponent } from './components/generic-form-builder/elementos/dropdown';
import { CheckBoxComponent } from './components/generic-form-builder/elementos/checkbox';
import { FileComponent } from './components/generic-form-builder/elementos/file';
import { RadioComponent } from './components/generic-form-builder/elementos/radio';

@NgModule({
  declarations: [
    AppComponent,
    TextBoxComponent,
    DropDownComponent,
    CheckBoxComponent,
    FileComponent,
    RadioComponent,
    GenericFormBuilderComponent,
    GenericFieldBuilderComponent
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
