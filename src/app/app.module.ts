import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { AppComponent } from './app.component';
import { MenubarComponent } from './elements/menubar/menubar.component';
import { ToolbarComponent } from './elements/toolbar/toolbar.component';
import { SearchbarComponent } from './elements/searchbar/searchbar.component';
import { NewseditComponent } from './webpages/news/newsedit/newsedit.component';
import { NewsAddComponent } from './webpages/news/news-add/news-add.component';
import { ListComponent } from './webpages/list/list.component';
import { ListitemComponent } from './elements/listitem/listitem.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    ToolbarComponent,
    SearchbarComponent,
    NewseditComponent,
    NewsAddComponent,
    ListComponent,
    ListitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
