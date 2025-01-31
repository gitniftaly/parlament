import mongoose from "mongoose";

const connection = async () => {
  try {
    await mongoose.connect(process.env.MongoDbURL);
    console.log("Connected to db!");
  } catch (err) {
    console.log(err);
  }
};
export default connection;
