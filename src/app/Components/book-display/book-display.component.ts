import { Component } from '@angular/core';
import { CommonModule, formatDate } from '@angular/common';
import { Books } from 'src/app/Interfaces/books';
import { BookServiceService } from 'src/app/Services/book-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BookDetailsModalComponent } from '../book-details-modal/book-details-modal.component';

@Component({
  selector: 'Livro-book-display',
  standalone: true,
  imports: [CommonModule, HttpClientModule, BookDetailsModalComponent],
  templateUrl: './book-display.component.html',
  styleUrls: [ './book-display.component.scss' ]
})
export class BookDisplayComponent {

  isModalOpen = false;
    books$ = new Observable<Books[]>();

  constructor(private _bookService: BookServiceService,  ) {
      this.ObterTodosOsLivro();
     
  }

  ObterTodosOsLivro(){
    this.books$ = this._bookService.GetAllBooks();
    // console.log(this.books$)
  }

  openModal(book: Books){
    // this.isModalOpen = true;
    book.modalOpen = true;
  }
}
