import { Router } from "express";
import sgMail from "@sendgrid/mail";

const router = Router();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// Create estimate route
router.post("/", async (request, response) => {
  console.log(request.body);
  try {
    const { toEmail } = request.body;
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);
    return response.status(500).json(error.errors);
  }
});

export default router;
