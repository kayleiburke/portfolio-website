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
- **Skills and Experience Display**: Categorized skill tags with detailed sections for work experience and education.
- **Dynamic Routing**: Leveraging React Router for client-side navigation.
- **SEO-Friendly**: Metadata and optimized HTML for search engine visibility.

## Technologies

- **Frontend**: React.js, Axios, React Router, React Helmet
- **UI Components**: Custom components from the Chester template, with additional elements for displaying data dynamically
- **Deployment**: AWS S3 (static hosting) + CloudFront (CDN)
- **CI/CD**: GitHub Actions for automated build and deployment

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

This project is deployed on AWS using S3 for static hosting and CloudFront as the CDN. Here are the high-level steps:

1. **Build the React App**:  
   GitHub Actions builds the production bundle via `npm run build`.

2. **Sync to S3**:  
   The build output is synced to an S3 bucket configured for static website hosting.

3. **Invalidate CloudFront Cache**:  
   After each deploy, a CloudFront cache invalidation is triggered to ensure the latest build is served immediately.

4. **Domain Configuration**:  
   The custom domain (`kayleiburke.com`) was registered on GoDaddy, with DNS records pointing to the CloudFront distribution.

5. **Continuous Deployment with GitHub Actions**:  
   Every push to `main` automatically triggers the build, S3 sync, and CloudFront invalidation.

## Credits

- **Template**: [Chester - React Personal Portfolio Template](https://themeforest.net/item/chester-react-personal-portfolio-template/24952954?utm_source=Iterable&utm_medium=email&utm_campaign=market_email_workflow_t_orderconfirmation_all) by ThemeForest
