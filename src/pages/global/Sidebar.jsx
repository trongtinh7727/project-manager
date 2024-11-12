import { useState } from "react";
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Box, IconButton, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";
import { colors } from "../../theme";
import Divider from '@mui/material/Divider';

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import SpaceDashboardRoundedIcon from '@mui/icons-material/SpaceDashboardRounded';
import { Circle, Tune } from "@mui/icons-material";

const Item = ({ title, onClick, icon, selected, setSelected, color, id }) => {
  return (
    <MenuItem
      selected={selected === title}
      onClick={() => {
        setSelected(title);
        if (onClick) onClick();
      }}


    >
      <Box sx={{
        marginRight: 1,
        display: "flex",
        alignItems: "center",
      }}>
        <Box
          sx={{
            marginRight: 1,
            color: color ? color : (selected === title ? colors.primary[600] : colors.grey[500]),
            display: "flex",
            alignItems: "center",
          }}
        >
          {icon}
        </Box>
        <Typography
          sx={{
            fontFamily: 'Inter',
            fontSize: '14px',
            fontStyle: 'normal',
            color: id ? colors.grey[900] : (selected === title ? colors.primary[600] : colors.grey[500]),
            fontWeight: id ? 700 : (selected === title ? 700 : 500),
            lineHeight: '160%',
          }}
        >{title}</Typography>
      </Box>
    </MenuItem>
  );
};

const AppSidebar = ({ workspaces }) => {
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
      <Sidebar collapsed={false} sx={{ background: `${colors.white} !important`, }}  >
        <Menu >
          {/* LOGO AND MENU ICON */}
          <MenuItem
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
          <Divider variant="middle" component="li" />
          <Box
            display="flex" alignltems="center" justifyContent="space-between" margin={2}
          >
            <Typography variant="subtitle?" fontWeight="bold" color={colors.grey[400]} sx={{
              fontFamily: "Inter-Bold", letterspacing: 1, lineHeight: "19.2px",
            }}
            >
              PROJECTS
            </Typography>
            <IconButton size="small">
              <AddIcon fontSize="small" color={colors.grey[400]} />
            </IconButton>
          </Box>
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
            {workspaces.map((workspace, index) => (
              <Item
                id={workspace.id}
                title={workspace.name}
                onClick={() => navigate(`/workspace/${workspace.id}`)}
                setSelected={setSelected}
                selected={selected}
                icon={<Circle width={12} height={12} />}
                color={[colors.pinkAccent[400], colors.greenAccent[400], colors.yellowAccent[400]][index % 3]}
              />
            ))}
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default AppSidebar;
