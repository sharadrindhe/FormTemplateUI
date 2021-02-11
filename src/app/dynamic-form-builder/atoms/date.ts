import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'date',
    template: `
      <div [formGroup]="form">
        <div [formGroupName]="field.name" >
           
          <label class="form-check-label">
             <input  class="form-check-input" type="date" id="date" value="field.value" />
             {{field.label}}</label>
          </div>
        

      </div> 
    `
})
export class DateComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}