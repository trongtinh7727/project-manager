import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/slices/authSlice';
import { API_URL } from '../../../utils/constants';
import { Email, Lock, Visibility, VisibilityOff, Google } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
    CircularProgress,
    useMediaQuery
} from "@mui/material";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const handleToggleVisibility = () => setShowPassword(!showPassword);

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        if (newPassword.length < 8) {
            setPasswordError(true);
            setPasswordHelperText('Password must be at least 8 characters');
        } else {
            setPasswordError(false);
            setPasswordHelperText('');
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password.length < 8) {
            setPasswordError(true);
            setPasswordHelperText('Password must be at least 8 characters');
            return;
        }
        dispatch(login({ email, password }));
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: isMobile ? '100%' : '50%', p: isMobile ? 2 : 0 }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: isMobile ? '90%' : 400 }}>
                <Typography variant="h4" component="p" sx={{ fontWeight: 700, mb: 2 }}>Sign in</Typography>

                <TextField
                    fullWidth
                    variant="outlined"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    error={passwordError}
                    helperText={passwordHelperText}
                    sx={{ mb: 2 }}
                />

                {error && <Typography color="error" sx={{ mt: 1, mb: 2 }}>{error}</Typography>}

                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                    sx={{ height: 56, mb: 2 }}
                    disabled={loading}
                >
                    {loading ? <CircularProgress size={24} /> : "Sign in"}
                </Button>

                <Typography variant="body2" sx={{ textAlign: "center", mb: 2 }}>
                    Don't have an account? <Link href="/register" color="primary">Register</Link>
                </Typography>

                <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                    <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                    <Typography variant="body2" sx={{ mx: 2 }}>Or sign in with</Typography>
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

export default LoginPage;
