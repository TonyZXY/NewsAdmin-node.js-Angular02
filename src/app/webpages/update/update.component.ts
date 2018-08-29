import {Component, OnInit} from '@angular/core';
import {Update} from '../../entities/Update';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public update: Update;
  public updateToEdit = new Update();
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;
  constructor(private route: ActivatedRoute, private serve: DataService, private modalService: NgbModal, private router: Router) {
  }

  ngOnInit() {
    this.serve.getUpdate().subscribe(
      update => {
        console.log(update);
        this.update = update;
        console.log(this.update);
      }
    );
  }
  onSubmit() {
    if (this.updateToEdit.version) {
      this.update.version = this.updateToEdit.version;
    }
    if (this.updateToEdit.info) {
      this.update.info = this.updateToEdit.info;
    }
    if (this.updateToEdit.critical) {
      this.update.critical = this.updateToEdit.critical;
    }
    const errorMessage = this.serve.editUpdate(this.update);
    if (errorMessage === '') {
      this.messageTitle = '成功更新Update info';
      this.messageBody = '成功更新 version : ' + this.update.version;
    } else {
      this.messageTitle = 'Error';
      this.messageBody = errorMessage;
    }
  }

}
