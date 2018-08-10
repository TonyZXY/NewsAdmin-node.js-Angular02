import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Video} from '../../entities/Video';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {
  public string = 'video';
  public edit = '/video/edit/';
  public delete = '/video/delete/';
  videos: Video[];

  id: string;
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  constructor(private dataservice: DataService,private modalService: NgbModal) { }


  ngOnInit() {
    this.dataservice.getVideosList()
      .subscribe(videos => this.videos = videos);
  }

  onNotifySureToDelete(id: string, content) {
    this.endDelete = false;
    this.messageTitleToSend = '确认';
    this.messageBodyToSend = '你确认删除这一条视频吗 ?';
    this.id = id;
    this.modalService.open(content, {centered: true});
  }
  onDelete() {
    this.dataservice.deleteVideo(this.id).subscribe(next => {
      this.endDelete = true;
      this.dataservice.getVideosList()
        .subscribe(videos => { this.videos = videos;
        });
    });
    const err = this.dataservice.errormessage;
    if (err === '') {
      this.messageTitleToSend = '成功删除';
      this.messageBodyToSend = '已成功删除这一条视频';
    } else if (err !== '') {
      this.messageTitleToSend = '错误';
      this.messageBodyToSend = err;
    }
  }
}
