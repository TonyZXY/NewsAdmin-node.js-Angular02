import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input() string;
  public dateFromFormat;
  public dateToFormat;
  public dateFrom: string;
  public dateTo: string;
  public keyword: string;
  @Output() messageEvent = new EventEmitter();
  tagClicktimes: number[]

  constructor(private serve: DataService) {
  }

  ngOnInit() {

  }

  onClick() {
    this.dateFrom = this.dateFromFormat.year + ',' + this.dateFromFormat.month + ',' + this.dateFromFormat.day;
    this.dateTo = this.dateToFormat.year + ',' + this.dateToFormat.month + ',' + this.dateToFormat.day;
    if (this.string === 'news') {
      this.serve.searchNews(this.dateFrom, this.dateTo).subscribe(
        news => {
          this.sendMessage(news);
        });
    } else if (this.string === 'video') {
      this.serve.searchVideo(this.dateFrom, this.dateTo).subscribe(
        video => {
          this.sendMessage(video);
        }
      );
    } else if (this.string === 'flash') {
      this.serve.searchFlash(this.dateFrom, this.dateTo).subscribe(
        flash => {
          this.sendMessage(flash);
        }
      );
    } else if (this.string === 'genuine') {
      this.serve.searchGenuine(this.dateFrom, this.dateTo).subscribe(
        genuine => {
          this.sendMessage(genuine);
        }
      );
    }
  }
  sendMessage(message) {
    this.messageEvent.emit(message);
  }

  onClickByKey() {
    if (this.string === 'news') {
      this.serve.searchNewsByKeyWords(this.keyword).subscribe(
        news => {
          this.sendMessage(news);
        });
    } else if (this.string === 'video') {
      this.serve.searchVideoByKeyWords(this.keyword).subscribe(
        video => {
          this.sendMessage(video);
        }
      );
    } else if (this.string === 'flash') {
      this.serve.searchFlashByKeyWords(this.keyword).subscribe(
        flash => {
          this.sendMessage(flash);
        }
      );
    } else if (this.string === 'genuine') {
      this.serve.searchGeniuneByKeyWords(this.keyword).subscribe(
        genuine => {
          this.sendMessage(genuine);
        }
      );
    }
  }

  onClickByTags(){}

}
