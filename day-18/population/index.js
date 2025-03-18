require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/NewDB");

// student schema
const studentSchema = new Schema({
  name: String,
  age: Number,
  subject: String,
});

const Student = mongoose.model("Student", studentSchema);

// class schema
const classSchema = new Schema({
  name: { type: String, required: true, unique: true },
  Students: [{ type: mongoose.Schema.Types.ObjectId, ref: "Student" }], 
});

const Class = mongoose.model("Class", classSchema);

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// Create a Student
server.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: "Student created", student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create a Class
server.post("/class", async (req, res) => {
  try {
    const newClass = new Class(req.body);
    await newClass.save();
    res.status(201).json({ message: "Class created", class: newClass });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Assign a Student to a Class
server.post("/class/:classId/add-student/:studentId", async (req, res) => {
  try {
    const { classId, studentId } = req.params;
    const selectedClass = await Class.findById(classId);
    if (!selectedClass) return res.status(404).json({ message: "Class not found" });

    selectedClass.Students.push(studentId);
    await selectedClass.save();

    res.status(200).json({ message: "Student added to class", class: selectedClass });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get All Students
server.get("/students", async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get All Classes with Populated Students
server.get("/class", async (req, res) => {
  try {
    const classes = await Class.find().populate("Students"); // Populating Students field
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Start the Server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
