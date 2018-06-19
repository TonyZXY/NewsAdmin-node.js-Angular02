import {Component, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listflash',
  templateUrl: './listflash.component.html',
  styleUrls: ['./listflash.component.css']
})
export class ListflashComponent implements OnInit {
  public string = 'flash';
  public edit = '/flash/edit/';
  public delete = '/flash/delete/';
  newsFlashes: NewsFlash[];
  id: string;
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  constructor(private dataService: DataService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.dataService.getNewsflashList()
      .subscribe(newsFlashes => this.newsFlashes = newsFlashes);
  }

  onNotifySureToDelete(id: string, content) {
    this.endDelete = false;
    this.messageTitleToSend = '确认';
    this.messageBodyToSend = '你确认删除这一条快讯吗 ?';
    this.id = id;
    this.modalService.open(content, {centered: true});
  }
  onDelete() {
    this.dataService.deleteNewsFlash(this.id).subscribe(next => {
      this.endDelete = true;
      this.dataService.getNewsflashList()
        .subscribe(newsFlashes => { this.newsFlashes = newsFlashes;
          console.log(this.newsFlashes);
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
