// EmailTemplate.js
import React from "react";

const EmailTemplate = ({
  firstName,
  subject,
  message,
}: {
  firstName: string;
  subject: string;
  message: string;
}) => {
  return (
    <html>
      <body>
        <h1>{subject}</h1>
        <p>Dear {firstName},</p>
        <p>{message}</p>
        <p>Best regards,</p>
        <p>Your Company</p>
      </body>
    </html>
  );
};

export default EmailTemplate;
