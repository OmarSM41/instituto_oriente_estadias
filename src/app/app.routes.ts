import { Routes } from '@angular/router';
import { HomePage } from './features/pages/home/home-page.component';
import { BlogPage } from './features/pages/blog/blog-page.component';
import { GalleryPage } from './features/pages/gallery/gallery-page.component';
import { FormularioPage } from './features/pages/formulario/formulario-page.component';
import { ShopPage } from './features/pages/shop/shop-page.component';

export const routes: Routes = [
  { path: '', component: HomePage, },
  { path: 'blog', component: BlogPage },
  { path: 'gallery', component: GalleryPage },
  { path: 'formulario', component: FormularioPage },
  { path: 'shop', component: ShopPage },
];

