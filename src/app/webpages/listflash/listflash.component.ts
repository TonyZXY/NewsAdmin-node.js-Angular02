import {Component, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-listflash',
  templateUrl: './listflash.component.html',
  styleUrls: ['./listflash.component.css']
})
export class ListflashComponent implements OnInit {
  public string = 'flash';
  public edit = '/flash/edit/';
  public delete = '/flash/delete/';
  newsFlashes: NewsFlash[];

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getNewsflashList()
      .subscribe(newsFlashes => this.newsFlashes = newsFlashes);
  }

}
