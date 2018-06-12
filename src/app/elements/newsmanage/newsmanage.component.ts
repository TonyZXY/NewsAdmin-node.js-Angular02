import {Component, Input, OnInit} from '@angular/core';
import {News} from '../../entities/News';

@Component({
  selector: 'app-newsmanage',
  templateUrl: './newsmanage.component.html',
  styleUrls: ['./newsmanage.component.css']
})
export class NewsmanageComponent implements OnInit {
  // @Input() news_Management: News;
  @Input() newsTitle: string;
  @Input() newsAuthor: string;
  @Input() newsDescription: string;
  @Input() newsImageUrl: string;
  @Input() newsUrl: string;
  @Input() newsLocaleTag: string;
  @Input() newsContentTag: string;

  constructor() { }

  ngOnInit() {
    // this.newsTitle = this.news_Management.title;
    // this.newsAuthor = this.news_Management.author;
    // this.newsDescription = this.news_Management.newsDescription;
    // this.newsImageUrl = this.news_Management.imageURL;
    // this.newsUrl = this.news_Management.url;
    // this.newsLocaleTag = this.news_Management.localeTag;
    // this.newsContentTag = this.news_Management.contentTag;
  }

}
