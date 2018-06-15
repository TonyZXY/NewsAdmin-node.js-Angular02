import {Component, OnInit} from '@angular/core';
import {Video} from '../../entities/Video';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-videoedit',
  templateUrl: './videoedit.component.html',
  styleUrls: ['./videoedit.component.css']
})
export class VideoeditComponent implements OnInit {
  public string = 'video';
  public selectedID;
  public video: Video;
  public videoToEdit = new Video;
  private messageTitle: string;
  private messageBody: string;
  succeeded: boolean;

  constructor(private route: ActivatedRoute, private serve: DataService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => {
        this.selectedID = param.get('id');
        this.serve.getVideo(this.selectedID).subscribe(v => this.video = v);
      }
    );
  }

  onSubmit() {
    if (this.videoToEdit.title) {
      this.video.title = this.videoToEdit.title;
    }
    if (this.videoToEdit.videoDescription) {
      this.video.title = this.videoToEdit.videoDescription;
    }
    if (this.videoToEdit.localeTag) {
      this.video.localeTag = this.videoToEdit.localeTag;
    }
    if (this.videoToEdit.languageTag) {
      this.video.languageTag = this.videoToEdit.languageTag;
    }
    if (this.videoToEdit.imageURL) {
      this.video.imageURL = this.videoToEdit.imageURL;
    }
    if (this.videoToEdit.url) {
      this.video.url = this.videoToEdit.url;
    }
    const errorMessage = this.serve.editVideo(this.video);
    if (errorMessage === '') {
      this.messageTitle = '成功更新视频';
      this.messageBody = '成功更新视频: ' + this.video.title;
    } else {
      this.messageTitle = 'Error';
      this.messageBody = errorMessage;
    }
  }

  openDelete(content) {
    this.modalService.open(content, {centered: true});
  }

  onDelete(id) {
    this.serve.deleteVideo(id).subscribe(next => {
      this.router.navigateByUrl('/video/list');
    });
  }

}
