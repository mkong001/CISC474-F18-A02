import { DialogService } from 'ng2-bootstrap-modal';
import { DogService } from 'src/app/modules/dog/dog.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-breeds',
    templateUrl: './breeds.component.html',
    styleUrls: ['./breeds.component.css']
  })
  export class BreedsComponent {
    breeds: any[] = [ ];
    //attributes: any[] = [ ];
    constructor(private _apiSvc: DogService, private _dialogService: DialogService) {
      _apiSvc.getBreeds(1).subscribe(x => {
        this.breeds = x.breeds.list;
        //this.attributes = x.artists['@attr'];
       });
    }

    /*
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
    }*/
  }