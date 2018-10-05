import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {DataService} from './services/data.service';
import {AppComponent} from './app.component';
import {MenubarComponent} from './elements/menubar/menubar.component';
import {RouterModule, Routes} from '@angular/router';
import {ListnewsComponent} from './webpages/listnews/listnews.component';
import {ListgroupitemComponent} from './elements/listgroupitem/listgroupitem.component';
import {NewseditComponent} from './webpages/newsedit/newsedit.component';
import {ToolbarComponent} from './elements/toolbar/toolbar.component';
import {VideoeditComponent} from './webpages/videoedit/videoedit.component';
import {GenuineeditComponent} from './webpages/genuineedit/genuineedit.component';
import {FlasheditComponent} from './webpages/flashedit/flashedit.component';
import {SearchbarComponent} from './elements/searchbar/searchbar.component';
import {ListflashComponent} from './webpages/listflash/listflash.component';
import {ListgeniuneComponent} from './webpages/listgeniune/listgeniune.component';
import {ListvideoComponent} from './webpages/listvideo/listvideo.component';
import {ListactivityComponent} from './webpages/listactivity/listactivity.component';
import {AddflashComponent} from './webpages/addflash/addflash.component';
import {AddvideoComponent} from './webpages/addvideo/addvideo.component';
import {AddnewsComponent} from './webpages/addnews/addnews.component';
import {AddgenuineComponent} from './webpages/addgenuine/addgenuine.component';
import {NewshomeComponent} from './webpages/newshome/newshome.component';
import {VideohomeComponent} from './webpages/videohome/videohome.component';
import {GenuinehomeComponent} from './webpages/genuinehome/genuinehome.component';
import {FlashhomeComponent} from './webpages/flashhome/flashhome.component';
import {WelcomeComponent} from './webpages/welcome/welcome.component';
import {HomeviewComponent} from './elements/homeview/homeview.component';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NewssearchComponent} from './webpages/newssearch/newssearch.component';
import {VideosearchComponent} from './webpages/videosearch/videosearch.component';
import {FlashsearchComponent} from './webpages/flashsearch/flashsearch.component';
import {GenuinesearchComponent} from './webpages/genuinesearch/genuinesearch.component';
import {AuthGuard} from './services/auth.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoginComponent} from './webpages/login/login.component';
import {AuthService} from './services/auth.service';
import {TokenIntercepterService} from './services/token-intercepter.service';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {UpdateComponent} from './webpages/update/update.component';
import { AddactivityComponent } from './webpages/addactivity/addactivity.component';
import { ActivityhomeComponent } from './webpages/activityhome/activityhome.component';
import { ActivityeditComponent } from './webpages/activityedit/activityedit.component';
import { ActivitysearchComponent } from './webpages/activitysearch/activitysearch.component';

const appRoutes: Routes = [
  {path: 'news/edit/:id', component: NewseditComponent, canActivate: [AuthGuard]},
  {path: 'genuine/edit/:id', component: GenuineeditComponent, canActivate: [AuthGuard]},
  {path: 'video/edit/:id', component: VideoeditComponent, canActivate: [AuthGuard]},
  {path: 'flash/edit/:id', component: FlasheditComponent, canActivate: [AuthGuard]},
  {path: 'flash/list', component: ListflashComponent, canActivate: [AuthGuard]},
  {path: 'video/list', component: ListvideoComponent, canActivate: [AuthGuard]},
  {path: 'genuine/list', component: ListgeniuneComponent, canActivate: [AuthGuard]},
  {path: 'news/list', component: ListnewsComponent, canActivate: [AuthGuard]},
  {path: 'news/add', component: AddnewsComponent, canActivate: [AuthGuard]},
  {path: 'news/search', component: NewssearchComponent, canActivate: [AuthGuard]},
  {path: 'video/add', component: AddvideoComponent, canActivate: [AuthGuard]},
  {path: 'video/search', component: VideosearchComponent, canActivate: [AuthGuard]},
  {path: 'flash/add', component: AddflashComponent, canActivate: [AuthGuard]},
  {path: 'flash/search', component: FlashsearchComponent, canActivate: [AuthGuard]},
  {path: 'genuine/add', component: AddgenuineComponent, canActivate: [AuthGuard]},
  {path: 'genuine/search', component: GenuinesearchComponent, canActivate: [AuthGuard]},
  {path: 'activity/add', component: AddactivityComponent, canActivate: [AuthGuard]},
  {path: 'activity/search', component: ActivitysearchComponent, canActivate: [AuthGuard]},
  {path: 'activity/edit/:id', component: ActivityeditComponent, canActivate: [AuthGuard]},
  {path: 'activity/list', component: ListactivityComponent, canActivate: [AuthGuard]},
  {path: '', component: LoginComponent},
  {path: 'home', component: WelcomeComponent, canActivate: [AuthGuard]},
  {path: 'news', component: NewshomeComponent, canActivate: [AuthGuard]},
  {path: 'flash', component: FlashhomeComponent, canActivate: [AuthGuard]},
  {path: 'video', component: VideohomeComponent, canActivate: [AuthGuard]},
  {path: 'genuine', component: GenuinehomeComponent, canActivate: [AuthGuard]},
  {path: 'update', component: UpdateComponent, canActivate: [AuthGuard]},
  {path: 'activity', component: ActivityhomeComponent, canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ListnewsComponent,
    ListgroupitemComponent,
    NewseditComponent,
    ToolbarComponent,
    VideoeditComponent,
    GenuineeditComponent,
    FlasheditComponent,
    SearchbarComponent,
    ListflashComponent,
    ListgeniuneComponent,
    ListvideoComponent,
    AddflashComponent,
    AddvideoComponent,
    AddnewsComponent,
    NewshomeComponent,
    VideohomeComponent,
    GenuinehomeComponent,
    FlashhomeComponent,
    WelcomeComponent,
    HomeviewComponent,
    AddgenuineComponent,
    NewssearchComponent,
    VideosearchComponent,
    FlashsearchComponent,
    GenuinesearchComponent,
    LoginComponent,
    UpdateComponent,
    AddactivityComponent,
    ActivityhomeComponent,
    ActivityeditComponent,
    ActivitysearchComponent,
    ListactivityComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [DataService, AuthGuard, AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true
    }, {
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
