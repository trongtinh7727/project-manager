import { Box } from "@mui/material";
import { useLocation, Navigate } from 'react-router-dom';

import RegisterPage from './components/Register';
import LoginPage from './components/Login';
import { colors } from "../../theme";

const AuthPage = () => {

    const location = useLocation();

    const isLoginPage = location.pathname === '/login';
    return (
        <Box sx={{ height: '100%', }}>
            <Box display="flex" justifyContent="space-between" alignItems="center" sx={{ height: '100%', flexShrink: 0 }}>
                <Box
                    sx={{
                        width: '50%',
                        height: '100%',
                        backgroundImage: 'url(/Cover.png)',
                    }}
                >
                </Box>
                {isLoginPage && <LoginPage />}
                {!isLoginPage && <RegisterPage />}
            </Box>
        </Box>
    );
};

export default AuthPage;
