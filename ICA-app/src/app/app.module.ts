import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { SongsComponent } from './songs/songs.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongService } from './song.service';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SongsComponent,
    SongDetailComponent
  ],
  imports: [
	NgbModule.forRoot(),
    BrowserModule,
	AngularFontAwesomeModule,
	AppRoutingModule
  ],
  providers: [SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
