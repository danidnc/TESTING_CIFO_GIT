import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/* import { IPosts } from 'src/shared/IPosts'; */

@Injectable({
  providedIn: 'root',
})
export class PostsServiceService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  //Llamada a la API
  makeRequest() {
    return new Promise((resolve) => {
      this.httpClient.get(this.url).subscribe(
        (data) => {
          resolve(data);
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }
}
