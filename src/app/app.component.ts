import { Component } from '@angular/core';
import { RickAndMortyService } from 'src/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // app.component.ts
  currentPage: string = 'inicio';
  characters: any[] = [];
  page: number = 1;
  pageSize: number = 10;

  constructor(private rickAndMortyService: RickAndMortyService) {}

  start() {
    this.currentPage = 'loading';

    // Llamada inicial a la API para cargar la primera página
    this.rickAndMortyService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = data.results;
      this.currentPage = 'personajes';
    });
  }

  loadPage(page: number) {
    this.page = page;
    this.currentPage = 'loading';

    // Llamada a la API para cargar solo las tarjetas de la página actual
    this.rickAndMortyService.getCharacters(this.page).subscribe((data: any) => {
      this.characters = data.results;
      this.currentPage = 'personajes';
    });
  }

  goBack() {
    this.currentPage = 'inicio';
  }


}
