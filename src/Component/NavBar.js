import React from 'react'
import { Box, Link, Typography } from '@mui/material'
// import "./NavBar.css";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const NavBar = () => {
    const loggedIn = JSON.parse(localStorage.getItem('authToken'))
    const navigate = useNavigate();
    const handleLogout = async () => {
        try {
            await axios.post("http://localhost:7789/logout")
            localStorage.removeItem("authToken")
            toast.success('logout successfully')
            navigate("/login")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <Box
            width={"100%"}
            p="1rem "
            textAlign={"center"}
            sx={{ boxShadow: 5, mb: 2, bgcolor: "white", color: "white" }}>
            <Typography
                variant='h3'
                color={"darkslategrey"}
                fontWeight={"bold"}>
                AI GPT3 Clone
            </Typography>
            {
                loggedIn ? (<>
                    <NavLink to='/' p={1}> Home</NavLink>
                    <NavLink to="/login" onClick={handleLogout} p={1}> Logout</NavLink>
                </>) : (
                    <>
                        <NavLink to="/register" p={1}>
                            SignUp
                        </NavLink>
                        <NavLink to="/login" p={1}>
                            LogIn
                        </NavLink>
                    </>
                )
            }
            {/* <Link href="/" p={1}>
                LogOut
            </Link> */}


        </Box >
    )
}

export default NavBar