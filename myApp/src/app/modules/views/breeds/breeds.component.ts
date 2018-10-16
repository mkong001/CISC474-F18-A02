import { DialogService } from 'ng2-bootstrap-modal';
import { DogService } from '../../modules/dog/dog.service.ts';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-artists',
    templateUrl: './artists.component.html',
    styleUrls: ['./artists.component.css']
  })
  export class ArtistsComponent {
    artists: any[] = [ ];
    attributes: any[] = [ ];
    constructor(private _apiSvc: LastFmService, private _dialogService: DialogService) {
      _apiSvc.getArtists(1).subscribe(x => {
        this.artists = x.artists.artist;
        this.attributes = x.artists['@attr'];
       });
    }
  
    showDetail(index, artist) {
      console.log(index);
      console.log(artist.name);
      const disposable =  this._dialogService.addDialog(ArtistPopupComponent,  {
                        title: artist.name,
                        message: 'Playcount: ' + artist.playcount,
                        linkUrl: artist.url,
                        imageUrl: artist.image[2]['#text']})
                        .subscribe((isConfirmed) => {
                        });
                    setTimeout(() => {
                        disposable.unsubscribe();
                    }, 10000);
    }
  }