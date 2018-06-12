import { Component, OnInit } from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-flashedit',
  templateUrl: './flashedit.component.html',
  styleUrls: ['./flashedit.component.css']
})
export class FlasheditComponent implements OnInit {
  public string = 'flash';
  public selectedID;
  public flash: NewsFlash;

  constructor(private route: ActivatedRoute, private serve: DataService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      params => {
        this.selectedID = params.get('id');
        this.serve.getFlash(this.selectedID).subscribe( flash => this.flash = flash);
      }
    );
  }

}
