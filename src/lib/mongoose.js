import mongoose from "mongoose";

const connection = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MongoDbURL);
    console.log("Connected to db!");
  } catch (err) {
    console.log(err);
  }
};
export default connection;
