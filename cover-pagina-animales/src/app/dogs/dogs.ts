import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PetService, Pet } from '../services/pet';

@Component({
  selector: 'app-dogs',
  imports: [RouterLink],
  templateUrl: './dogs.html',
  styleUrl: './dogs.css'
})
export class Dogs {
  private petService = inject(PetService);
  dogs: Pet[] = this.petService.getDogs();
}
