import { Box, Typography, IconButton, useMediaQuery } from "@mui/material";
import { useLocation } from 'react-router-dom';

import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import { colors } from "../../theme";

const AuthPage = () => {
    const location = useLocation();
    const isLoginPage = location.pathname === '/login';

    // Check if the screen is mobile-sized
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Box sx={{ height: '100%' }}>
            <Box
                display="flex"
                flexDirection={isMobile ? "column" : "row"}
                justifyContent="space-between"
                alignItems="center"
                sx={{ height: '100%', flexShrink: 0 }}
            >
                {/* Background Image Box */}
                {!isMobile && (
                    <Box
                        sx={{
                            width: '50%',
                            height: '100%',
                            backgroundImage: 'url(/Cover.png)',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: colors.primary[600],
                            position: "relative"
                        }}
                    >
                        <Box
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            ml="15px"
                            position="absolute"
                            top={12}
                        >
                            <Typography variant="h3" sx={{
                                color: colors.white,
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
                                IIEX - Project Manager
                            </Typography>
                        </Box>

                        <Box
                            alignItems="center"
                            ml="15px"
                            position="absolute"
                            top={800}
                            left="25%"
                        >
                            <Typography variant="h3" sx={{
                                color: colors.white,
                                fontFamily: "Inter, sans-serif",
                                fontSize: "23.2px",
                                fontStyle: "normal",
                                fontWeight: 700,
                                lineHeight: "125%",
                                letterSpacing: "-0.29px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                Create And Manage Your Project
                            </Typography>

                            <Typography variant="body2" sx={{
                                color: colors.white,
                                fontFamily: "Inter, sans-serif",
                                fontSize: "14px",
                                fontStyle: "normal",
                                fontWeight: 400,
                                lineHeight: "160%",
                                letterSpacing: "-0.29px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                                Everything you need in an easily project manager tool.
                            </Typography>
                        </Box>
                    </Box>
                )}

                {isLoginPage ? <LoginPage /> : <RegisterPage />}
            </Box>
        </Box>
    );
};

export default AuthPage;
