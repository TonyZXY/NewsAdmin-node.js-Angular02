<<<<<<< HEAD
import {Component, Input, OnInit, Output} from '@angular/core';
import {DataService} from '../../services/data.service';
=======
import {Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {News} from '../../entities/News';
>>>>>>> Login_Page


@Component({
  selector: 'app-listnews',
  templateUrl: './listnews.component.html',
  styleUrls: ['./listnews.component.css']
})
export class ListnewsComponent implements OnInit {
  public string = 'news';
  public edit = '/news/edit/';
  public delete = '/news/delete/';
<<<<<<< HEAD
  newss;

  constructor(public dataService: DataService) {
  }
=======
  newss: News[];
  id: string;
  messageTitleToSend: string;
  messageBodyToSend: string;

  constructor(public dataService: DataService, private modalService: NgbModal) {}
>>>>>>> Login_Page

  getNews() {
    this.dataService.getNewsList()
      .subscribe(newss => this.newss = newss);
  }

  ngOnInit() {
    this.getNews();
  }
<<<<<<< HEAD

  freshData() {
    this.getNews();
  }
=======
  onNotifySureToDelete(id: string, content) {
    this.messageTitleToSend = '确认';
    this.messageBodyToSend = '你确认删除这一条新闻吗 ?';
    this.id = id;
    this.modalService.open(content, {centered: true});
  }
  onDelete() {
    this.dataService.deleteNews(this.id).subscribe(next => {
      this.dataService.getNewsList()
        .subscribe(newss => { this.newss = newss;
          console.log(this.newss);
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

>>>>>>> Login_Page
}
