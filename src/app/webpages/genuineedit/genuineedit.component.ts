import { Component, OnInit } from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-genuineedit',
  templateUrl: './genuineedit.component.html',
  styleUrls: ['./genuineedit.component.css']
})
export class GenuineeditComponent implements OnInit {

  public string = 'news';
  public selectedID;
  public genuine: Genuine;
  constructor(private route: ActivatedRoute, private serve: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.serve.getGenuine(this.selectedID).subscribe( genu => this.genuine = genu);
      }
    );
  }

}
