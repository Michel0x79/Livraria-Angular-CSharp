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

  GetBookById(id: number)
  {
    return this.client.get<Books>(this.urlPath + '/' + id);
  }

  InsertNewBook(newBook: Books){
      return this.client.post<Books>(this.urlPath, newBook, {responseType: 'json'});
  }

  RemoveBook(id: number){
    return this.client.delete(this.urlPath + '/' + id);
  }

  UpdateBook(id: number, book: Books)
  {
    if(id != book.id) return;
    
    return this.client.put<Books>(this.urlPath + '/' + id, book);
  }
}
