import { Component, OnInit } from '@angular/core';
import { brand } from '../../models/brand';
import { BrandService } from '../../services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrl: './brand.component.css'
})
export class BrandComponent implements OnInit {

 brands:brand[]=[];
 dataLoaded= false;
  
  constructor(private brandService:BrandService) {
    
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=> {
       this.brands=response.data
       this.dataLoaded=true
    })
  }

}
