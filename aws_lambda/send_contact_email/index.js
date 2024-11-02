// Use require instead of import
const sgMail = require('@sendgrid/mail');

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Define the handler function
const handler = async (event) => {
    const { name, email, subject, message } = JSON.parse(event.body);

    const msg = {
        to: 'kaylei.burke@gmail.com', // Replace with the verified recipient email
        from: 'kaylei.burke@gmail.com', // Use a verified sender email from your SendGrid account
        subject: subject || 'No Subject',
        text: `From: ${name} <${email}>\n\n${message}`,
        html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
    };

    try {
        // Send the email
        await sgMail.send(msg);
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Email sent successfully!' }),
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to send email', details: error.message }),
        };
    }
};

// Export the handler using CommonJS syntax
module.exports = { handler };

