import { Router } from "express";
import Estimate from "../models/Estimate.js";

const router = Router();

// Create estimate route
router.post("/", async (request, response) => {
  try {
    const newEstimate = new Estimate(request.body);

    const data = await newEstimate.save();

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    if ("name" in error && error.name === "ValidationError")
      return response.status(400).json(error.errors);

    return response.status(500).json(error.errors);
  }
});

// Get all estimates route
router.get("/", async (request, response) => {
  try {
    // Store the query params into a JavaScript Object
    const query = request.query; // Defaults to an empty object {}
    console.log("query", request.query);

    const data = await Estimate.find(query);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
