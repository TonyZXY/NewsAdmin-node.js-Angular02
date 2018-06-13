import { Component, OnInit } from '@angular/core';
import {Video} from '../../entities/Video';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent implements OnInit {
  public string = 'video';
  videoToAdd = new Video;
  private messageTitle: string;
  private messageBody: string;
  succeeded: boolean;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.videoToAdd);
    console.log(this.videoToAdd);
    const errorMessage = this.dataService.addVideo(this.videoToAdd);
    if (errorMessage === '') {
      this.messageTitle = '成功添加视频';
      this.messageBody = '已成功向数据库添加一条新的视频';
      this.succeeded = true;
    } else {
      this.messageTitle = '出现错误';
      this.messageBody = errorMessage;
    }
  }

}
