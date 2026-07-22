import { Routes } from '@angular/router';
import { Home } from './composents/home/home';
import { Products } from './composents/products/products';
import { About } from './composents/about/about';
import { Connexion } from './composents/connexion/connexion';
import { Inscription } from './composents/inscription/inscription';


export const routes: Routes = [ 
    { path: '', component: Home },
    { path: 'products', component: Products },
    { path: 'about', component: About },
    { path: 'connexion', component: Connexion },
    { path: 'inscription', component: Inscription },
];
