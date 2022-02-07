import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-delta-module',
  templateUrl: './delta-module.component.html',
  styleUrls: ['./delta-module.component.scss']
})
export class DeltaModuleComponent implements OnInit {



  strike : number;
  qty = 100;
  delta = 0.50;
  nfchange : number;
  oldPrimPoints : number ;



  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){

    console.log( 'jasfjksd ')

  }

}
