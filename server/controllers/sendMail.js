import { Router } from "express";
import sgMail from "@sendgrid/mail";

const router = Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create estimate route
router.post("/", async (request, response) => {
  console.log(request.body);
  try {
    const toEmail = request.body;

    const msg = {
      to: process.env.SENDGRID_EMAIL, // Change to your recipient
      from: process.env.SENDGRID_EMAIL, // Change to your verified sender
      subject: "New message from Capstone",
      text: `${toEmail.email} has sent the following message ${toEmail.message}`,
    };
    console.log(msg);
    sgMail
      .send(msg)
      .then((data) => {
        response.json(data);
      })
      .catch((error) => {
        response.status(500).json(error.message);
      });
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

export default router;
