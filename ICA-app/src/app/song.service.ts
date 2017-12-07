import { Injectable } from '@angular/core';

import { Song } from './song';
import { SONGS } from './mock-songs';

@Injectable()
export class SongService {

    getSongs(): Promise<Song[]> {
      return Promise.resolve(SONGS);
  }

}
