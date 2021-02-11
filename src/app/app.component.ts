import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {AppService}  from './app.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Template';
  public form: FormGroup;
  unsubcribe: any
   public fields: any[] = [];
  // public fields: any[] = [
  //   {
  //     type: 'text',
  //     name: 'firstName',
  //     label: 'First Name',
  //     value: '',
  //     required: true,
  //   },
  //   {
  //     type: 'text',
  //     name: 'lastName',
  //     label: 'Last Name',
  //     value: '',
  //     required: true,
  //   },
  //   {
  //     type: 'text',
  //     name: 'email',
  //     label: 'Email',
  //     value: '',
  //     required: true,
  //   },

  //   {
  //     type: 'file',
  //     name: 'picture',
  //     label: 'Picture',
  //     required: true,
  //     onUpload: this.onUpload.bind(this)
  //   },
  //   {
  //     type: 'date',
  //     name: 'date',
  //     label: 'date',
  //     required: true
  //   },
  //   // {
  //   //   type: 'dropdown',
  //   //   name: 'country',
  //   //   label: 'Country',
  //   //   value: 'in',
  //   //   required: true,
  //   //   options: [
  //   //     { key: 'in', label: 'India' },
  //   //     { key: 'us', label: 'USA' }
  //   //   ]
  //   // },
  //   // {
  //   //   type: 'radio',
  //   //   name: 'country',
  //   //   label: 'Country',
  //   //   value: 'in',
  //   //   required: true,
  //   //   options: [
  //   //     { key: 'm', label: 'Male' },
  //   //     { key: 'f', label: 'Female' }
  //   //   ]
  //   // },
  //   // {
  //   //   type: 'checkbox',
  //   //   name: 'hobby',
  //   //   label: 'Hobby',
  //   //   required: true,
  //   //   options: [
  //   //     { key: 'f', label: 'Fishing' },
  //   //     { key: 'c', label: 'Cooking' }
  //   //   ]
  //   // }
  // ];
  constructor(private appService : AppService , private httpClient: HttpClient) {
    this.httpClient.get('http://localhost:8091/api/formtemplate/all/2').subscribe((data: any[])=>{
      console.log(data);
     this.fields = data; 
    })  

    // this.httpClient.get('http://localhost:8091/api/formtemplate/alltemplate/2').subscribe((data: any[])=>{
    //   console.log(data);
    //  this.fields = data; 
    // })  

var json = JSON.stringify(this.fields);
    this.form = new FormGroup({
      fields: new FormControl(JSON.stringify(this.fields))
    })
    this.unsubcribe = this.form.valueChanges.subscribe((update) => {
      console.log(update);
      this.fields = JSON.parse(update.fields);
    });
  }

  ngOnInit(): void {
    

  }
  onUpload(e) {
    console.log(e);

  }

  getFields() {
    return this.fields;
  }

  ngDistroy() {
    this.unsubcribe();
  }
}
