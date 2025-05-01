import { Router } from "express";
import Estimate from "../models/Estimate.js";

const router = Router();

// Create a new estimate route
router.post("/", async (request, response) => {
  console.log(request.data);
  try {
    const newEstimate = new Estimate(request.body);
    console.log("new Estimate", newEstimate);
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

// Get estimate by id
router.get("/:id", async (request, response) => {
  console.log("request body", request.body);
  try {
    console.log("Hello", request.data);
    const data = await Estimate.findById(request.params.id);

    response.json(data);
  } catch (error) {
    // Output error to the console incase it fails to send in response
    console.log(error);

    return response.status(500).json(error.errors);
  }
});

export default router;
