import { Injectable } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  form:FormGroup =new FormGroup({
    $key:new FormControl(null),
    fullName: new FormControl(''),
    email: new FormControl(''),
    mobile: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    isPermanent: new FormControl(false)
  }

  );
  intialFormGroup(){
    this.form.setValue({
      $key:null,
      fullName: '',
      email: '',
      mobile: '',
     city: '',
    gender: '',
    department: '',
    isPermanent: false

    })
  }
}
