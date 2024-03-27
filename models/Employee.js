import mongoose, { model } from "mongoose";

const { Schema } = mongoose;

const EmployeeSchema = new Schema({
  department: {
    type: String,
    required: true,
  },
  empname: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  joindate: {
    type:String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  salary: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Employee = model("employees", EmployeeSchema); // Updated model name
Employee.createIndexes();

export default Employee;
