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
  public dateStartFormat;
  date: string;
  newDate: Date;
  time = {hour: 13, minute: 30};
  meridian = true;
  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  toggleMeridian() {
      this.meridian = !this.meridian;
  }

  onSubmit() {
    this.newDate = new Date();
    this.newDate.setFullYear(this.dateStartFormat.year,
      this.dateStartFormat.month - 1,
        this.dateStartFormat.day);
    this.newDate.setHours(this.time.hour,  this.time.minute, 0, 0);
    this.activityToAdd.eventStartTime = this.newDate.toISOString();
    this.activityToAdd.eventID = (Math.random()).toString(36).substr(2, 9);
    this.activityToAdd.custom = true;

    const errorMessage = this.dataService.addActivity(this.activityToAdd);
    if (errorMessage === '') {
      this.messageTitle = '成功添加活动';
      this.messageBody = '已成功向数据库添加一条新的活动';
      this.succeeded = true;
    } else {
      this.messageTitle = '出现错误';
      this.messageBody = errorMessage;
    }
  }
}
