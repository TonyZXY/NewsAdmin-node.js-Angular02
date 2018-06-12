import {Component, Input, OnInit} from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';
import {News} from '../../entities/News';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-newsedit',
  templateUrl: './newsedit.component.html',
  styleUrls: ['./newsedit.component.css']
})
export class NewseditComponent implements OnInit {
  public string = 'news';
  public selectedID;
  public news: News;
  constructor(private route: ActivatedRoute, private router: Router, private serve: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.serve.getNews(this.selectedID).subscribe(news => this.news = news);
      }
    );
  }

}
