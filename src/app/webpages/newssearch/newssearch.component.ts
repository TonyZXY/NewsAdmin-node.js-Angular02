import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newssearch',
  templateUrl: './newssearch.component.html',
  styleUrls: ['./newssearch.component.css']
})
export class NewssearchComponent implements OnInit {
  public string = 'news';
  public edit = '/news/edit/';
  public delete = '/news/delete';
  @Input() newss;
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  id: string;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  receiveMessage($event) {
    this.newss = $event;
  }

  ngOnInit() {
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
      this.dataService.getNewsList()
        .subscribe(newss => { this.newss = newss;
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
