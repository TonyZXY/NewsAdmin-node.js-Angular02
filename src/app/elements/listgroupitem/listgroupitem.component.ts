import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listgroupitem',
  templateUrl: './listgroupitem.component.html',
  styleUrls: ['./listgroupitem.component.css'],
})
export class ListgroupitemComponent implements OnInit {
  @Input() time; // The time publishment of each item
  @Input() labelTitle; // Title of each item
  @Input() id; // ID of each item
  @Input() edit; // string "edit"
  @Input() delete; // string "delete"
  @Input() available; // Is current item available to view(newsflash used)
  @Output() idToDelete = new EventEmitter(); // Pass the id to parent component for delete

  @Input() endDelete: boolean; // NOT USED
  @Input() messageTitleToSend: string; // NOT USED
  @Input() messageBodyToSend: string; // NOT USED

  /**
   * Constructor of group item
   * @param dataService Service for data connection and data transaction
   */
  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    // Change UTC time to local time and to string
    this.setTime(this.time);

  }

  /**
   * Set Time to local time and cast to string
   * @param time time string of UTC
   */
  setTime(time: string) {
    const timeTo = new Date(time);
    const timeToDis = timeTo.toLocaleString();
    return timeToDis.substring(0, 10) + ' ' + timeToDis.substring(11, 20);
  }

  /**
   * Submit id to parent component for delete
   */
  onClickSureToDelete() {
    this.idToDelete.emit(this.id);
  }
}
