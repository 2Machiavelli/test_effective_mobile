import mongoose from "mongoose";

import { Appeal } from "../Types/interfaces.js";

const { Schema, model } = mongoose;

const schema = new Schema<Appeal>({
  status: {
    type: String,
    default: "new",
  },
  theme: {
    type: String,
    trim: true,
    default: "",
  },
  text: {
    type: String,
    trim: true,
    default: "",
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export default model("Appeal", schema);
