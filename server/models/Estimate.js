import mongoose from "mongoose";
import estimateItem from "./EstimateItem.js";

const estimateSchema = new mongoose.Schema({
  estimateItems: [estimateItem.schema],
});

const Estimate = mongoose.model("Estimate", estimateSchema);

export default Estimate;
