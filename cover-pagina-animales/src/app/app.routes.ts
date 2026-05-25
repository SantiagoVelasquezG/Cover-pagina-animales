import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Dogs } from './dogs/dogs';
import { Cats } from './cats/cats';
import { Navbar } from './navbar/navbar';
import { DogDetail } from './dog-detail/dog-detail';
import { CatDetail } from './cat-detail/cat-detail';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dogs', component: Dogs },
  { path: 'cats', component: Cats },
  { path: 'home', component: Home },
  { path: 'navbar', component: Navbar },
  { path: 'dogs/:id', component: DogDetail },
  { path: 'cats/:id', component: CatDetail },
  { path: '**', redirectTo: '' }
];
