import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MenubarComponent } from './elements/menubar/menubar.component';
import { RouterModule, Routes } from '@angular/router';
import { ListnewsComponent } from './webpages/listnews/listnews.component';
import { ListgroupitemComponent } from './elements/listgroupitem/listgroupitem.component';
import { ListflashComponent } from './webpages/listflash/listflash.component';
import { ListgeniuneComponent } from './webpages/listgeniune/listgeniune.component';
import { ListvideoComponent } from './webpages/listvideo/listvideo.component';
import { AddflashComponent } from './webpages/addflash/addflash.component';
import { AddvideoComponent } from './webpages/addvideo/addvideo.component';
import { AddnewsComponent } from './webpages/addnews/addnews.component';
import { AddgeniuneComponent } from './webpages/addgeniune/addgeniune.component';

const appRoutes: Routes = [
  { path: '', component: ListnewsComponent},
  { path: 'flash', component: ListflashComponent },
  { path: 'video', component: ListvideoComponent },
  { path: 'geniune', component: ListgeniuneComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ListnewsComponent,
    ListgroupitemComponent,
    ListflashComponent,
    ListgeniuneComponent,
    ListvideoComponent,
    AddflashComponent,
    AddvideoComponent,
    AddnewsComponent,
    AddgeniuneComponent
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
