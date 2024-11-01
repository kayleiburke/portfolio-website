# Kaylei Burke Portfolio Website

This is a personal portfolio website for showcasing my work experience, skills, and projects. The initial design was based on the [Chester - React Personal Portfolio Template](https://themeforest.net/item/chester-react-personal-portfolio-template/24952954?utm_source=Iterable&utm_medium=email&utm_campaign=market_email_workflow_t_orderconfirmation_all), with customizations made to reflect my background and professional experience. The project is deployed on AWS, utilizing a custom domain and cloud-based infrastructure.

## Table of Contents

- [Website](#website)
- [Features](#features)
- [Technologies](#technologies)
- [Setup and Installation](#setup-and-installation)
- [AWS Deployment](#aws-deployment)
- [Credits](#credits)

---

## Website
www.kayleiburke.com

## Features

- **Responsive Design**: Adaptable layout for desktop, tablet, and mobile viewing.
- **Skills and Experience Display**: Interactive and customizable skills bars, with detailed sections for work experience and education.
- **Dynamic Routing**: Leveraging React Router for client-side navigation.
- **SEO-Friendly**: Metadata and optimized HTML for search engine visibility.

## Technologies

- **Frontend**: React.js, Axios, React Router, React Helmet
- **UI Components**: Custom components from the Chester template, with additional elements for displaying data dynamically
- **Server**: Nginx for static file serving, configured to handle client-side routing for a single-page application (SPA)
- **Deployment**: AWS (Amazon Web Services), including ECS (Elastic Container Service) for containerized deployment
- **CI/CD**: GitHub Actions for automated testing, building, and deployment

## Setup and Installation

1. **Clone the Repository**:
   ```
   git clone https://github.com/kayleiburke/portfolio-website.git
   cd portfolio-website
   ```
2. **Set Node Version:**
   
   Ensure you’re using the correct Node version:
   ```
   nvm use 18.12.0
   ```
3. **Install Dependencies with pnpm:** 

    This project uses `pnpm` for package management. Install dependencies by running:
    ```
    pnpm install
    ```
4. **Run the development server:**

    Start the application locally:
    ```
    pnpm start
    ```
   Open http://localhost:3000 to view it in the browser.
5. **Build for Production:**

   To create a production build, run:
   ```
   npm run build
   ```

## AWS Deployment

This project is deployed on AWS, using ECS (Elastic Container Service) and Nginx as the server to host the React application. Here are the high-level steps used in deploying this project on AWS:

1. **Dockerize the Application**:  
   The application is containerized with a Dockerfile, which includes an Nginx server configured for client-side routing.

2. **Push to Amazon ECR (Elastic Container Registry)**:  
   The Docker image is stored in ECR for easy access by ECS.

3. **Deploy with Amazon ECS**:  
   ECS orchestrates the deployment, managing the container lifecycle and load balancing.

4. **Domain Configuration**:  
   The custom domain (`kayleiburke.com`) was registered on GoDaddy, with DNS records pointing to AWS.

5. **Continuous Integration with GitHub Actions**:  
   GitHub Actions is used for automated CI/CD workflows. The GitHub Actions pipeline builds the application, runs tests, and pushes the Docker image to Amazon ECR on each update. This ensures that the latest changes are automatically deployed to AWS ECS.

## Credits

- **Template**: [Chester - React Personal Portfolio Template](https://themeforest.net/item/chester-react-personal-portfolio-template/24952954?utm_source=Iterable&utm_medium=email&utm_campaign=market_email_workflow_t_orderconfirmation_all) by ThemeForest
- **Deployment**: Deployed on AWS using services such as ECS, ECR, and GoDaddy for domain management
- **CI/CD**: GitHub Actions for automated testing, building, and deployment workflows.