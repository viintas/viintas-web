import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {

  dataUser:any;
  listProducts:any;

  // firstFormGroup = this._formBuilder.group({
  //   firstCtrl: ['', Validators.required],
  // });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  constructor(private _formBuilder: FormBuilder) { }

  log(lol:any){
    console.log(lol);
  }
  ngOnInit(): void {;
    
  }
  dataUserForm(data:any){
    this.dataUser = data;
  }
  dataListProducts(data:any){
    this.listProducts = data;
  }

}
