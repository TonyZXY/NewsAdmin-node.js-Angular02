import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-genuineedit',
  templateUrl: './genuineedit.component.html',
  styleUrls: ['./genuineedit.component.css']
})
export class GenuineeditComponent implements OnInit {
  public string = 'genuine';
  public selectedID;
  public genuine: Genuine;
  public genuineToEdit = new Genuine;
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private serve: DataService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.serve.getGenuine(this.selectedID).subscribe(genu => this.genuine = genu);
      }
    );
  }

  onSubmit() {
    if (this.genuineToEdit.title) {
      this.genuine.title = this.genuineToEdit.title;
    }
    if (this.genuineToEdit.genuineTag) {
      this.genuine.genuineTag = this.genuineToEdit.genuineTag;
    }
    if (this.genuineToEdit.languageTag) {
      this.genuine.languageTag = this.genuineToEdit.languageTag;
    }
    if (this.genuineToEdit.genuineDescription) {
      this.genuine.genuineDescription = this.genuineToEdit.genuineDescription;
    }
    if (this.genuineToEdit.imageURL) {
      this.genuine.imageURL = this.genuineToEdit.imageURL;
    }
    if (this.genuineToEdit.url) {
      this.genuine.url = this.genuineToEdit.url;
    }
    console.log(this.genuine);
    const errorMessage = this.serve.editGenuine(this.genuine);
    if (errorMessage === '') {
      this.messageTitle = '成功更新原创文章';
      this.messageBody = '成功更新原创文章: ' + this.genuine.title;
    } else {
      this.messageTitle = 'Error';
      this.messageBody = errorMessage;
    }
  }

  openDelete(content) {
    this.modalService.open(content, {centered: true});
  }

  onDelete(id) {
    console.log(id);
    this.serve.deleteGeniune(id).subscribe( next => {
      this.router.navigateByUrl('/genuine/list');
    });
  }

}
