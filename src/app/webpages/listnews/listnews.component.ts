import {Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {News} from '../../entities/News';



@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {
  public string = 'news';
  public edit = '/news/edit/';
  public delete = '/news/delete/';

  newss: News[];
  id: string;
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;

  constructor(public dataService: DataService, private modalService: NgbModal) {}


  getNews() {
    this.dataService.getNewsList()
      .subscribe(newss => this.newss = newss);
  }

  ngOnInit() {
    this.getNews();
  }

  onNotifySureToDelete(id: string, content) {
    this.endDelete = false;
    this.messageTitleToSend = '确认';
    this.messageBodyToSend = '你确认删除这一条新闻吗 ?';
    this.id = id;
    this.modalService.open(content, {centered: true});
  }
  onDelete() {
    this.dataService.deleteNews(this.id).subscribe(next => {
      this.endDelete = true;
      this.dataService.getNewsList()
        .subscribe(newss => { this.newss = newss;
        });
    });
    const err = this.dataService.errormessage;
    if (err === '') {
      this.messageTitleToSend = '成功删除';
      this.messageBodyToSend = '已成功删除这一条新闻';
    } else if (err !== '') {
      this.messageTitleToSend = '错误';
      this.messageBodyToSend = err;
    }
  }

}
