import { Box, Button } from "@mui/material";
import Header from "../../components/Header";
import { colors } from "../../theme"; // Import the colors object

const Dashboard = () => {
    return (
        <Box m="20px">
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" />

            </Box>
        </Box>
    );
};

export default Dashboard;
