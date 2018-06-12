import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../../entities/Video';
import {News} from '../../entities/News';

@Component({
  selector: 'app-videomanage',
  templateUrl: './videomanage.component.html',
  styleUrls: ['./videomanage.component.css']
})
export class VideomanageComponent implements OnInit {
  @Input() video_Management: Video;
  @Input() videoTitle: string;
  @Input() videoAuthor: string;
  @Input() videoDescription: string;
  @Input() videoImageUrl: string;
  @Input() videoUrl: string;


  constructor() { }

  ngOnInit() {
  }

}
