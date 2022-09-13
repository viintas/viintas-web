import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CitiesService } from '../../shared/services/cities.services';
import { MyErrorStateMatcher } from '../../shared/utils/myErrorStateMatcher.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  @Output() dataUserForm = new EventEmitter<any>();

  constructor(private _citiesServices: CitiesService) { }
  validatorOne: boolean = false;

  listCities: any[] = [];
  listMunicipalities: any[] = [];

  name = "";
  address = "";
  phone = "";
  email = "";
  cities = "";
  municipality = "";
  cedula = "";
  barrio = "";

  ngOnInit(): void {
    this.getMunicipalities();
    // this.listCities = ;
    //Cuando se valide el formulario se ejecuta la siguiente funcion
    //this.confirmInformation();

  }

  confirmInformation() {
    let information = {
      address: this.address,
      municipality: this.municipality,
      city: this.cities,
      barrio: this.barrio,
      //Este valor es la suma de todos los productos
      weightTotal: 0
    }
    this.dataUserForm.emit(information);
  }

  getMunicipalities() {
    this._citiesServices.getCities().subscribe(
      data => {
        data.forEach((element: any) => {
          this.listMunicipalities.push(element.departamento);
        });
      }
    )
  }

  getCities() {
    if (this.municipality != "") {
      this.listCities = [];
      this._citiesServices.getCities().subscribe(
        data => {
          let indexMunicipality = data.findIndex((element: any) => element.departamento == this.municipality)
          this.listCities = data[indexMunicipality].ciudades;
        }
      )
    }
  }

  validatorFormOne() {
    if (this.name != "" &&
      this.cities != "" &&
      this.email != "" &&
      this.phone != "") {
      this.validatorOne = true;
    } else {
      this.validatorOne = false;
    }
  }

  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  // matcher = new MyErrorStateMatcher();
}
