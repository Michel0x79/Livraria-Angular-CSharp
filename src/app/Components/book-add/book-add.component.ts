import { Component, Input, OnInit, inject } from "@angular/core";
import { CommonModule, formatDate } from "@angular/common";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from "@angular/forms";
import { Books } from "src/app/Interfaces/books";
import { BookServiceService } from "src/app/Services/book-service.service";
import { Observable, async, first } from "rxjs";

@Component({
  selector: "Livro-book-add",
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: "./book-add.component.html",
  styleUrls: ["./book-add.component.scss"],
})
export class BookAddComponent {
  bookForm: FormGroup;
  route: ActivatedRoute = inject(ActivatedRoute);
  currentBookId: number;
  livro?: Books;
  isEdit: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _bkService: BookServiceService,
    private router: Router
  ) {
    this.CriarForm();
    this.currentBookId = Number(this.route.snapshot.params["id"]);
    if (this.currentBookId) {
      this.isEdit = true;
      this.fillForm();
    }
  }

  CriarForm(): void {
    this.bookForm = this.fb.group({
      id: [""],
      title: ["", Validators.required],
      author: ["", Validators.required],
      publisher: [""],
      publicationDate: ["", Validators.required],
      pages: ["", Validators.required],
      language: ["", Validators.required],
      imgUrl: ["", Validators.required],
    });
  }

  onSubmit(): void {
    if (!this.bookForm.valid) {
      return;
    }

    const bookData: Books = this.bookForm.value;

    if (this.isEdit) 
    {
      // console.log(bookData.publicationDate);
      
      this._bkService.UpdateBook(this.currentBookId, bookData)?.subscribe();
    } 
    else {

      this._bkService.InsertNewBook(bookData).subscribe();
      // console.log(v);

    }

    this.router.navigate([""]);
  }

  fillForm() {
    this._bkService.GetBookById(this.currentBookId).subscribe((b) => {
      this.bookForm.patchValue(b);
   
      var d = formatDate(b.publicationDate, 'dd/MM/yyyy', 'en');
      console.log(d + ' data ');
    });
  }
}
