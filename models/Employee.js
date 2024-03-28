import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  department: { type: String },
  empname: {
    type: String,
    required: true,
  },
  mobile: { type: Number },
  gender: { type: String },
  joindate: { type: Date },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary: { type: Number },
  password: {
    type: String,
    required: true,
  },
  active: { type: Boolean,default:false},
});

const EmpUser = model("employees", UserSchema);
EmpUser.createIndexes();
export default EmpUser;
