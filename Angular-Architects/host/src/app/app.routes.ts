import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  // ... other routes
  {
    path: 'shared-button-demo',
    loadComponent: () =>
      loadRemoteModule('sharedui', './Button')
        .then(m => m.ButtonComponent)
  }
];
