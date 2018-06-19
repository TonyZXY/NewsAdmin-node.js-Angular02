import {Component, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';

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

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newsFlashToAdd);
    const errorMessage = this.dataService.addNewsFlash(this.newsFlashToAdd);
    if (errorMessage === '') {
      this.messageTitle = '成功添加原创文章';
      this.messageBody = '已成功向数据库添加一条新的原创文章';
      this.succeeded = true;
    } else {
      this.messageTitle = '出现错误';
      this.messageBody = errorMessage;
    }
  }
}
