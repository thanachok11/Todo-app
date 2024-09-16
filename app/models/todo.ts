import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  status: { type: Boolean, default: false },
  duedate: String,
});

const Todo = mongoose.models.Todo || mongoose.model("Todo", TodoSchema);
export default Todo;
