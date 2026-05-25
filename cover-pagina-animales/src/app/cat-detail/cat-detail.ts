import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PetService, Pet } from '../services/pet';

@Component({
  selector: 'app-cat-detail',
  imports: [RouterLink],
  templateUrl: './cat-detail.html',
  styleUrl: './cat-detail.css'
})
export class CatDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private petService = inject(PetService);

  cat: Pet | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cat = this.petService.getCatById(id);
  }
}