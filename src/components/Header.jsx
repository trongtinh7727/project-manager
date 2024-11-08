import { Typography, Box } from "@mui/material";
import { colors } from "../theme";

const Header = ({ title }) => {
  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        color={colors.grey[500]}
        fontWeight="bold"
        sx={{ m: "0 0 5px 0" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
