import Header from "../../components/Header";
import TaskBox from '../../components/TaskBox'
import { colors } from "../../theme";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

const TaskPage = (task) => {
    const users = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Alice Johnson' }
    ];
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="TaskPage" />
            </Box>
            <Box
                display="flex"
                width="100%"
                height="40px"
                alignItems="center"
                justifyContent="space-between"
                px={1}
                py={0}
                position="relative"
            >
                <Typography
                    variant="h6"
                    component="span"
                    sx={{
                        fontWeight: "bold",
                        color: "text.primary",
                        fontFamily: "Inter-Bold, Helvetica",
                    }}
                >
                    To Do{" "}
                    <Typography
                        component="span"
                        sx={{
                            fontWeight: "regular",
                            color: "text.secondary",
                            fontFamily: "Inter, Helvetica",
                        }}
                    >
                        (03)
                    </Typography>
                </Typography>

                <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    gap={2}
                >
                    <IconButton>
                        <AddIcon fontSize="small" />
                    </IconButton>
                    <IconButton>
                        <MoreHorizIcon fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
            <TaskBox title={"Implement task board"} decription={"do something to implement task"} label={"Development"} dueDate={"Nov 12"} users={users} />
            <TaskBox title={"Implement task board"} decription={"do something to implement task"} label={"Development"} dueDate={"Nov 12"} users={users} />
            <TaskBox title={"Implement task board"} decription={"do something to implement task"} label={"Development"} dueDate={"Nov 12"} users={users} />
            <TaskBox title={"Implement task board"} decription={"do something to implement task"} label={"Development"} dueDate={"Nov 12"} users={users} />
        </Box>
    );
};

export default TaskPage;
