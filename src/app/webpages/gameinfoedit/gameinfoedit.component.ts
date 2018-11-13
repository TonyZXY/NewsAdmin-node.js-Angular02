import { Component, OnInit } from '@angular/core';
import {GameInfo} from '../../entities/GameInfo';
import {NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {DataService} from '../../services/data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gameinfoedit',
  templateUrl: './gameinfoedit.component.html',
  styleUrls: ['./gameinfoedit.component.css']
})
export class GameinfoeditComponent implements OnInit {
  public string = 'gameInfo';
  public selectedID;
  gameInfo = new GameInfo;
  gameInfoToEdit = new GameInfo;
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

  constructor(private route: ActivatedRoute, private dataService: DataService, private modalService: NgbModal, private router: Router) {

  }

  ngOnInit() {
    this.newDateA = new Date('1200-01-01');
    this.newDateB = new Date('1200-01-01');
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.dataService.getOneGameInfo(this.selectedID).subscribe(response => {
          this.gameInfo = response.data;
          console.log(response);
          this.newDateA = new Date(this.gameInfo.timeFrom);
          this.newDateB = new Date(this.gameInfo.timeTo);
          this.timeFromhms = {hour: this.newDateA.getHours(), minute: this.newDateA.getMinutes(), second: 0};
          this.timeTohms = {hour: this.newDateB.getHours(), minute: this.newDateB.getMinutes(), second: 0};
          console.log(this.timeFromFormat);
          console.log(this.timeToFormat);
        });
      }
    );
  }

  toggleMeridianA() {
    this.meridianA = !this.meridianA;
  }

  toggleMeridianB() {
    this.meridianB = !this.meridianB;
  }

  onSubmit() {
    if (this.gameInfoToEdit.title) {
      this.gameInfo.title = this.gameInfoToEdit.title;
    }
    if (this.gameInfoToEdit.shortMassage) {
      this.gameInfo.shortMassage = this.gameInfoToEdit.shortMassage;
    }
    if (this.timeFromFormat) {
      this.newDateA = new Date();
      this.newDateA.setFullYear(this.timeFromFormat.year,
        this.timeFromFormat.month - 1,
        this.timeFromFormat.day);
    } else {
      this.newDateA = new Date(this.gameInfo.timeFrom);
    }
    if (this.timeToFormat) {
      this.newDateB = new Date();
      this.newDateB.setFullYear(this.timeToFormat.year,
        this.timeToFormat.month - 1,
        this.timeToFormat.day);
    } else {
      this.newDateB = new Date(this.gameInfo.timeTo);
    }
    this.newDateA.setHours(this.timeFromhms.hour, this.timeFromhms.minute, 0, 0);
    this.newDateB.setHours(this.timeTohms.hour, this.timeTohms.minute, 0, 0);

    const betweenTime: number = this.newDateB.getTime() - this.newDateA.getTime();
    if (betweenTime <= 0) {
        this.messageTitle = '公告时间错误';
        this.messageBody = '选取截止时间早于选取的起始时间';
    } else {
        this.gameInfo.timeFrom = this.newDateA.toISOString();
        this.gameInfo.timeTo = this.newDateB.toISOString();
        console.log('AAA');
        console.log(this.gameInfo);
        const errorMessage = this.dataService.editGameInfo(this.gameInfo);
        if (errorMessage === '') {
          this.messageTitle = '成功添加原创文章';
          this.messageBody = '已成功更改一条新的公告';
          this.succeeded = true;
        } else {
          this.messageTitle = '出现错误';
          this.messageBody = errorMessage;
        }
    }

  }
}

