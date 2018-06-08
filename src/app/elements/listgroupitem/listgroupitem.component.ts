import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-listgroupitem',
  templateUrl: './listgroupitem.component.html',
  styleUrls: ['./listgroupitem.component.css']
})
export class ListgroupitemComponent implements OnInit {
  time;
  labelTitle ;

  constructor() {
    this.time = '15:00:46, 5/6/2018';
    this.labelTitle = 'Text for test';
  }

  ngOnInit() {

  }

}
