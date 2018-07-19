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
  tagClicktimes: number[];
  public tag1 = '';
  public tag2 = '';
  public tag3 = '';
  public tag4 = '';
  public tag5 = '';
  public options;
  tagFontColor;
  tagBackColor ;
  constructor(private serve: DataService) {
  }

  ngOnInit() {
    this.keyword = '';
    this.tag1 = '中文';
    this.tag2 = '英文';
    if (this.string !== 'genuine' && this.string !== 'flash') {
      this.tag3 = '趋势';
      this.tag4 = '深度';
      this.tag5 = '';
    } else if (this.string === 'genuine') {
      this.tag3 = '原创文章';
      this.tag4 = '百科';
      this.tag5 = '分析';
    } else if (this.string === 'flash') {
      this.tag3 = '发送';
      this.tag4 = '不发送';
      this.tag5 = '';
    }
    this.tagClicktimes = [0, 0, 0, 0, 0];
    this.tagFontColor = ['#212529', '#212529', '#212529', '#212529', '#212529'];
    this.tagBackColor = ['#fff', '#fff', '#fff', '#fff', '#fff'];
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

  onClickByTag1() {
    this.tagClicktimes[0]++;
    if (this.tagClicktimes[0] % 2 !== 0) {
      this.tagBackColor[0] = '#007bff';
      this.tagFontColor[0] = '#fff';

    } else {
      this.tagClicktimes[0] = 0;
      this.tagFontColor[0] = '#212529';
      this.tagBackColor[0] = '#fff';
    }
    this.searchByTag();
  }
  onClickByTag2() {
    this.tagClicktimes[1]++;
    if(this.tagClicktimes[1] % 2 !== 0) {
      this.tagBackColor[1] = '#28a745';
      this.tagFontColor[1] = '#fff';
    } else {
      this.tagClicktimes[1] = 0;
      this.tagFontColor[1] = '#212529';
      this.tagBackColor[1] = '#fff';
    }
    this.searchByTag();
  }
  onClickByTag3() {
    this.tagClicktimes[2]++;
    if(this.tagClicktimes[2]%2 !== 0){
      this.tagBackColor[2] = '#dc3545';
      this.tagFontColor[2] = '#fff';
    }
    else {
      this.tagClicktimes[2] = 0;
      this.tagFontColor[2] = '#212529';
      this.tagBackColor[2] = '#fff';
    }
    this.searchByTag();
  }
  onClickByTag4() {
    this.tagClicktimes[3]++;
    if(this.tagClicktimes[3] % 2 !== 0) {
      this.tagBackColor[3] = '#ffc107';
      this.tagFontColor[3] = '#212529';
    } else {
      this.tagClicktimes[3] = 0;
      this.tagFontColor[3] = '#212529';
      this.tagBackColor[3] = '#fff';
    }
    this.searchByTag();
  }
  onClickByTag5() {
    this.tagClicktimes[4]++;
    if (this.tagClicktimes[4] % 2 === 0) {
      this.tagBackColor[4] = '#17a2b8';
      this.tagFontColor[4] = '#fff';
    } else {
      this.tagClicktimes[4] = 0;
      this.tagFontColor[4] = '#212529';
      this.tagBackColor[4] = '#fff';
    }
    this.searchByTag();
  }

  searchByTag() {
    let tags= ['', '', ''  , '' , ''];
    if (this.string === 'news') {
      if (this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0){
        this.sendMessage(null);
      } else {
          if (this.tagClicktimes[0] % 2 !== 0) {
            tags[0] = 'CN';
          }
          if (this.tagClicktimes[1] % 2 !== 0) {
            tags[1] = 'EN';
          }
        this.serve.searchNewsByTags(tags).subscribe(
          news => {
            this.sendMessage(news);
          });
      }

    } else if (this.string === 'video') {

      if (this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0 &&
        this.tagClicktimes[2] % 2 === 0 && this.tagClicktimes[3] % 2 === 0){
        this.sendMessage(null);
      } else {
        if (this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0){
          tags[0] = 'CN';
          tags[1] = 'EN';
        } else {
          if(this.tagClicktimes[0] % 2 !== 0) {
            tags[0] = 'CN';
          }
          if(this.tagClicktimes[1] % 2 !== 0){
            tags[1] = 'EN';
          }
        }

        if (this.tagClicktimes[2] % 2 === 0 && this.tagClicktimes[3] % 2 === 0){
          tags[2] = '趋势';
          tags[3] = '深度';
        } else {
          if(this.tagClicktimes[2] % 2 !== 0) {
            tags[2] = '趋势';
          }
          if(this.tagClicktimes[3] % 2 !== 0) {
            tags[3] = '深度';
          }
        }
        this.serve.searchVideoByTags(tags).subscribe(
          video => {
            this.sendMessage(video);
          }
        );
      }


    } else if (this.string === 'flash') {
      if(this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0 &&
        this.tagClicktimes[2] % 2 === 0 && this.tagClicktimes[3] % 2 === 0){
        this.sendMessage(null);
      } else {
        if (this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0){
            tags[0] = 'CN';
            tags[1] = 'EN';
        } else {
          if(this.tagClicktimes[0] % 2 !== 0){
            tags[0] = 'CN';
          }
          if(this.tagClicktimes[1] % 2 !== 0){
            tags[1] = 'EN';
          }
        }

        if (this.tagClicktimes[2] % 2 === 0 && this.tagClicktimes[3] % 2 === 0){
          tags[2] = 'true';
          tags[3] = 'false';
        } else {
          if(this.tagClicktimes[2] % 2 !== 0) {
            tags[2] = 'true';
          }
          if(this.tagClicktimes[3] % 2 !== 0) {
            tags[3] = 'false';
          }
        }

        console.log(tags);

        this.serve.searchFlashByTags(tags).subscribe(
          flash => {
            this.sendMessage(flash);
          }
        );
      }
    } else if (this.string === 'genuine') {
      if(this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0 &&
        this.tagClicktimes[2] % 2 === 0 && this.tagClicktimes[3] % 2 === 0 && this.tagClicktimes[4] % 2 === 0){
        this.sendMessage(null);
      } else {
        if (this.tagClicktimes[0] % 2 === 0 && this.tagClicktimes[1] % 2 === 0){
          tags[0] = 'CN';
          tags[1] = 'EN';
        } else {
          if(this.tagClicktimes[0] % 2 !== 0){
            tags[0] = 'CN';
          }
          if(this.tagClicktimes[1] % 2 !== 0){
            tags[1] = 'EN';
          }
        }

        if (this.tagClicktimes[2] % 2 === 0 && this.tagClicktimes[3] % 2 === 0 && this.tagClicktimes[4] % 2 === 0){
          tags[2] = '原创文章';
          tags[3] = '百科';
          tags[4] = '分析';
        } else {
          if (this.tagClicktimes[2] % 2 !== 0) {
            tags[2] = '原创文章';
          }
          if (this.tagClicktimes[3] % 2 !== 0) {
            tags[3] = '百科';
          }
          if (this.tagClicktimes[4] % 2 !== 0) {
            tags[4] = '分析';
          }
        }

        console.log(tags);

        this.serve.searchGeniuneByTags(this.keyword).subscribe(
          genuine => {
            this.sendMessage(genuine);
          }
        );
      }

    }
  }
}
