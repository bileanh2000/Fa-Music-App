/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { storeService } from 'src/app/service/store.service';

@Component({
  selector: 'app-tracks',
  templateUrl: './tracks.component.html',
  styleUrls: ['./tracks.component.css'],
})
export class TracksComponent implements OnInit {
  tracks!: any;
  id!: string;
  track!: any;

  constructor(private data: storeService, private router: ActivatedRoute) {
    this.id = this.router.snapshot.params['id'];
    this.track = this.data.getTracksById(this.id);

    this.router.params.subscribe((params) => {
      this.id = params.id;
      this.track = this.data.getTracksById(this.id);
      this.data.getTracksById(this.id).subscribe((i) => {
        this.tracks = i;
      });
    });
  }

  ngOnInit(): void {
    this.data.getTracksById(this.id).subscribe((i) => {
      this.tracks = i;
    });
  }
}
