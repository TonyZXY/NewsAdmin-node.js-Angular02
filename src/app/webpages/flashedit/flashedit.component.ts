import {Component, OnInit} from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-flashedit',
  templateUrl: './flashedit.component.html',
  styleUrls: ['./flashedit.component.css']
})
export class FlasheditComponent implements OnInit {
  public string = 'flash';
  public selectedID;
  public flash: NewsFlash;
  public flashToEdit = new NewsFlash();
  private messageTitle: string;
  private messageBody: string;
  succeeded: boolean;

  constructor(private route: ActivatedRoute, private serve: DataService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.serve.getFlash(this.selectedID).subscribe(flash => this.flash = flash);
      }
    );
  }

  onSubmit() {
    if (this.flashToEdit.shortMassage) {
      this.flash.shortMassage = this.flashToEdit.shortMassage;
    }
    const errorMessage = this.serve.editFlash(this.flash);
    if (errorMessage === '') {
      this.messageTitle = '成功更新快讯';
      this.messageBody = '成功更新快讯: ' + this.flash.shortMassage;
    } else {
      this.messageTitle = 'Error';
      this.messageBody = errorMessage;
    }
  }

  openDelete(content) {
    this.modalService.open(content, {centered: true});
  }

  onDelete(id) {
    this.serve.deleteNewsFlash(id).subscribe(nest => {
      this.router.navigateByUrl('/flash/list');
    });
  }

}
