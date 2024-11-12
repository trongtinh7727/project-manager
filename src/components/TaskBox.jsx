import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

const TaskBox = ({ title, decription, label, dueDate, users }) => {
    return (
        <Box
            sx={{
                width: '100%',
                height: 80,
                bgcolor: "background.paper",
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                padding: 2,
            }}
        >
            <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h6" component="div">
                    {title}
                </Typography>
                <Stack direction="row" alignItems="center" spacing={1}>
                    <Box
                        sx={{
                            width: 12,
                            height: 12,
                            bgcolor: "primary.main",
                            borderRadius: "50%",
                        }}
                    />
                    <Typography variant="body2" color="primary">
                        {label}
                    </Typography>
                </Stack>
            </Box>

            <Typography
                variant="body2"
                color="textSecondary"
                sx={{ flexGrow: 1, textAlign: "center" }}
            >
                {decription}
            </Typography>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    bgcolor: "grey.100",
                    borderRadius: 1,
                    padding: "4px 8px",
                    marginRight: 2,
                }}
            >
                <CalendarTodayIcon fontSize="small" />
                <Typography variant="body2" color="textSecondary" sx={{ ml: 1 }}>
                    {dueDate}
                </Typography>
            </Box>

            <Stack direction="row" spacing={1} sx={{ marginRight: 2 }}>
                {users.map((user, index) => (
                    <Avatar
                        key={user.id || index}
                        src={`https://picsum.photos/id/${user.id}/200/300`}
                        sx={{ width: 32, height: 32 }}
                    />
                ))}
            </Stack>

            <IconButton>
                <MoreHorizIcon />
            </IconButton>
        </Box>
    );
};

export default TaskBox;
