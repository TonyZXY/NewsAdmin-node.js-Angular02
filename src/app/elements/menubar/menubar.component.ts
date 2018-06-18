import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {


  constructor(private auth: AuthService, private router: Router) {
  }

  ngOnInit() {


  }

  onClick() {
    localStorage.removeItem('token');
    this.router.navigate(['']);
  }

}
