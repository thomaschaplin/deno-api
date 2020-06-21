import { Router } from "https://deno.land/x/oak/mod.ts";
import {
  getAllTasks,
  addTask,
  updateTaskById,
  getTaskById,
  deleteTask,
  deleteAllTasks,
} from "../controllers/task.ts";
import validateToken from "../middleware/validateToken.ts";

const taskRouter = new Router();

taskRouter.get("/tasks", getAllTasks);
taskRouter.post("/tasks", validateToken, addTask);
taskRouter.put("/tasks/:id", validateToken, updateTaskById);
taskRouter.get("/tasks/:id", getTaskById);
taskRouter.delete("/tasks/:id", validateToken, deleteTask);
taskRouter.delete("/tasks", validateToken, deleteAllTasks);

export default taskRouter;
