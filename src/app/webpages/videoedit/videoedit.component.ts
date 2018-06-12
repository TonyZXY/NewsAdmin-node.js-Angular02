import { Component, OnInit } from '@angular/core';
import {Video} from '../../entities/Video';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-videoedit',
  templateUrl: './videoedit.component.html',
  styleUrls: ['./videoedit.component.css']
})
export class VideoeditComponent implements OnInit {
  public string = 'video';
  public selectedID;
  public video: Video;
  constructor(private route: ActivatedRoute, private serve: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.selectedID = param.get('id');
        this.serve.getVideo(this.selectedID).subscribe(v => this.video = v);
      }
    );
  }

}
