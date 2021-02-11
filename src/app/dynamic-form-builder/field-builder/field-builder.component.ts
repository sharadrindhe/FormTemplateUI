import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'field-builder',
  template: `
  <div class="form-group row" [formGroup]="form">
    <label class="col-md-3 form-control-label" [attr.for]="field.label">
      {{field.label}}
      <strong class="text-danger" *ngIf="field.required">*</strong>
    </label>
    <div class="col-md-9" [ngSwitch]="field.type">
    
    <input *ngSwitchCase="'text'" class="form-control"  type="text" id="fname" name="fname"> 
     
     <input *ngSwitchCase="'file'" class="form-control"  type="file" id="file" name="file"> 
     <input *ngSwitchCase="'checkbox'"  type="checkbox" id="field.name" name="field.name" value="field.value">
     <input *ngSwitchCase="'date'" class="form-control"  type="date" id="field.name" name="field.name" value="field.value">
      
    
    </div>
  </div>
  `
})
export class FieldBuilderComponent implements OnInit {
  @Input() field:any;
  @Input() form:any;
  
  // get isValid() { return this.form.controls[this.field.name].valid; }
  // get isDirty() { return this.form.controls[this.field.name].dirty; }

 get isValid() { return true; }
  get isDirty() { return true; }
  

  constructor() { }

  ngOnInit() {
  }

}
