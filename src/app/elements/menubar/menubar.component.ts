import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {

  /**
   * Constructor of current component
   * @param auth authorization service for login
   * @param router router to lead to other pages
   */
  constructor(public auth: AuthService, private router: Router) {
  }

  ngOnInit() {


  }

  /**
   * Click to log out and remove session and navigate to the login page
   */
  onClick() {
    sessionStorage.removeItem('loginstatus');
    sessionStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
