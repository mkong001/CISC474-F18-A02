import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {
  breedname: string;
  breed: string[];

  constructor(private data: DataService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => this.breedname = params.breed);
   }

  ngOnInit() {

    this.data.getBreedImages(this.breedname).subscribe(data => {
      this.breed = data.message;
    });
  }

}
