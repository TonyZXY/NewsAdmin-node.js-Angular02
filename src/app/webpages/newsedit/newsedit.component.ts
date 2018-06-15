import {Component, Input, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {News} from '../../entities/News';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css']
})
export class NewseditComponent implements OnInit {
  public string = 'news';
  public selectedID;
  public news: News;
  public newsToEdit = new News;
  private messageTitle: string;
  private messageBody: string;
  succeeded: boolean;

  constructor(private route: ActivatedRoute, private router: Router, private serve: DataService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.serve.getNews(this.selectedID).subscribe(news => this.news = news);
      }
    );
  }

  onSubmit() {
    if (this.newsToEdit.newsDescription) {
      this.news.newsDescription = this.newsToEdit.newsDescription;
    }
    if (this.newsToEdit.title) {
      this.news.title = this.newsToEdit.title;
    }
    if (this.newsToEdit.localeTag) {
      this.news.localeTag = this.newsToEdit.localeTag;
    }
    if (this.newsToEdit.contentTag) {
      this.news.contentTag = this.newsToEdit.contentTag;
    }
    if (this.newsToEdit.languageTag) {
      this.news.languageTag = this.newsToEdit.languageTag;
    }
    if (this.newsToEdit.imageURL) {
      this.news.imageURL = this.newsToEdit.imageURL;
    }
    if (this.newsToEdit.url) {
      this.news.url = this.newsToEdit.url;
    }
    const errorMessage = this.serve.editNews(this.news);
    if (errorMessage === '') {
      this.messageTitle = '成功更新新闻';
      this.messageBody = '成功更新新闻: ' + this.news.title;
    } else {
      this.messageTitle = 'Error';
      this.messageBody = errorMessage;
    }
    console.log(errorMessage);
  }

  openDelete(content) {
    this.modalService.open(content, {centered: true});
  }

  onDelete(id) {
    this.serve.deleteNews(id).subscribe(next => {
      this.router.navigateByUrl('/news/list');
    });
  }

}
