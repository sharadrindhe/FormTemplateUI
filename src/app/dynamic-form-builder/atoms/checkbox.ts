import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'checkbox',
    template: `
      <div [formGroup]="form">
        <div [formGroupName]="field.name" >
           
          <label class="form-check-label">
             <input [formControlName]="field.value" class="form-check-input" type="checkbox" id="inlineCheckbox1" value="field.value" />
             {{field.label}}</label>
          </div>
        

      </div> 
    `
})
export class CheckBoxComponent {
    @Input() field:any = {};
    @Input() form:FormGroup;
    get isValid() { return this.form.controls[this.field.name].valid; }
    get isDirty() { return this.form.controls[this.field.name].dirty; }
}