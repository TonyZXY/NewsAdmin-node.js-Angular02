import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {DataService} from '../../services/data.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-listgroupitem',
  templateUrl: './listgroupitem.component.html',
  styleUrls: ['./listgroupitem.component.css'],
})
export class ListgroupitemComponent implements OnInit {
  @Input() time;
  @Input() labelTitle ;
  @Input() id;
  @Input() edit;
  @Input() delete;
  @Output() idToDelete = new EventEmitter();

  @Input() endDelete: boolean;
  @Input() messageTitleToSend: string;
  @Input() messageBodyToSend: string;

  constructor(private dataService: DataService, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.setTime(this.time);

  }

  setTime(time: string) {
    time = this.time.substring(0, 10) + ' ' + this.time.substring(11, 19);
    return time;
  }

  openVerticallyCentered(content) {
    this.modalService.open(content, { centered: true });
  }
  onClickSureToDelete() {
    this.idToDelete.emit(this.id);
  }
}
