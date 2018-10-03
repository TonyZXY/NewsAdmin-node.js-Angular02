import { Component, OnInit } from '@angular/core';
import {Activity} from '../../entities/Activity';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-addactivity',
  templateUrl: './addactivity.component.html',
  styleUrls: ['./addactivity.component.css']
})
export class AddactivityComponent implements OnInit {
  public string = 'activity';
  activityToAdd = new Activity;
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;
  constructor() { }

  ngOnInit() {
  }

  // onSubmit() {
  //   const errorMessage = this.dataService.addNewsFlash(this.newsFlashToAdd);
  //   if (errorMessage === '') {
  //     this.messageTitle = '成功添加快讯';
  //     this.messageBody = '已成功向数据库添加一条新的快讯';
  //     this.succeeded = true;
  //   } else {
  //     this.messageTitle = '出现错误';
  //     this.messageBody = errorMessage;
  //   }
  // }
}
