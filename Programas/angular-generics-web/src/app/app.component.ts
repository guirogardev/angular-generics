import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { urlValidator, requiredValidator } from 'src/assets/utils/validators';
import { GenericFormBuilderComponent } from './components/generic-form-builder/generic-form-builder.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(GenericFormBuilderComponent) formulario: GenericFormBuilderComponent;
  public form: FormGroup;
  unsubcribe: any

  public fields: any[] = [
    {
      type: 'text',
      name: 'firstName',
      label: 'First Name',
      value: '',
      required: true,
      validation: [requiredValidator, urlValidator],
      validationMsg: [
        {key: 'requiredValidator', message: 'requerido'},
        {key: 'urlValidator', message: 'urlMal'}
      ]
    },
    {
      type: 'text',
      name: 'lastName',
      label: 'Last Name',
      value: '',
      required: true,
    },
    {
      type: 'text',
      name: 'email',
      label: 'Email',
      value: '',
      required: true,
    },

    {
      type: 'file',
      name: 'picture',
      label: 'Picture',
      required: true,
      onUpload: this.onUpload.bind(this)
    },
    {
      type: 'dropdown',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'in', label: 'India' },
        { key: 'us', label: 'USA' }
      ]
    },
    {
      type: 'radio',
      name: 'country',
      label: 'Country',
      value: 'in',
      required: true,
      options: [
        { key: 'm', label: 'Male' },
        { key: 'f', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      name: 'hobby',
      label: 'Hobby',
      required: true,
      options: [
        { key: 'f', label: 'Fishing' },
        { key: 'c', label: 'Cooking' }
      ]
    }
  ];

  constructor() {
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDestroy() {
    this.unsubcribe();
  }

  verForm() {
    console.log(this.formulario.form);
  }
}
