import mongoose from "mongoose";

const estimateItemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const EstimateItem = mongoose.model("EstimateItem", estimateItemSchema);

export default EstimateItem;
