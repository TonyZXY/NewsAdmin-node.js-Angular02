import { Component, OnInit } from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-listflash',
  templateUrl: './listflash.component.html',
  styleUrls: ['./listflash.component.css']
})
export class ListflashComponent implements OnInit {
  newsFlashes: NewsFlash[];
  message: string;
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getNewsflash().subscribe(newsFlashes => this.newsFlashes = newsFlashes);
  }

}
