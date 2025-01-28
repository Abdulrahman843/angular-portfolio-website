// Importing the Routes type from Angular's Router module
// Used to define the application's navigation paths and components
import { Routes } from '@angular/router';

// Importing components to map routes to their respective views
import { HomeComponent } from './home/home.component'; // Home page component
import { AboutComponent } from './about/about.component'; // About page component
import { PortfolioComponent } from './portfolio/portfolio.component'; // Portfolio page component
import { ContactComponent } from './contact/contact.component'; // Contact page component

// Define the application's route configuration
export const routes: Routes = [
  {
    path: '', // Base path (empty URL path)
    redirectTo: '/home', // Redirects to the HomeComponent route
    pathMatch: 'full' // Ensures the full path is matched (used for default routing)
  },
  {
    path: 'home', // Route for the Home page
    component: HomeComponent // Maps to the HomeComponent
  },
  {
    path: 'about', // Route for the About page
    component: AboutComponent // Maps to the AboutComponent
  },
  {
    path: 'portfolio', // Route for the Portfolio page
    component: PortfolioComponent // Maps to the PortfolioComponent
  },
  {
    path: 'contact', // Route for the Contact page
    component: ContactComponent // Maps to the ContactComponent
  },
  {
    path: '*', // Wildcard route for undefined or invalid paths
    redirectTo: '/home' // Redirects to the HomeComponent by default
  }
];


