import {Component, OnInit} from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listgeniune',
  templateUrl: './listgeniune.component.html',
  styleUrls: ['./listgeniune.component.css']
})
export class ListgeniuneComponent implements OnInit {
  public string = 'genuine';
  public edit = '/genuine/edit/';
  public delete = '/genuine/delete/';
  genuines: Genuine[];

  id: string;
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.dataService.getGenuineList()
      .subscribe(genuines => this.genuines = genuines);
  }

  onNotifySureToDelete(id: string, content) {
    this.endDelete = false;
    this.messageTitleToSend = '确认';
    this.messageBodyToSend = '你确认删除这一条原创新闻吗 ?';
    this.id = id;
    this.modalService.open(content, {centered: true});
  }
  onDelete() {
    this.dataService.deleteGeniune(this.id).subscribe(next => {
      this.endDelete = true;
      this.dataService.getGenuineList()
        .subscribe(genuines => { this.genuines = genuines;
          console.log(this.genuines);
        });
    });
    const err = this.dataService.errormessage;
    if (err === '') {
      this.messageTitleToSend = '成功删除';
      this.messageBodyToSend = '已成功删除这一条原创新闻';
    } else if (err !== '') {
      this.messageTitleToSend = '错误';
      this.messageBodyToSend = err;
    }
  }
}
