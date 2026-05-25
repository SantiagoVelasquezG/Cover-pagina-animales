import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PetService, Pet } from '../services/pet';

@Component({
  selector: 'app-dog-detail',
  imports: [RouterLink],
  templateUrl: './dog-detail.html',
  styleUrl: './dog-detail.css'
})
export class DogDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private petService = inject(PetService);

  dog: Pet | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.dog = this.petService.getDogById(id);
  }
}