import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-breeds',
  templateUrl: './breeds.component.html',
  styleUrls: ['./breeds.component.scss']
})
export class BreedsComponent implements OnInit {

  breeds: Object;
  currentBreedImages: string[];

  constructor(private data: DataService) { }

  ngOnInit() {
    // this.data.getBreeds().subscribe(
    //   data => this.breeds = data
    // );

    this.data.getBreeds().subscribe(data => {
      this.breeds = Object.keys(data['message']);
    });

  }

  getDogImage(breed: string) {

    this.data.getBreedImages(breed).subscribe(data => {
      this.currentBreedImages = data['message'];
    });
    console.log(this.currentBreedImages[1]);
    return this.currentBreedImages[1];
  }

}
