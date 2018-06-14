import {Component, OnInit} from '@angular/core';
import {Genuine} from '../../entities/Genuine';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-addgenuine',
  templateUrl: './addgenuine.component.html',
  styleUrls: ['./addgenuine.component.css']
})
export class AddgenuineComponent implements OnInit {
  public string = 'genuine';
  genuineToAdd = new Genuine;
  private messageTitle: string;
  private messageBody: string;
  succeeded: boolean;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.genuineToAdd);
    const errorMessage = this.dataService.addGenuine(this.genuineToAdd);
    if (errorMessage === '') {
      this.messageTitle = '成功添加原创文章';
      this.messageBody = '已成功向数据库添加一条新的原创文章';
      this.succeeded = true;
    } else {
      this.messageTitle = '出现错误';
      this.messageBody = errorMessage;
    }
  }
}
