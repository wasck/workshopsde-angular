import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AboutModule} from './about/about.module';
import {NavigationComponent} from './navigation/navigation.component';
import {MatListModule} from '@angular/material/list';
import {InfoBoxComponent} from './info-box/info-box.component';
import {MatButtonModule} from '@angular/material/button';
import {MouseCursorComponent} from './mouse-cursor/mouse-cursor.component';
import {TitleBoxComponent} from './title-box/title-box.component';
import {MatCardModule} from '@angular/material/card';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    InfoBoxComponent,
    MouseCursorComponent,
    TitleBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    AboutModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NavigationComponent, InfoBoxComponent, MouseCursorComponent, TitleBoxComponent]
})
export class AppModule { }
