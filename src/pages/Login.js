import React, { useState } from 'react'
import axios from "axios";
import { Alert, Box, Button, Collapse, TextField, Typography, useMediaQuery } from "@mui/material";
import { blue, grey } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
const Login = () => {
    const isNotMobile = useMediaQuery("(min-width:1000px)")
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://chat-gpt-backend-jypf.onrender.com/login', { email, password })
            toast.success('Login Successfully')
            localStorage.setItem("authToken", true)
            navigate('/')

        } catch (err) {
            if (err.response) {
                setError(err.response)
            }
            else if (err.message) {
                setError(err.message)
            }
            setTimeout(() => {
                setError("");

            }, 4000)
        }
    }
    return (
        <Box width={isNotMobile ? '40%' : '80%'} p={'2rem'} m={'2rem auto'}
            borderRadius={5}
            sx={{ boxShadow: 5 }}
            backgroundColor={grey}>
            <Collapse in={error}>
                <Alert severity='error' sx={{ mb: 2 }}>{error}</Alert>
            </Collapse>
            <form onSubmit={handleSubmit}>
                <Typography variant='h3' >Login</Typography>
                <TextField label="email"
                    type='email'
                    required
                    margin='normal'
                    fullWidth
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }} />
                <TextField label="password"
                    type='password'
                    required
                    margin='normal'
                    fullWidth
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }} />
                <Button type='submit'
                    fullWidth
                    variant='contained'
                    size='large'
                    sx={{ color: "white", mt: 2, bgcolor: 'darkslategray' }}>
                    Login
                </Button>
                <Typography mt={3} color={blue}>
                    Don't have an account ?<Link to="/register">Create new account</Link>
                </Typography>
            </form>
        </Box>
    )
}

export default Login