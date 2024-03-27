import express from "express";
import bcrypt from "bcryptjs";
//?Data model
const router = express.Router();
import Employee from "../models/Employee";


router.post("/signup", async (req, res) => {
  const {
    email,
    password,
    department,
    empname,
    mobile,
    gender,
    joindate,
    salary,
    active
  } = req.body; // Destructure employee data

  try {
    // Validation (implement validation for all fields)

    const existingEmployee = await Employee.findOne({ email }); // Check for existing email
    if (existingEmployee) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newEmployee = new Employee({
     
      email,
      password: hashedPassword,
      department,
      empname,
      mobile,
      gender,
      joindate,
      salary,
      active // Include any additional validated data fields
    });
    res.send(newEmployee)
    console.log(newEmployee)
    await newEmployee.save();
    res.status(201).json({ success: "Employee created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
});

export default router