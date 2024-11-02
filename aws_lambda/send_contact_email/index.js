const sgMail = require("@sendgrid/mail");
const fetch = require("node-fetch");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    try {
        const { name, email, subject, message, recaptchaToken } = JSON.parse(event.body);

        // Validate input fields
        if (!name || !email || !subject || !message) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "All fields are required." }),
            };
        }

        // Verify reCAPTCHA
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${recaptchaToken}`, {
            method: "POST",
        });

        const recaptchaData = await recaptchaResponse.json();

        if (!recaptchaData.success) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "reCAPTCHA verification failed." }),
            };
        }

        // Prepare email content
        const msg = {
            to: "kaylei.burke@gmail.com", // Replace with your recipient email
            from: "kaylei.burke@gmail.com", // Must be a verified sender in SendGrid
            subject: subject || "No Subject",
            text: `From: ${name} <${email}>\n\n${message}`,
            html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p>${message}</p>`,
        };

        // Send email using SendGrid
        await sgMail.send(msg);

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Email sent successfully!" }),
        };
    } catch (error) {
        console.error("Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to send email", details: error.message }),
        };
    }
};
