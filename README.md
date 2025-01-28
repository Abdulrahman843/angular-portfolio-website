# Portfolio Website

This is a personal portfolio website built using the **Angular framework**. It showcases my projects, skills, and experience. The application is built with **standalone components** instead of modules, and **Angular Router** is used for navigation.

---

## Features
- **Home Page**: Overview of my portfolio.
- **About Page**: Introduction and personal details, along with a profile picture.
- **Portfolio Page**: Highlights of my projects with descriptions and links.
- **Contact Page**: A form for visitors to get in touch.
- **Routing**: Seamless navigation between sections using Angular Router.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.

---

## Technologies Used
- **Frontend Framework**: Angular (Standalone Components)
- **Styling**: CSS, Bootstrap
- **Languages**: HTML, CSS, TypeScript
- **Tools**:
  - Angular CLI
  - Node.js
  - Visual Studio Code

---

## Key Details
1. **Profile Picture Location**:
   - The profile picture is placed in the **public** folder instead of the **assets** folder to ensure proper accessibility and rendering.
   - Image path in the HTML: 
     ```html
     <img src="/images/abdulrahman_pic.jpg" alt="Profile Picture">
     ```
    
2. **Routing**:
   - **Angular Router** is used for navigation instead of relying on modules.
   - The `routes` array defines paths for the `Home`, `About`, `Portfolio`, and `Contact` pages.
   - Example of routing setup in `app.routes.ts`:
     ```typescript
     import { Routes } from '@angular/router';
     import { HomeComponent } from './home/home.component';
     import { AboutComponent } from './about/about.component';
     import { PortfolioComponent } from './portfolio/portfolio.component';
     import { ContactComponent } from './contact/contact.component';

     export const routes: Routes = [
       { path: '', redirectTo: '/home', pathMatch: 'full' },
       { path: 'home', component: HomeComponent },
       { path: 'about', component: AboutComponent },
       { path: 'portfolio', component: PortfolioComponent },
       { path: 'contact', component: ContactComponent },
     ];
     ```

3. **No Modules Used**:
   - Instead of modules, standalone components are created. Each component imports its dependencies directly and is registered in the routing configuration.

---

## Getting Started
To run this project locally, follow these steps:

### Prerequisites
- **Node.js**: v18+
- **Angular CLI**: Install globally if not already installed:
    npm install -g @angular/cli

## Steps
1. Clone the repository:
git clone https://github.com/<your-github-username>/portfolio-website.git
2. Navigate into the project directory:
cd portfolio-website
3. Install dependencies:
npm install
4. Start the application:
ng serve
5. Open the application in your browser at:
http://localhost:4200

## Build and Deployment
To build the project for production:
1. Run the build command:
ng build --prod
2. The production-ready files will be available in the dist/ folder.
3. Deploy the files in the dist/ folder to a web server (e.g., Firebase Hosting, Netlify, GitHub Pages).

## Contact
For inquiries or feedback, feel free to contact me via:
Email: energyspur@gmail.com
GitHub: https://github.com/Abdulrahman843
LinkedIn: https://www.linkedin.com/in/abdulrahman-adewale-laoye-0bb28b105/

## Notes:
Ensure that the profile picture path (public/images/) is correctly referenced.
If any routing errors occur, verify that the paths in app.routes.ts match the component locations.
