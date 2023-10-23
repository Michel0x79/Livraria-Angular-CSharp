import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BookDisplayComponent } from '../book-display/book-display.component';


@Component({
  selector: 'Livro-nav-bar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, BookDisplayComponent],
  styleUrls: ['./nav-bar.component.scss'],
  templateUrl:'./nav-bar.component.html',
  styles: [
  ]
})
export class NavBarComponent {

}
