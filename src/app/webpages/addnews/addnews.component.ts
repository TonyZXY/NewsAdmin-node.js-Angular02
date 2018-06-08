import { Component, OnInit } from '@angular/core';
import {News} from '../../entities/News';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {

  news: News;

  constructor() {
  }

  ngOnInit() {
  }

}
