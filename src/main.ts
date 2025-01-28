// Import the function to bootstrap an Angular application in the browser.
// This is the main entry point for Angular applications.
import { bootstrapApplication } from '@angular/platform-browser';

// Import the application configuration object.
// The appConfig contains providers and other configurations needed for bootstrapping.
import { appConfig } from './app/app.config';

// Import the root application component.
// The AppComponent is the top-level component that serves as the starting point for the app.
import { AppComponent } from './app/app.component';

// Bootstrap the Angular application using the root AppComponent and the provided app configuration.
// This initializes the Angular application and attaches it to the browser's DOM.
bootstrapApplication(AppComponent, appConfig)
  // Catch and log any errors that occur during the bootstrapping process.
  .catch((err) => console.error(err));
