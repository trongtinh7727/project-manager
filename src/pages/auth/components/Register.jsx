import { AccountCircle, Email, Lock, Visibility, VisibilityOff, Google } from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
    useMediaQuery
} from "@mui/material";
import { useState } from 'react';
import { API_URL } from '../../../utils/constants';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handleToggleVisibility = () => setShowPassword(!showPassword);

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8) {
            setError(true);
            setHelperText('Password must be at least 8 characters');
        } else {
            setError(false);
            setHelperText('');
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: isMobile ? '100%' : '50%', p: isMobile ? 2 : 0 }}>
            <Box sx={{ width: isMobile ? '90%' : 400 }}>
                <Typography variant="h4" component="p" sx={{ fontWeight: 700, mb: 2 }}>Sign Up for an Account</Typography>

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Full name"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 2 }}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Email />
                            </InputAdornment>
                        ),
                    }}
                    sx={{ mb: 2 }}
                />

                <TextField
                    fullWidth
                    variant="outlined"
                    type={showPassword ? "text" : "password"}
                    label="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Lock />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={handleToggleVisibility} edge="end">
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    error={error}
                    helperText={helperText}
                    sx={{ mb: 2 }}
                />
                <Box display={"flex"}>
                    <Checkbox sx={{ color: "primary.main" }} />
                    <Typography variant="body2">
                        By creating an account, you agree to the <Link href="#" color="primary">Terms & Conditions</Link> and <Link href="#" color="primary">Privacy Policy</Link>
                    </Typography>
                </Box>


                <Button variant="contained" color="primary" fullWidth sx={{ height: 56, mt: 2 }}>Sign Up</Button>
                <Box sx={{ my: 2 }}>
                    <Typography variant="body2" sx={{ textAlign: "center", mb: 2 }}>
                        Already have an account? <Link href="/login" color="primary">Login</Link>
                    </Typography>
                </Box>
                <Box display="flex" alignItems="center" sx={{ my: 2 }}>
                    <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                    <Typography variant="body2" sx={{ mx: 2 }}>Or sign up with</Typography>
                    <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                </Box>

                <Button
                    variant="outlined"
                    startIcon={<Google />}
                    fullWidth
                    onClick={() => window.location.href = `${API_URL}/auth/google`}
                    sx={{ height: 56 }}
                >
                    Google
                </Button>
            </Box>
        </Box>
    );
};

export default RegisterPage;
