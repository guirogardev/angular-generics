import { Component, OnInit, Input } from '@angular/core';
import { objectToMap } from 'src/assets/utils/converters';

@Component({
  selector: 'app-generic-field-builder',
  templateUrl: './generic-field-builder.component.html',
  styleUrls: ['./generic-field-builder.component.css']
})
export class GenericFieldBuilderComponent {

  @Input() field: any;
  @Input() form: any;

  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }
  get isTouched() { return this.form.controls[this.field.name].touched; }

  constructor() { }

  getErrors(): Map<any, any> {
    const errors = this.form.controls[this.field.name].errors;
    return objectToMap(errors);
  }

  getValidationMessage(error: any): string {
    return this.field.validationMsg.find(vm => vm.key === error.key).message;
  }

}
