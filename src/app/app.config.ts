// Import necessary Angular core functionalities.
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// Import Angular router functionalities to set up routing.
import { provideRouter } from '@angular/router';

// Import the application's routing configuration.
import { routes } from './app.routes';
// Import functionalities for client-side hydration and event replay to optimize rendering.
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

// Define the application's configuration as an ApplicationConfig object.
export const appConfig: ApplicationConfig = {
  providers: [
    // Enable zone-based change detection with event coalescing for performance optimization.
    provideZoneChangeDetection({ eventCoalescing: true }),

    // Provide the routing configuration to enable navigation between routes in the application.
    provideRouter(routes),

    // Enable client hydration with event replay for improved rendering and user interactions.
    provideClientHydration(withEventReplay())
  ]
};

