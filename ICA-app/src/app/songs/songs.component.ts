import { Component, OnInit } from '@angular/core';

import { Song } from '../song';
import { SongService } from '../song.service';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

	songs : Song[];
	selectedSong : Song;

  constructor(private songService: SongService) { }

  ngOnInit() {
      this.getSongs();
  }

  onSelect(song: Song): void {
      this.selectedSong = song;
  }

  getSongs() {
      this.songService.getSongs().then((songs) => {this.songs = songs});
  }

}
