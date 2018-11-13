import { Component, OnInit } from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {DataService} from '../../services/data.service';
import {GameInfo} from '../../entities/GameInfo';
import {Update} from '../../entities/Update';
import {ActivatedRoute, Router} from '@angular/router';
import {NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addgameinfo',
  templateUrl: './addgameinfo.component.html',
  styleUrls: ['./addgameinfo.component.css']
})
export class AddgameinfoComponent implements OnInit {
  public string = 'gameInfo';
  gameInfoToAdd = new GameInfo;
  public timeFromFormat;
  public timeToFormat;
  timeFromhms: NgbTimeStruct;
  timeTohms: NgbTimeStruct;
  meridianA = true;
  meridianB = true;
  newDateA: Date;
  newDateB: Date;
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  toggleMeridianA() {
    this.meridianA = !this.meridianA;
  }
  toggleMeridianB() {
    this.meridianB = !this.meridianB;
  }

  onSubmit() {
    this.newDateA = new Date();
    this.newDateA.setFullYear(this.timeFromFormat.year,
      this.timeFromFormat.month - 1,
      this.timeFromFormat.day);
    this.newDateA.setHours(this.timeFromhms.hour,  this.timeFromhms.minute, 0, 0);

    const now = Date.now();
    const diffinhoursA: number = this.newDateA.getTime() - now;

    this.newDateB = new Date();
    this.newDateB.setFullYear(this.timeToFormat.year,
      this.timeToFormat.month - 1,
      this.timeToFormat.day);
    this.newDateB.setHours(this.timeTohms.hour,  this.timeTohms.minute, 0 , 0);

    const diffinhoursB: number = this.newDateA.getTime() - now;
    const betweenTime: number = this.newDateB.getTime() - this.newDateA.getTime();
    if (diffinhoursA <= 0) {
      this.messageTitle = '公告时间错误';
      this.messageBody = '选取时间早于当前时间';
    } else if (diffinhoursB <= 0) {
      this.messageTitle = '公告时间错误';
      this.messageBody = '选取时间早于当前时间';
    } else if (betweenTime <= 0) {
      this.messageTitle = '公告时间错误';
      this.messageBody = '选取截止时间早于选取的起始时间';
    } else {
      this.gameInfoToAdd.timeFrom = this.newDateA.toISOString();
      this.gameInfoToAdd.timeTo = this.newDateB.toISOString();
      const errorMessage = this.dataService.addGameInfo(this.gameInfoToAdd);
      if (errorMessage === '') {
        this.messageTitle = '成功添加原创文章';
        this.messageBody = '已成功向数据库添加一条新的公告';
        this.succeeded = true;
      } else {
        this.messageTitle = '出现错误';
        this.messageBody = errorMessage;
      }
    }






  }

}
