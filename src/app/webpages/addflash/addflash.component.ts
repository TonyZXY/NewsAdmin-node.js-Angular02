import {Component, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';
import {NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-addflash',
  templateUrl: './addflash.component.html',
  styleUrls: ['./addflash.component.css']
})
export class AddflashComponent implements OnInit {
  public string = 'flash';
  newsFlashToAdd = new NewsFlash;
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;
  isSetClock = false;
  meridian = true;
  public dateStartFormat;
  newDate: Date;
  time: NgbTimeStruct;
  isTimeSetRight = true;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  toggleClock() {
    this.isSetClock = !this.isSetClock;
  }

  onSubmit() {
    if (!this.isSetClock) {
      const errorMessage = this.dataService.addNewsFlash(this.newsFlashToAdd);
      if (errorMessage === '') {
        this.messageTitle = '成功添加快讯';
        this.messageBody = '已成功向数据库添加一条新的快讯';
        this.succeeded = true;
      } else {
        this.messageTitle = '出现错误';
        this.messageBody = errorMessage;
      }
    } else {
      this.newDate = new Date();
      this.newDate.setFullYear(this.dateStartFormat.year,
        this.dateStartFormat.month - 1,
        this.dateStartFormat.day);
      this.newDate.setHours(this.time.hour,  this.time.minute, this.time.second, 0);

      const now = Date.now();
      const diffinhours: number = this.newDate.getTime() - now;
      if (diffinhours <= 0) {
        this.messageTitle = '定时发送时间错误';
        this.messageBody = '选取时间早于当前时间';
      } else {
        console.log(now);
        console.log(diffinhours);

        const errorMessage = this.dataService.addNewsFlashWithTime(this.newsFlashToAdd, diffinhours);
        if (errorMessage === '') {
          this.messageTitle = '成功添加快讯';
          this.messageBody = '已成功向数据库添加一条新的快讯';
          this.succeeded = true;
        } else {
          this.messageTitle = '出现错误';
          this.messageBody = errorMessage;
        }
      }

    }

  }
}
