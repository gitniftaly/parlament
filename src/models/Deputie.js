import mongoose from "mongoose";

export const deputiesSchema = new mongoose.Schema({
  idn: { type: Number },
  name: { type: String },
  birthPlace: { type: String },
  education: { type: String },
  accupation: { type: String },
  profession: { type: String },
  azcitizenship: { type: String },
  familystatus: { type: String },
  partimember: { type: String },
  country: { type: String },
  img: { type: String },
  canId: { type: Number },
  vote: { type: Number },
});
const Deputie =
  mongoose.models.Deputie || mongoose.model("Deputie", deputiesSchema);

export default Deputie;
