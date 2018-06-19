import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName = '';
  passWord = '';
  result = new UserLogin();
  constructor(private auth: AuthService, private router: Router, private modalService: NgbModal) { }

  ngOnInit() {
  }

  onSubmit(content) {
    console.log(this.userName);
    console.log(this.passWord);
    this.auth.authLogin(this.userName, this.passWord).subscribe(
      result => {

        this.result = result;
        console.log(this.result);
        if (result.login) {
          this.auth.loginstatus = true;
          localStorage.setItem('loginstatus', 'success');
          localStorage.setItem('token', result.username + ' ' + result.token);
          this.router.navigate(['home']);
        } else {
          this.modalService.open(content, {centered: true});
        }
      }
    );
  }

}
export class UserLogin {
  login: boolean;
}

