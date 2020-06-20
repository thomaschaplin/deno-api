const baseUrl = "http://localhost:4000";

export const loginRoutes = {
  login: `${baseUrl}/login`,
};

export const taskRoutes = {
  getAllTasks: `${baseUrl}/tasks`,
  addTask: `${baseUrl}/tasks`,
  updateTaskById: (taskId: string) => `${baseUrl}/tasks/${taskId}`,
  getTaskById: (taskId: string) => `${baseUrl}/tasks/${taskId}`,
  deleteTask: (taskId: string) => `${baseUrl}/tasks/${taskId}`,
};
