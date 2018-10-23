import { Http, HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogService } from './dog.service';

export function dogFactory(http: Http) {
    return new DogService(http, "https://dog.ceo/api/breeds/list/all");
}

@NgModule({
    imports: [CommonModule, HttpModule],
    providers: [{provide: DogService, useFactory: dogFactory, deps: [Http]}],
    declarations: []
  })
  export class DogModule { }