import { Component, Input } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Books } from "src/app/Interfaces/books";
import { BookServiceService } from "src/app/Services/book-service.service";
import { Route, Router, RouterLink } from "@angular/router";

@Component({
  selector: "Livro-book-details-modal",
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="modal" [ngClass]="{'show': bookDetails.modalOpen}" (click)="closeModal()">
  <div class="modal-content" (click)="stopPropagation($event)">
    <span class="close" (click)="closeModal()">&times;</span>
    <h2>{{bookDetails.title}}</h2>
    <p>{{bookDetails.author}}, 
    {{bookDetails.publicationDate | date: 'yyyy'}}, 
    {{bookDetails.publisher}}</p>
    <p>{{bookDetails.pages}} páginas </p>
    <p>Idioma '{{bookDetails.language}}'</p>
    <button [routerLink]="['editBook', bookDetails.id]" >Editar</button>
    <button (click)="excluir()">Excluir</button>
  </div>
</div>

<div class="overlay" [ngClass]="{'show': bookDetails.modalOpen}"></div>

  `,
  styleUrls: ['./book-details-modal.component.scss'],
})

export class BookDetailsModalComponent {
  // @Input() isModalOpen: boolean;
  @Input() bookDetails: Books;

  constructor(private bsvc: BookServiceService, private route: Router) {
    
  }

  closeModal() {
    // this.isModalOpen = false;
    this.bookDetails.modalOpen = false;
  }
  editar()
  {
    
  }
  excluir()
  {
    if(confirm("Confirmar a Esclusão?"))
    {
      this.bookDetails.modalOpen = false;
      this.bsvc.RemoveBook(this.bookDetails.id).subscribe();
      window.location.reload();
    }
  }
  stopPropagation(event: Event) {
    // event.stopPropagation();
  }
}
