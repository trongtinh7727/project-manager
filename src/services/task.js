import api from './api';

const TaskService = {
  getTasks: (workspaceId) => api.get(`/workspaces/${workspaceId}/tasks`),
  getTaskById: (workspaceId, taskId) => api.get(`/workspaces/${workspaceId}/tasks/${taskId}`),
  createTask: (workspaceId, taskData) => api.post(`/workspaces/${workspaceId}/tasks`, taskData),
  updateTask: (workspaceId, taskId, updatedData) => api.put(`/workspaces/${workspaceId}/tasks/${taskId}`, updatedData),
  deleteTask: (workspaceId, taskId) => api.delete(`/workspaces/${workspaceId}/tasks/${taskId}`),
};

export default TaskService;