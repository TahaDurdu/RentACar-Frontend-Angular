import { Component, OnInit } from '@angular/core';
import { color } from '../../models/color';
import { ColorService } from '../../services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrl: './color.component.css'
})
export class ColorComponent implements OnInit {

  colors:color[]=[]
  dataLoaded=false;
 
  constructor(private colorsercive:ColorService) {
    
    
  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    this.colorsercive.getColors().subscribe(response=>
      {
        this.colors=response.data
        this.dataLoaded=true
      }
    )
  }

}
