import { Component, OnInit } from '@angular/core';
import {NewsFlash} from '../../entities/NewsFlash';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { Activity } from '../../entities/Activity';

@Component({
  selector: 'app-listactivity',
  templateUrl: './listactivity.component.html',
  styleUrls: ['./listactivity.component.css']
})
export class ListactivityComponent implements OnInit {
  public string = 'activity';
  public edit = '/activity/edit/';
  public delete = '/activity/delete/';
  activity: Activity[];
  id: string;
  newActivity:Activity[];
  messageTitleToSend: string;
  messageBodyToSend: string;
  endDelete: boolean;
  constructor(private dataService: DataService, private modalService: NgbModal) { }

  ngOnInit() {
    this.dataService.getActivityList()
      .subscribe(activity =>{
        
        activity.forEach(e => {
            // e.eventName = e.eventName;
            if (e.custom === false){
              // this.delete
              // e.eventName = e.eventName;
            }
        });
        this.newActivity = activity.filter((obj1) => {
          if (obj1.custom == true) {
              return 1;
          }
      
          if (obj1.custom == false) {
              return -1;
          }
          return 0;
        })

        this.newActivity.sort((obj1, obj2) => {
          if (obj1.eventStartTime < obj2.eventStartTime) {
              return 1;
          }
      
          if (obj1.eventStartTime > obj2.eventStartTime) {
              return -1;
          }
          return 0;
        });

        this.activity = this.newActivity;      
        });
  }

  onNotifySureToDelete(id: string, content) {
    // this.endDelete = false;
    // this.messageTitleToSend = '确认';
    // this.messageBodyToSend = '你确认删除这一条快讯吗 ?';
    // this.id = id;
    // this.modalService.open(content, {centered: true});
  }
  onDelete() {
    // this.dataService.deleteNewsFlash(this.id).subscribe(next => {
    //   this.endDelete = true;
    //   this.dataService.getNewsflashList()
    //     .subscribe(newsFlashes => { this.newsFlashes = newsFlashes;
    //     });
    // });
    // const err = this.dataService.errormessage;
    // if (err === '') {
    //   this.messageTitleToSend = '成功删除';
    //   this.messageBodyToSend = '已成功删除这一条快讯';
    // } else if (err !== '') {
    //   this.messageTitleToSend = '错误';
    //   this.messageBodyToSend = err;
    // }
  }

}
