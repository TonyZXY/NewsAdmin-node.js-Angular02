import { Component, OnInit } from '@angular/core';
import {News} from '../../entities/News';

@Component({
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css']
})
export class NewseditComponent implements OnInit {

  newsEdit: News

  constructor() { }

  ngOnInit() {
  }

}
