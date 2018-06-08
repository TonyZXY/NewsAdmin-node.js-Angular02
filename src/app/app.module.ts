import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MenubarComponent } from './elements/menubar/menubar.component';
import { RouterModule, Routes } from '@angular/router';
import { ListnewsComponent } from './webpages/listnews/listnews.component';
import { ListgroupitemComponent } from './elements/listgroupitem/listgroupitem.component';
import { NewseditComponent } from './webpages/newsedit/newsedit.component';
import { ToolbarComponent} from './elements/toolbar/toolbar.component';
import { VideoeditComponent } from './webpages/videoedit/videoedit.component';
import { GenuineeditComponent } from './webpages/genuineedit/genuineedit.component';
import { FlasheditComponent } from './webpages/flashedit/flashedit.component';
import { SearchbarComponent } from './elements/searchbar/searchbar.component';
import { ListflashComponent } from './webpages/listflash/listflash.component';
import { ListgeniuneComponent } from './webpages/listgeniune/listgeniune.component';
import { ListvideoComponent } from './webpages/listvideo/listvideo.component';
import { AddflashComponent } from './webpages/addflash/addflash.component';
import { AddvideoComponent } from './webpages/addvideo/addvideo.component';
import { AddnewsComponent } from './webpages/addnews/addnews.component';
import { AddgeniuneComponent } from './webpages/addgeniune/addgeniune.component';
import { NewshomeComponent } from './webpages/newshome/newshome.component';
import { VideohomeComponent } from './webpages/videohome/videohome.component';
import { GenuinehomeComponent } from './webpages/genuinehome/genuinehome.component';
import { FlashhomeComponent } from './webpages/flashhome/flashhome.component';
import { WelcomeComponent } from './webpages/welcome/welcome.component';

const appRoutes: Routes = [
  { path: 'news/edit/:id', component: NewseditComponent},
  { path: 'genuine/edit/:id', component: GenuineeditComponent},
  { path: 'video/edit/:id', component: VideoeditComponent},
  { path: 'flash/edit/:id', component: FlasheditComponent},
  { path: 'news/list', component: ListnewsComponent},
  { path: 'news/add', component: AddnewsComponent},
  { path: 'news/search', component: ListnewsComponent},
  { path: '', component: WelcomeComponent},
  { path: 'news', component: NewshomeComponent},
  { path: 'flash', component: FlashhomeComponent },
  { path: 'video', component: VideohomeComponent },
  { path: 'genuine', component: GenuinehomeComponent }
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
    AddgeniuneComponent,
    NewshomeComponent,
    VideohomeComponent,
    GenuinehomeComponent,
    FlashhomeComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
