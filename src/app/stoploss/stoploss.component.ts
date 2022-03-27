import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stoploss',
  templateUrl: './stoploss.component.html',
  styleUrls: ['./stoploss.component.scss']
})
export class StoplossComponent implements OnInit {

  boxsize = 2;
  open = 100;

  boxsize1 = 2;
  open1 = 100;

  constructor() { }

  ngOnInit() {
  }

}
