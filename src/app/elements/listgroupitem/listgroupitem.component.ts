import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listgroupitem',
  templateUrl: './listgroupitem.component.html',
  styleUrls: ['./listgroupitem.component.css']
})
export class ListgroupitemComponent implements OnInit {
  private time = '';
  private labelTitle = '';

  constructor() { }

  ngOnInit() {
    this.time = '15:00:45, 5/6/2018';
    this.labelTitle = 'Test for label';
  }

}
