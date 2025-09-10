const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Medium'
  },
  dueDate: {
    type: Date
  },
  completed: {
    type: Boolean,
    default: false
  },
  tags: {
    type: String,
    default: []
  }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;