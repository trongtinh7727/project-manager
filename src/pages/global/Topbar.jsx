import React, { useState } from "react";
import { Box, IconButton, Typography, Menu, MenuItem } from "@mui/material";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { colors } from "../../theme";

const Topbar = ({ title, onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  // Open the menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Close the menu
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{ background: `${colors.white} !important` }}
      display="flex"
      justifyContent="space-between"
      p={2}
    >
      {/* Title */}
      <Box display="flex">
        <Typography
          variant="h3"
          sx={{
            color: colors.grey[900],
            fontFamily: "Inter",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "125%",
            letterSpacing: "-0.29px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {title}
        </Typography>
      </Box>

      {/* Icons */}
      <Box display="flex">
        <IconButton>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>
        <IconButton onClick={handleMenuOpen}>
          <PersonOutlinedIcon />
        </IconButton>
        
        {/* Logout Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={() => { handleMenuClose(); onLogout(); }}>
            Logout
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Topbar;
