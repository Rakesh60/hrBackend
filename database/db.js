//rakesh12345
//mongodb+srv://rakeshibm909:rakesh12345@meardatabase.fzh6dii.mongodb.net/eNotebook
import { connect } from "mongoose";

const connectToMongo = async () => {
  try {
    // await connect(process.env.MONGO_URI);
    await connect(
      // "mongodb+srv://rakeshibm909:rakesh12345@meardatabase.fzh6dii.mongodb.net/hrmproject"
      "mongodb://localhost:27017/hrmproject"
    );
    console.log("----Database connected Successfully");
  } catch (error) {}
};
export default connectToMongo;
