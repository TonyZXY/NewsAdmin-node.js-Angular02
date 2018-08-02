import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../entities/Video';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-videosearch',
  templateUrl: './videosearch.component.html',
  styleUrls: ['./videosearch.component.css']
})
export class VideosearchComponent implements OnInit {
  public string = 'video';
  public edit = '/video/edit/';
  public delete = '/news/delete/';
  @Input() videos: Video[];
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  id: string;

  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.videos = $event;
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
      this.dataService.getVideosList()
        .subscribe(videos => { this.videos = videos;
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
