import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stoploss',
  templateUrl: './stoploss.component.html',
  styleUrls: ['./stoploss.component.scss']
})
export class StoplossComponent implements OnInit {

  boxsize = 2;
  open = 100;

  constructor() { }

  ngOnInit() {
  }

}
