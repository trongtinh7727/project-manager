// src/redux/slices/workspaceSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import WorkspaceService from '../../services/workspace';

// Async thunk to fetch all workspaces
export const fetchWorkspaces = createAsyncThunk(
  'workspace/fetchWorkspaces',
  async (userId, { rejectWithValue }) => {
    try {
      const response = await WorkspaceService.getWorkspaces(userId);
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data.message || 'Failed to fetch workspaces');
    }
  }
);

// Async thunk to fetch a single workspace by ID
export const fetchWorkspaceById = createAsyncThunk(
  'workspace/fetchWorkspaceById',
  async (workspaceId, { rejectWithValue }) => {
    try {
      const response = await WorkspaceService.getWorkspaceById(workspaceId);
      
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data.message || 'Failed to fetch workspace');
    }
  }
);

// Async thunk to create a new workspace
export const createWorkspace = createAsyncThunk(
  'workspace/createWorkspace',
  async (workspaceData, { rejectWithValue }) => {
    try {
      const response = await WorkspaceService.createWorkspace(workspaceData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to create workspace');
    }
  }
);

// Async thunk to update an existing workspace
export const updateWorkspace = createAsyncThunk(
  'workspace/updateWorkspace',
  async ({ workspaceId, updatedData }, { rejectWithValue }) => {
    try {
      const response = await WorkspaceService.updateWorkspace(workspaceId, updatedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to update workspace');
    }
  }
);

// Async thunk to delete a workspace
export const deleteWorkspace = createAsyncThunk(
  'workspace/deleteWorkspace',
  async (workspaceId, { rejectWithValue }) => {
    try {
      await WorkspaceService.deleteWorkspace(workspaceId);
      return workspaceId;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Failed to delete workspace');
    }
  }
);

// Initial state
const initialState = {
  workspaces: [],
  selectedWorkspace: null,
  loading: false,
  error: null,
};

// Workspace slice
const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    clearSelectedWorkspace: (state) => {
      state.selectedWorkspace = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch workspaces
      .addCase(fetchWorkspaces.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkspaces.fulfilled, (state, action) => {
        state.loading = false;
        state.workspaces = action.payload;
      })
      .addCase(fetchWorkspaces.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Fetch single workspace by ID
      .addCase(fetchWorkspaceById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkspaceById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedWorkspace = action.payload;
      })
      .addCase(fetchWorkspaceById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Create workspace
      .addCase(createWorkspace.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createWorkspace.fulfilled, (state, action) => {
        state.loading = false;
        state.workspaces.push(action.payload);
      })
      .addCase(createWorkspace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Update workspace
      .addCase(updateWorkspace.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateWorkspace.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.workspaces.findIndex(
          (workspace) => workspace.id === action.payload.id
        );
        if (index !== -1) {
          state.workspaces[index] = action.payload;
        }
      })
      .addCase(updateWorkspace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Delete workspace
      .addCase(deleteWorkspace.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteWorkspace.fulfilled, (state, action) => {
        state.loading = false;
        state.workspaces = state.workspaces.filter(
          (workspace) => workspace.id !== action.payload
        );
      })
      .addCase(deleteWorkspace.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedWorkspace } = workspaceSlice.actions;
export default workspaceSlice.reducer;
