import { TracksComponent } from './tracks/tracks.component';
import { ArtistsComponent } from './artists/artists.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'artist/:name',
    component: ArtistsComponent,
    children: [{ path: 'track/:id', component: TracksComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
