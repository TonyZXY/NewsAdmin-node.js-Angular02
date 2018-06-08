import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {News} from '../../entities/News';


@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {
  newss: News[];
  constructor(public dataService: DataService) { }

  getNews() {
    this.dataService.getNews()
      .subscribe(newss => this.newss = newss);
  }
  ngOnInit() {
    this.getNews();
  }


}
