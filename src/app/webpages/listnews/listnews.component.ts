import {Component, OnInit, Output} from '@angular/core';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {
  public string = 'news';
  constructor(private dataService: DataService) { }

  getNews() {
  }
  ngOnInit() {
  }


}
