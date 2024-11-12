import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../../redux/slices/authSlice';
import { API_URL } from '../../../utils/constants';
import { AccountCircle, Email, Lock, Visibility, VisibilityOff, Google } from "@mui/icons-material";
import {
    Box,
    Button,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
    CircularProgress
} from "@mui/material";

const LoginPage = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [passwordHelperText, setPasswordHelperText] = useState('');

    const handleToggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        if (newPassword.length < 8) {
            setPasswordError(true);
            setPasswordHelperText('Your password is not strong enough. Use at least 8 characters');
        } else {
            setPasswordError(false);
            setPasswordHelperText('');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password.length < 8) {
            setPasswordError(true);
            setPasswordHelperText('Your password is not strong enough. Use at least 8 characters');
            return;
        }

        // Dispatch login action
        dispatch(login({ email, password }));
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '50%', height: '100%' }}>
            <Box component="form" onSubmit={handleSubmit} sx={{ width: 732, height: '100%', position: "relative" }}>
                <Box sx={{ width: 404, position: "absolute", top: 150, left: 164 }}>
                    <Typography
                        variant="h3"
                        component="p"
                        sx={{ fontWeight: 700, fontSize: 24, mb: 2 }}
                    >
                        Sign in
                    </Typography>

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

                    {error && (
                        <Typography color="error" sx={{ mt: 1, mb: 2 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ width: 404, height: 56, mb: 2 }}
                        disabled={loading}
                    >
                        {loading ? <CircularProgress size={24} /> : "Sign in"}
                    </Button>

                    <Typography
                        variant="body2"
                        sx={{ textAlign: "center", mb: 2 }}
                    >
                        Don't have an account?{" "}
                        <Link href="/register" color="primary">
                            Register
                        </Link>
                    </Typography>

                    <Box display="flex" alignItems="center" sx={{ mb: 2 }}>
                        <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                        <Typography variant="body2" sx={{ mx: 2 }}>
                            Or sign in with
                        </Typography>
                        <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                    </Box>

                    <Button
                        variant="outlined"
                        startIcon={<Google />}
                        onClick={() => window.location.href = `${API_URL}/auth/google`}
                        sx={{ width: '100%', height: 56 }}
                    >
                        Google
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default LoginPage;
