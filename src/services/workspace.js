import api from './api';

const WorkspaceService = {
  getWorkspaces: () => api.get('/workspaces'),
  getWorkspaceById: (workspaceId) => api.get(`/workspaces/${workspaceId}`),
  createWorkspace: (workspaceData) => api.post('/workspaces', workspaceData),
  updateWorkspace: (workspaceId, updatedData) => api.put(`/workspaces/${workspaceId}`, updatedData),
  deleteWorkspace: (workspaceId) => api.delete(`/workspaces/${workspaceId}`),
};

export default WorkspaceService;
