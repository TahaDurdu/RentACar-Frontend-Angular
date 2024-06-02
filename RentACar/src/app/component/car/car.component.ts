import { Component, OnInit } from '@angular/core';
import { Car } from '../../models/car';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})
export class CarComponent implements OnInit {



  constructor(private carService:CarService) {

  }
  dataLoaded=false
  cars:Car[]=[];


  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
      this.carService.getCar().subscribe(response=>{
        this.cars=response.data
        this.dataLoaded=true
      })
  }

}
