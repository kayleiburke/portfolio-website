const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async (event) => {
    try {
        console.log("Received event:", event); // Log the entire event

        // Parse the event body and use the exact keys present in the request
        const { name, email, subject, message, captchaToken } = JSON.parse(event.body);

        console.log("Parsed data:", { name, email, subject, message, captchaToken }); // Log parsed data

        // Validate input fields
        if (!name || !email || !subject || !message) {
            console.error("Validation failed: Missing required fields");
            return {
                statusCode: 400,
                body: JSON.stringify({ error: "All fields are required." }),
            };
        }

        // Verify reCAPTCHA
        const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
        const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
        const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${captchaToken}`, {
            method: "POST",
        });

        const recaptchaData = await recaptchaResponse.json();
        console.log("reCAPTCHA response:", recaptchaData); // Log reCAPTCHA response

        if (!recaptchaData.success) {
            console.error("reCAPTCHA verification failed");
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

        console.log("Email sent successfully");
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
