import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetService, Pet } from '../services/pet';

@Component({
  selector: 'app-cats',
  imports: [RouterLink],
  templateUrl: './cats.html',
  styleUrl: './cats.css'
})
export class Cats {
  private petService = inject(PetService);
  cats: Pet[] = this.petService.getCats();
}


