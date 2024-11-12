import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchWorkspaceById } from '../../redux/slices/workspaceSlice';
import { Box, IconButton, Typography } from "@mui/material";
import Header from "../../components/Header";
import TaskList from '../../components/TaskList';

export default function WorkspaceDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedWorkspace } = useSelector((state) => state.workspace);

  useEffect(() => {
    dispatch(fetchWorkspaceById(id));
  }, [id, dispatch]);

  if (!selectedWorkspace) {
    return <div>Loading workspace...</div>;
  }

  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title={selectedWorkspace.workspace.name} />
      </Box>
      <TaskList selectedWorkspace={selectedWorkspace} />
    </Box>
  );
}
