import { Component, OnInit } from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {ActivatedRoute, Router} from '@angular/router';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
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
  date: string;
  newDate: Date;
  time = {hour: 13, minute: 30};
  messageTitle: string;
  messageBody: string;
  succeeded: boolean;

//   constructor(private route: ActivatedRoute, private serve: DataService, private modalService: NgbModal, private router: Router) { }

  ngOnInit() {
  }

//   onSubmit() {
//     if (this.activityToEdit.eventName) {
//       this.activity.eventName = this.activityToEdit.eventName;
//     }
//     if (this.activityToEdit.eventHost) {
//       this.activity.eventHost = this.activityToEdit.eventHost;
//     }
//     if (this.activityToEdit.eventDescription) {
//       this.activity.eventDescription = this.activityToEdit.eventDescription;
//     }
//     if (this.activityToEdit.eventAddress) {
//       this.activity.eventAddress = this.activityToEdit.eventAddress;
//     }
//     if (this.activityToEdit.eventCity) {
//       this.activity.eventCity = this.activityToEdit.eventCity ;
//     }
//     if (this.dateStartFormat && this.time) {
//       this.newDate = new Date();
//       this.newDate.setFullYear(this.dateStartFormat.year,this.dateStartFormat.month-1,this.dateStartFormat.day)
//       this.newDate.setHours(this.time.hour,this.time.minute,0,0)
//       this.activityToEdit.eventStartTime = this.newDate.toISOString();
//     }
//     if (this.activityToEdit.eventImageURL) {
//       this.activity.eventImageURL = this.activityToEdit.eventImageURL ;
//     }
//     if (this.activityToEdit.eventURL) {
//       this.activity.eventURL = this.activityToEdit.eventURL ;
//     }
    
//     const errorMessage = this.serve.addActivity(this.activity);
//     if (errorMessage === '') {
//       this.messageTitle = '成功更新活动';
//       this.messageBody = '成功更新活动';
//     } else {
//       this.messageTitle = 'Error';
//       this.messageBody = errorMessage;
//     }
//   }

  // openDelete(content) {
  //   this.modalService.open(content, {centered: true});
  // }

  // onDelete(id) {
  //   this.serve.deleteNewsFlash(id).subscribe(nest => {
  //     this.router.navigateByUrl('/flash/list');
  //   });
  // }

}
