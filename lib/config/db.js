import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://NextjsBlogApp:Nextblogapp123@cluster0.czcur.mongodb.net/nextjs-blogapp')
    console.log("DB Connected");
}

// export default connectDB;

//mongodb+srv://chatBot:chatBot123@cluster0.fl2m1ja.mongodb.net/bot