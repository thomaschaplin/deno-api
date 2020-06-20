import { Context } from "https://deno.land/x/oak/mod.ts";
import Database from "../config/database.ts";
import { DB_NAME, DB_URL } from "../config/config.ts";

const db = new Database(DB_NAME, DB_URL);
db.connect();

const database = db.getDatabase;
const tasks = database.collection("tasks");

interface Task {
  title: string;
  description: string;
}

export const getAllTasks = async ({ response }: Context): Promise<void> => {
  const allTasks: Task[] = await tasks.find();
  response.status = 200;
  response.body = allTasks.length ? allTasks : { message: "No tasks found." };
};

export const addTask = async (
  { request, response }: Context,
): Promise<void> => {
  const task = ((await request.body()).value);
  if (task.title && task.description) {
    await tasks.insertOne(task);
    response.status = 200;
    response.body = {
      task: task,
      message: "Task has been successfully created.",
    };
    return;
  }
  response.status = 400;
  response.body = { message: "Task values are invalid." };
};

export const updateTaskById = async (
  { params, request, response }: {
    params: { id: string };
    response: any;
    request: any;
  },
): Promise<void> => {
  const { id } = params as { id: string };

  const taskToUpdate = ((await request.body()).value);
  const task = await tasks.findOne({ _id: { "$oid": id } });
  if (task) {
    const { matchedCount } = await tasks.updateOne(
      { _id: { "$oid": id } },
      { $set: taskToUpdate },
    );
    if (matchedCount) {
      response.status = 204;
      response.body = { message: "Task updated successfully." };
      return;
    }
    response.status = 400;
    response.body = { message: "Unable to update task." };
    return;
  }
  response.status = 404;
  response.body = { message: "Task could not be found." };
};

export const getTaskById = async (
  { params, response }: { params: { id: string }; response: any },
): Promise<void> => {
  const { id } = params as { id: string };
  const task = await tasks.findOne(
    { _id: { "$oid": id } },
  );
  if (task) {
    response.status = 200;
    response.body = task;
    return;
  }
  response.status = 404;
  response.body = { message: "Task could not be found." };
};

export const deleteTask = async (
  { params, response }: { params: { id: string }; response: any },
): Promise<void> => {
  const { id } = params as { id: string };
  const task = await tasks.findOne({ _id: { "$oid": id } });

  if (task) {
    await tasks.deleteOne({ _id: { "$oid": id } });
    response.status = 204;
    response.body = { message: "Task deleted successfully." };
    return;
  }
  response.status = 404;
  response.body = { message: "Task could not be found." };
};
