# AWS Lambda Function for Contact Form Email Handling
This AWS Lambda function is designed to handle email submissions from the contact form in the main application. When a user submits the form, the data is sent to this Lambda function via an API Gateway endpoint. The Lambda function uses the SendGrid API to send the email.

## Setup and Configuration
### Prerequisites
- Node.js and npm installed on your local machine.
- A SendGrid API Key with permissions to send emails.
- AWS CLI configured with necessary permissions to deploy Lambda functions (optional for direct AWS Console setup).

### Environment Variables
This Lambda function requires the following environment variable:

- `SENDGRID_API_KEY`: Your SendGrid API key, which is used to send emails.

You can set this in the AWS Lambda console under Configuration > Environment variables.

### Dependencies
The function uses @sendgrid/mail for sending emails via SendGrid. Install dependencies by running:

```bash
npm install
```

## Deployment
### Manual Deployment (ZIP Upload)
1. Navigate to the `send-contact-email` directory:
      
    ```bash
    cd lambda/send-contact-email
    ```
2. Install the dependencies if not already installed:
    
    ```bash
    npm install
    ```
3. Zip the contents of the directory (including `node_modules`, `index.js`, `package.json`, and `package-lock.json`):

    ```bash
    zip -r function.zip .
    ```
4. Go to the AWS Lambda Console and create or update a Lambda function.
   - Set the runtime to Node.js 18.x (or compatible version).
   - Upload the `function.zip` file.
   - Properly uploaded zip file will look something like this:
     <img width="1211" alt="Screenshot 2024-11-02 at 4 44 35 PM" src="https://github.com/user-attachments/assets/1153205e-af58-4e1d-b69d-4c67a723b727">
5. Add the `SENDGRID_API_KEY` environment variable in the Lambda console.

## Error Handling
If the Lambda function encounters an error (e.g., invalid API key or network issues), it will log the error to CloudWatch and return a 500 status code to the client, along with an error message.
