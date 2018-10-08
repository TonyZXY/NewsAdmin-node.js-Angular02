import { Component, OnInit } from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbModal, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import { Activity } from '../../entities/Activity';

@Component({
  selector: 'app-activityedit',
  templateUrl: './activityedit.component.html',
  styleUrls: ['./activityedit.component.css']
})
export class ActivityeditComponent implements OnInit {
  public string = 'activity';
  public selectedID;
  public activity: Activity;
  public activityToEdit = new Activity();
  public dateStartFormat;
  date = 'YYYY-MM-DD';
  newDate: Date;
  time: NgbTimeStruct;
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;
  meridian = true;

  constructor(private route: ActivatedRoute, private serve: DataService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.selectedID = params.get('id');
      this.serve.getActivity(this.selectedID).subscribe(
        activity => {this.activity = activity;
        console.log(this.activity.eventStartTime);
        if (this.activity.eventStartTime === undefined || this.activity.eventStartTime === null ) {
          this.date = 'YYYY-MM-DD';
          this.time.hour = 0;
          this.time.minute = 0;
        } else {
          this.newDate = new Date(this.activity.eventStartTime);
          this.date = this.newDate.getFullYear() + '-' + (this.newDate.getMonth() + 1) + '-' + this.newDate.getDate();
          this.time = {hour:this.newDate.getHours(), minute: this.newDate.getMinutes(), second: 0};
          console.log(this.time);
        }
        });

    });
  }

  toggleMeridian() {
    this.meridian = !this.meridian;
  }

  onSubmit() {
    if (this.activityToEdit.eventName) {
      this.activity.eventName = this.activityToEdit.eventName;
    }
    if (this.activityToEdit.eventHost) {
      this.activity.eventHost = this.activityToEdit.eventHost;
    }
    if (this.activityToEdit.eventDescription) {
      this.activity.eventDescription = this.activityToEdit.eventDescription;
    }
    if (this.activityToEdit.eventAddress) {
      this.activity.eventAddress = this.activityToEdit.eventAddress;
    }
    if (this.activityToEdit.eventCity) {
      this.activity.eventCity = this.activityToEdit.eventCity ;
    }
    if (this.dateStartFormat && this.time) {
      this.newDate = new Date();
      this.newDate.setFullYear(this.dateStartFormat.year,
        this.dateStartFormat.month - 1,
        this.dateStartFormat.day);
      this.newDate.setHours(this.time.hour, this.time.minute, 0, 0);
      this.activityToEdit.eventStartTime = this.newDate.toISOString();
    }
    if (this.activityToEdit.eventImageURL) {
      this.activity.eventImageURL = this.activityToEdit.eventImageURL ;
    }
    if (this.activityToEdit.eventURL) {
      this.activity.eventURL = this.activityToEdit.eventURL ;
    }
    const errorMessage = this.serve.addActivity(this.activity);
    if (errorMessage === '') {
      this.messageTitle = '成功更新活动';
      this.messageBody = '成功更新活动';
    } else {
      this.messageTitle = 'Error';
      this.messageBody = errorMessage;
    }
  }

}
