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
import { AddgenuineComponent} from './webpages/addgenuine/addgenuine.component';
import { NewshomeComponent } from './webpages/newshome/newshome.component';
import { VideohomeComponent } from './webpages/videohome/videohome.component';
import { GenuinehomeComponent } from './webpages/genuinehome/genuinehome.component';
import { FlashhomeComponent } from './webpages/flashhome/flashhome.component';
import { WelcomeComponent } from './webpages/welcome/welcome.component';
import { HomeviewComponent } from './elements/homeview/homeview.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes: Routes = [
  { path: 'news/edit/:id', component: NewseditComponent},
  { path: 'genuine/edit/:id', component: GenuineeditComponent},
  { path: 'video/edit/:id', component: VideoeditComponent},
  { path: 'flash/edit/:id', component: FlasheditComponent},
  { path: 'flash/list', component: ListflashComponent, runGuardsAndResolvers: 'always'},
  { path: 'video/list', component: ListvideoComponent, runGuardsAndResolvers: 'always'},
  { path: 'genuine/list', component: ListgeniuneComponent, runGuardsAndResolvers: 'always'},
  { path: 'news/list', component: ListnewsComponent, runGuardsAndResolvers: 'always'},
  { path: 'news/add', component: AddnewsComponent},
  { path: 'news/search', component: ListnewsComponent},
  { path: 'video/add', component: AddvideoComponent},
  { path: 'video/search', component: ListvideoComponent},
  { path: 'flash/add', component: AddflashComponent},
  { path: 'flash/search', component: ListflashComponent},
  { path: 'genuine/add', component: AddgenuineComponent},
  { path: 'genuine/search', component: ListgeniuneComponent},
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
    NewshomeComponent,
    VideohomeComponent,
    GenuinehomeComponent,
    FlashhomeComponent,
    WelcomeComponent,
    HomeviewComponent,
    AddgenuineComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload'})
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
