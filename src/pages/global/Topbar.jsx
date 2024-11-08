import { Box, IconButton, Typography } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { colors } from "../../theme";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Topbar = () => {
  return (
    <Box sx={{ background: `${colors.white} !important`, }} display="flex" justifyContent="space-between" p={2}>
      <Box display="flex" >
        <Typography variant="h3" sx={{
          color: colors.grey[900],
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "125%",
          letterSpacing: "-0.29px",
          display: "flex",
          alignItems: "center",
        }}>
          Dashboard
        </Typography>
      </Box>

      {/* ICONS */}
      <Box display="flex">
        {/* Removed dark/light mode toggle */}
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton>
          <PersonOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
