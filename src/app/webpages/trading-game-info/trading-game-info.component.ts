import { Component, OnInit } from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {GameInfo} from '../../entities/GameInfo';

@Component({
  selector: 'app-trading-game-info',
  templateUrl: './trading-game-info.component.html',
  styleUrls: ['./trading-game-info.component.css']
})
export class TradingGameInfoComponent implements OnInit {

  public string = 'gameInfo';
  public edit = '/gameInfo/edit/';
  gameInfoes: GameInfo[];
  endDelete: boolean;
  messageTitleToSend: string;
  messageBodyToSend: string;
  id: string;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.dataService.getAllGameInfo()
      .subscribe(gameInfoes => {
        this.gameInfoes = gameInfoes;
        console.log(this.gameInfoes);
        // this.newsFlashes = newsFlashes;
      });
  }

  setTime(time: string) {
    const timeTo = new Date(time);
    const timeToDis = timeTo.toLocaleString();
    return timeToDis.substring(0, 10) + ' ' + timeToDis.substring(11, 20);
  }

  onNotifySureToDelete(id: string, content) {
    this.endDelete = false;
    this.messageTitleToSend = '确认';
    this.messageBodyToSend = '你确认删除这一条快讯吗 ?';
    this.id = id;
    this.modalService.open(content, {centered: true});
  }
  onDelete() {
    this.dataService.deleteGameInfo(this.id).subscribe(next => {
      console.log(this.id);
      console.log(next);
      this.endDelete = true;
      this.dataService.getAllGameInfo()
        .subscribe(gameInfoes => { this.gameInfoes = gameInfoes;
        });
    });
    const err = this.dataService.errormessage;
    if (err === '') {
      this.messageTitleToSend = '成功删除';
      this.messageBodyToSend = '已成功删除这一条快讯';
    } else if (err !== '') {
      this.messageTitleToSend = '错误';
      this.messageBodyToSend = err;
    }
  }

}
