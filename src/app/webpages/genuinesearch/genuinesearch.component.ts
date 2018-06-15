import {Component, Input, OnInit} from '@angular/core';
import {Genuine} from '../../entities/Genuine';

@Component({
  selector: 'app-genuinesearch',
  templateUrl: './genuinesearch.component.html',
  styleUrls: ['./genuinesearch.component.css']
})
export class GenuinesearchComponent implements OnInit {
  public string = 'genuine';
  public edit = '/genuine/edit/';
  public delete = '/genuine/delete/';
  @Input() genuines: Genuine[];

  constructor() { }

  receiveMessage($event) {
    this.genuines = $event;
  }

  ngOnInit() {
  }

}
