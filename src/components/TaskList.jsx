import { Typography, Box, IconButton, Divider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TaskBox from "./TaskBox";
import { formatDate, filterTasksByStatus } from "../utils/helper";
import { colors } from "../theme";

const TaskList = ({ selectedWorkspace }) => {
    // Function to render task section
    const renderTaskSection = (status, title, color) => {
        const tasks = filterTasksByStatus(selectedWorkspace.tasks, status);
        return (
            <Box key={status} sx={{ mb: 4 }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                    <Typography
                        variant="h6"
                        component="span"
                        sx={{
                            fontWeight: "bold",
                            color: color,
                            fontFamily: "Inter-Bold, Helvetica",
                        }}
                    >
                        {title}{" "}
                        <Typography
                            component="span"
                            sx={{
                                fontWeight: "regular",
                                color: "text.secondary",
                                fontFamily: "Inter, Helvetica",
                            }}
                        >
                            ({tasks.length})
                        </Typography>
                    </Typography>

                    <Box display="inline-flex" alignItems="center" gap={2}>
                        <IconButton>
                            <AddIcon fontSize="small" />
                        </IconButton>
                        <IconButton>
                            <MoreHorizIcon fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>

                <Box>
                    {tasks.map((task) => (
                        <TaskBox
                            key={task.id}
                            title={task.title}
                            description={task.description}
                            label="Development"
                            dueDate={formatDate(task.dueDate)}
                            users={task.users}
                            status={task.status}
                        />
                    ))}
                </Box>
            </Box>
        );
    };

    return (
        <Box>
            {renderTaskSection("to do", "To Do", colors.grey[900])}
            {renderTaskSection("in progress", "In Progress", colors.primary[600])}
            {renderTaskSection("in review", "In Review", colors.yellowAccent[400])}
            {renderTaskSection("done", "Done", colors.greenAccent[500])}
        </Box>
    );
};

export default TaskList;
