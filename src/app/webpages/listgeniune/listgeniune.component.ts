import { Component, OnInit } from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-listgeniune',
  templateUrl: './listgeniune.component.html',
  styleUrls: ['./listgeniune.component.css']
})
export class ListgeniuneComponent implements OnInit {
  public string = 'genuine';
  public edit = '/genuine/edit/';
  public delete = '/genuine/delete/';
  genuines: Genuine[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getGenuineList()
      .subscribe(genuines => this.genuines = genuines);
  }

}
