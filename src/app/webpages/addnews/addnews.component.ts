import {Component, OnInit} from '@angular/core';
import {News} from '../../entities/News';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-addnews',
  templateUrl: './addnews.component.html',
  styleUrls: ['./addnews.component.css']
})
export class AddnewsComponent implements OnInit {
  public string = 'news';

  newsToAdd = new News;
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.newsToAdd);
    const errorMessage = this.dataService.addNews(this.newsToAdd);
    if (errorMessage === '') {
      this.messageTitle = '成功添加新闻';
      this.messageBody = '已成功向数据库添加一条新的新闻';
      this.succeeded = true;
    } else {
      this.messageTitle = '出现错误';
      this.messageBody = errorMessage;
    }
  }

}
