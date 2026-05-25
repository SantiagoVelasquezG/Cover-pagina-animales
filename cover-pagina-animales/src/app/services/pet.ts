import { Injectable } from '@angular/core';

export interface Pet {
  id: number;
  name: string;
  age: number;
  description: string;
  type: 'cat' | 'dog';
  breed: string;
  gender: 'Macho' | 'Hembra';
}

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private cats: Pet[] = [
    { id: 1, name: 'Mishi', age: 2, breed: 'Mestizo', gender: 'Macho', type: 'cat', description: 'Tranquilo y cariñoso, ideal para apartamento.' },
    { id: 2, name: 'Luna-Lunera', age: 1, breed: 'Siamés', gender: 'Hembra', type: 'cat', description: 'Juguetona y curiosa, le encanta explorar.' },
    { id: 3, name: 'Mufasa', age: 4, breed: 'Persa', gender: 'Macho', type: 'cat', description: 'Adulto independiente, muy limpio y silencioso.' },
    { id: 4, name: 'Pelusa', age: 3, breed: 'Mestizo', gender: 'Hembra', type: 'cat', description: 'Adora los mimos y dormir en el sofá.' },
    { id: 5, name: 'Garfield', age: 5, breed: 'Mestizo', gender: 'Macho', type: 'cat', description: 'Gordito y dormilón, fan de la lasaña.' },
    { id: 6, name: 'Nala', age: 2, breed: 'Mestizo', gender: 'Hembra', type: 'cat', description: 'Muy sociable, se lleva bien con niños.' },
  ];

  private dogs: Pet[] = [
    { id: 1, name: 'Rocky', age: 3, breed: 'Labrador', gender: 'Macho', type: 'dog', description: 'Enérgico y leal, ideal para casas con jardín.' },
    { id: 2, name: 'Canela', age: 2, breed: 'Golden', gender: 'Hembra', type: 'dog', description: 'Dulce y tranquila, perfecta para familias con niños.' },
    { id: 3, name: 'Thor', age: 4, breed: 'Pastor Alemán', gender: 'Macho', type: 'dog', description: 'Inteligente y obediente, le encanta aprender trucos.' },
    { id: 4, name: 'Lola', age: 1, breed: 'Beagle', gender: 'Hembra', type: 'dog', description: 'Cachorra curiosa y juguetona, llena de energía.' },
    { id: 5, name: 'Toby', age: 6, breed: 'Bulldog', gender: 'Macho', type: 'dog', description: 'Adulto tranquilo, prefiere paseos cortos y mimos.' },
    { id: 6, name: 'Cocosete', age: 3, breed: 'Poodle', gender: 'Hembra', type: 'dog', description: 'Sociable con otros perros, ama los parques.' },
  ];

  getCats(): Pet[] {
    return this.cats;
  }

  getDogs(): Pet[] {
    return this.dogs;
  }

  getCatById(id: number): Pet | undefined {
    return this.cats.find(c => c.id === id);
  }

  getDogById(id: number): Pet | undefined {
    return this.dogs.find(d => d.id === id);
  }
}
