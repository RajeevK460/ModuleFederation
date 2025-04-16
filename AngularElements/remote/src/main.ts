import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { createCustomElement } from '@angular/elements';
import { BannerRemoteComponent } from './app/banner-remote/banner-remote.component';

bootstrapApplication(AppComponent, appConfig)
.then(appRef => {
  // Create the custom element from the standalone component.
  const element = createCustomElement(BannerRemoteComponent, { injector: appRef.injector });
  // Define the custom element, if not already defined.
  if (!customElements.get('app-banner-remote')) {
    customElements.define('app-banner-remote', element);
  }
})
  .catch((err) => console.error(err));
