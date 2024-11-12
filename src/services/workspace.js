import api from './api';

const WorkspaceService = {
  getWorkspaces: (userID) => api.get(`/user/${userID}/workspaces`),
  getWorkspaceById: (workspaceId) => api.get(`/workspace/${workspaceId}`),
  createWorkspace: (workspaceData) => api.post('/workspace', workspaceData),
  updateWorkspace: (workspaceId, updatedData) => api.put(`/workspace/${workspaceId}`, updatedData),
  deleteWorkspace: (workspaceId) => api.delete(`/workspace/${workspaceId}`),
};

export default WorkspaceService;
