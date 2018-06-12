import { Component, OnInit } from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-listgeniune',
  templateUrl: './listgeniune.component.html',
  styleUrls: ['./listgeniune.component.css']
})
export class ListgeniuneComponent implements OnInit {
  genuines: Genuine[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGenuine()
      .subscribe(genuines => this.genuines = genuines);
  }

}
