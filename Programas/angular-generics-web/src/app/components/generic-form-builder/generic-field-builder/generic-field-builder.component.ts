import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-generic-field-builder',
  templateUrl: './generic-field-builder.component.html',
  styleUrls: ['./generic-field-builder.component.css']
})
export class GenericFieldBuilderComponent implements OnInit {

  @Input() field:any;
  @Input() form:any;
  
  get isValid() { return this.form.controls[this.field.name].valid; }
  get isDirty() { return this.form.controls[this.field.name].dirty; }

  constructor() { }

  ngOnInit() {
  }

}
