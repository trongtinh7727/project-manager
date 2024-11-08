import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import Divider from '@mui/material/Divider';

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';

const Item = ({ title, onClick, icon, selected, setSelected }) => {
  return (
    <MenuItem
      selected={selected === title}
      style={{
        color: selected === title ? colors.primary[600] : colors.grey[500],
      }}
      onClick={() => {
        setSelected(title);
        if (onClick) onClick();
      }}
      icon={icon}
    >
      <Typography
        sx={{
          fontFamily: 'Inter',
          fontSize: '14px',
          fontStyle: 'normal',
          fontWeight: selected === title ? 700 : 500,
          lineHeight: '160%',
        }}
      >{title}</Typography>
    </MenuItem>
  );
};

const AppSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        background: `${colors.white} !important`,
        "& .pro-sidebar-inner": {
          background: `${colors.white} !important`,
        },
        "& .pro-icon-wrapper": {
          background: `${colors.white} !important`,
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <Sidebar collapsed={isCollapsed}  sx={{ background: `${colors.white} !important`, }}  >
        <Menu >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[500],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" sx={{
                  color: colors.grey[900],
                  fontFamily: "Inter, sans-serif",
                  fontSize: "23.2px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "125%",
                  letterSpacing: "-0.29px",
                  display: "flex",
                  alignItems: "center",
                }}>
                  <img src="/Exclude.svg" alt="Icon" style={{ marginRight: "8px", width: "24px", height: "24px" }} />
                  IIEX - PM
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>

                </IconButton>

              </Box>
            )}
          </MenuItem>
          <Divider variant="middle" component="li" />

          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            <Item
              title="Dashboard"
              onClick={() => navigate("/")}
              icon={<SpaceDashboardRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

            <Item
              title="My Tasks"
              onClick={() => navigate("/tasks")}
              icon={<ChecklistRoundedIcon />}
              selected={selected}
              setSelected={setSelected}
            />

          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AppSidebar;
