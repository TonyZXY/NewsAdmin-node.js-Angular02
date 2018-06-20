import { ActivatedRoute, Router } from '@angular/router';
import {Component} from '@angular/core';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isLoggedIn: boolean
  constructor(private auth: AuthService, private activatedRoute:ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const path = this.activatedRoute.snapshot.queryParams['path'];
    const navigateTo = '/' + path;

    if (path) {
      this.router.navigate([navigateTo]);
    }

  }

}
