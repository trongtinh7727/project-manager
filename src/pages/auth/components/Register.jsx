import {
    AccountCircle,
    CheckBox,
    Email,
    Facebook,
    Google,
    Lock,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import {
    Box,
    Button,
    Checkbox,
    IconButton,
    InputAdornment,
    Link,
    TextField,
    Typography,
} from "@mui/material";
import { useState } from 'react';

const RegisterPage = () => {

    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');

    const handleToggleVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        if (newPassword.length < 8) {
            setError(true);
            setHelperText('Your password is not strong enough. Use at least 8 characters');
        } else {
            setError(false);
            setHelperText('');
        }
    };

    return (
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ width: '50%', height: '100%', }}>
            <Box sx={{ width: 732, height: '100%', position: "relative" }}>
                <Box
                    sx={{ width: 404, position: "absolute", top: 150, left: 164 }}
                >
                    <Box sx={{ padding: '8px 16px' }}>
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
                        />
                    </Box>
                    <Box sx={{ padding: '8px 16px' }}>
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
                        />
                    </Box>
                    <Box sx={{ padding: '8px 16px' }}>
                        <TextField
                            fullWidth
                            variant="outlined"
                            type="password"
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
                        />
                    </Box>
                </Box>

                <Typography
                    variant="body2"
                    sx={{ position: "absolute", top: 720, left: 258, textAlign: "center" }}
                >
                    Already have an account?{" "}
                    <Link href="#" color="primary">
                        Log In
                    </Link>
                </Typography>

                <Typography
                    variant="h3"
                    component="p"
                    sx={{ position: "absolute", top: 100, left: 164, fontWeight: 700, fontSize: 24 }}
                >
                    Sign Up for an Account
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        width: 404,
                        height: 56,
                        position: "absolute",
                        top: 500,
                        left: 164,
                    }}
                >
                    Sign Up
                </Button>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: 420,
                        left: 164,
                    }}
                >
                    <Checkbox
                        icon={<CheckBox />}
                        checkedIcon={<CheckBox />}
                        sx={{ color: "primary.main" }}
                    />
                    <Typography variant="body2">
                        By creating an account means you agree to the{" "}
                        <Link href="#" color="primary">
                            Terms & Conditions
                        </Link>{" "}
                        and our{" "}
                        <Link href="#" color="primary">
                            Privacy Policy
                        </Link>
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: 580,
                        left: 164,
                        width: 404,
                    }}
                >
                    <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                    <Typography variant="body2" sx={{ mx: 2 }}>
                        Or sign up with
                    </Typography>
                    <Box sx={{ flex: 1, height: 1, backgroundColor: "grey.500" }} />
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        position: "absolute",
                        top: 630,
                        left: 165,
                        width: 403,
                    }}
                >
                    <Button
                        variant="outlined"
                        startIcon={<Google />}
                        sx={{ flex: 1, height: 56, mr: 1 }}
                    >
                        Google
                    </Button>

                </Box>
            </Box>
        </Box>
    );
};

export default RegisterPage;
