import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'

import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { BookDisplayComponent } from './Components/book-display/book-display.component';
import { Books } from './Interfaces/books';
import { BookServiceService } from './Services/book-service.service';

@Component({
  selector: 'Livro-root',
  standalone: true,
  imports: [CommonModule, NavBarComponent, BookDisplayComponent, HttpClientModule],
  providers: [BookServiceService],
  template: ` <Livro-nav-bar></Livro-nav-bar> 
              <Livro-book-display></Livro-book-display>
              `,
  styles: [],
})
export class AppComponent {
  title = 'Livraria.UI';
}
