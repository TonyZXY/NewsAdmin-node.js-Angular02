import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-genuinehome',
  templateUrl: './genuinehome.component.html',
  styleUrls: ['./genuinehome.component.css']
})
export class GenuinehomeComponent implements OnInit {
  public string = 'genuine';
  public str = '原创';
  constructor() { }

  ngOnInit() {
  }

}
