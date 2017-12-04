import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
	
	song: Song = {
		id: 1,
		title: "Come What Ever May",
		album: "Come What Ever May",
		artist: "Stone Sour",
		lyrics: "to-do",
		release_year: 2010
	};
	
  constructor() { }

  ngOnInit() {
  }

}
