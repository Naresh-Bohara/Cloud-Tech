const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');


/* for frontend(index.html)
 Users\dell>docker run --name frontend --network my-network -p 8080:80 -v "C:\Users\dell\Desktop\Cloud Tech\day-7\fron
tend\index.html:/user/share/nginx/html" nginx:alpine
Unable to find image 'nginx:alpine' locally
 */

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/taskdb', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Define Task Schema and Model
const taskSchema = new mongoose.Schema({
  taskName: String,
  completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

// Routes

// GET /tasks - Retrieve all tasks
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    console.log(`Fetched ${tasks.length} tasks from the database.`);
    res.json(tasks);
  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: 'Error fetching tasks' });
  }
});

// POST /tasks - Create a new task
app.post('/tasks', async (req, res) => {
  const { taskName } = req.body;
  console.log(`Attempting to insert task: ${taskName}`);

  const newTask = new Task({
    taskName,
    completed: false
  });

  try {
    const savedTask = await newTask.save();
    console.log(`Task inserted successfully: ${savedTask}`);
    res.status(201).json(savedTask);
  } catch (error) {
    console.error('Error inserting task:', error);
    res.status(500).json({ error: 'Error inserting task' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
