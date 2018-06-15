import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../entities/Video';

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

  constructor() { }

  ngOnInit() {
  }

  receiveMessage($event){
    this.videos = $event;
  }

}
