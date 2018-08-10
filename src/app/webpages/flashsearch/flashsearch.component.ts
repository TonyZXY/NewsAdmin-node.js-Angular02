import {Component, Input, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flashsearch',
  templateUrl: './flashsearch.component.html',
  styleUrls: ['./flashsearch.component.css']
})
export class FlashsearchComponent implements OnInit {
  public string = 'flash';
  public edit = '/flash/edit/';
  public delete = '/flash/delete/';
  @Input() newsFlashes: NewsFlash[];
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  id: string;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  receiveMessage($event) {
    this.newsFlashes = $event;
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
