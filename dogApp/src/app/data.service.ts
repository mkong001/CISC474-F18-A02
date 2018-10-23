import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getBreeds() {
    return this.http.get('https://dog.ceo/api/breeds/list/all');
  }
  getBreedImages(breed) {
    return this.http.get('https://dog.ceo/api/breed/' + breed + '/images');
  }
}
