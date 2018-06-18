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
  @Output() messageEvent = new EventEmitter();

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

}
