import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => 
      import('./home/home.page').then((m) => m.HomePage),

    children: [                        // <- rutas hijas DENTRO de home
      {
        path: 'consejo',               // -> URL final: /home/consejo
        loadComponent: () =>
          import('./home/consejo/consejo.page')
            .then((m) => m.ConsejoPage),
      },
      {
        path: 'ayuda',                 // -> URL final: /home/ayuda
        loadComponent: () =>
          import('./home/ayuda/ayuda.page')
            .then((m) => m.AyudaPage),
      },
    ],
  },
  {
    path: 'acerca',
    loadComponent: () => 
      import('./acerca/acerca.page').then((m) => m.AcercaPage),
  },
  {
    path: 'contacto',
    loadComponent: () => 
      import('./contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'consejo',
    loadComponent: () => 
      import('./home/consejo/consejo.page').then( m => m.ConsejoPage)
  },
  {
    path: 'ayuda',
    loadComponent: () => import('./home/ayuda/ayuda.page').then( m => m.AyudaPage)
  },
];
