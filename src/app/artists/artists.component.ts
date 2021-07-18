/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { storeService } from 'src/app/service/store.service';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent{
  artists!: any;
  name!: string;
  artist!: any;

  constructor(private data: storeService, private router: ActivatedRoute) {
    this.name = this.router.snapshot.params['name'];
    this.artist = this.data.getArtistByName(this.name);

    this.router.params.subscribe((params) => {
      this.name = params.name;
      this.artist = this.data.getArtistByName(this.name);

      this.data.getArtistByName(this.name).subscribe((i) => {
        this.artists = i;
      });
    });
  }



}
