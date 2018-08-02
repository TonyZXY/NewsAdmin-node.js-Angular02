import {Component, Input, OnInit} from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-genuinesearch',
  templateUrl: './genuinesearch.component.html',
  styleUrls: ['./genuinesearch.component.css']
})
export class GenuinesearchComponent implements OnInit {
  public string = 'genuine';
  public edit = '/genuine/edit/';
  public delete = '/genuine/delete/';
  @Input() genuines: Genuine[];
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  id: string;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  receiveMessage($event) {
    this.genuines = $event;
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
      this.dataService.getGenuineList()
        .subscribe(genuines => { this.genuines = genuines;
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
