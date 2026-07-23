import { Routes } from '@angular/router';
import { Home } from './composents/home/home';
import { Products } from './composents/products/products';
import { About } from './composents/about/about';
import { Connexion } from './composents/connexion/connexion';
import { Inscription } from './composents/inscription/inscription';
import { AddProduct } from './composents/add-product/add-product';
import { Admin } from './composents/admin/admin';
import { Contact } from './composents/contact/contact';


export const routes: Routes = [ 
    { path: '', component: Home },
    { path: 'products', component: Products },
    { path: 'about', component: About },
    { path: 'connexion', component: Connexion },
    { path: 'inscription', component: Inscription },
    { path: 'addProduct', component: AddProduct },
    { path: 'admin', component: Admin },
    { path: 'contact', component: Contact },
];
