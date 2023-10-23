import { Routes } from "@angular/router";
import { BookAddComponent } from "./Components/book-add/book-add.component";
import { BookDisplayComponent } from "./Components/book-display/book-display.component";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./Components/nav-bar/nav-bar.component";

const routeConfig: Routes = [
    {
        path: '',
        component: BookDisplayComponent,
       title: 'Livraria do Futuro'
    },
    {
        path: 'addBook',
        component: BookAddComponent,
        title:'Adicionar Livro',

    },
    {
        path: 'editBook/:id',
        component: BookAddComponent,
        title: 'Editar Livro'
    }
]

export default routeConfig;
