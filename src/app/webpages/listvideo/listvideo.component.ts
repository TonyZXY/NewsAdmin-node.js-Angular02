import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Video} from '../../entities/Video';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {
  public string = 'video';
  public edit = '/video/edit/';
  public delete = '/news/delete/';
  videos: Video[];

  constructor(private dataservice: DataService) {
  }

  ngOnInit() {
    this.dataservice.getVideosList()
      .subscribe(videos => this.videos = videos);
  }

}
