import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Books } from '../Interfaces/books';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {

  private urlPath = 'http://localhost:5265/v1/livros';
  //private urlPath = 'https://api.publicapis.org/entries';

  constructor( private client:HttpClient) { }

  GetAllBooks(){
     let b = this.client.get<Books[]>(this.urlPath);
     return b;
  }
}
