import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-listgroupitem',
  templateUrl: './listgroupitem.component.html',
  styleUrls: ['./listgroupitem.component.css']
})
export class ListgroupitemComponent implements OnInit {
  @Input() time;
  @Input() labelTitle ;
  @Input() id;
  @Output() emitor = new EventEmitter<string>();
  constructor() {
  }

  ngOnInit() {
    this.setTime(this.time);

  }

  setTime(time: string){
    time = this.time.substring(0, 10) + ' ' + this.time.substring(11, 18);
    return time;
  }
  sendMessage(message: string) {
    this.emitor.emit(message);
  }
}
