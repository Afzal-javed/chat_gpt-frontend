import React, { useState } from 'react'
import axios from "axios";
import { Alert, Box, Button, Card, Collapse, TextField, Typography, useMediaQuery } from "@mui/material";
import { grey } from '@mui/material/colors';
import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-hot-toast';
const ScifiImage = () => {
    const isNotMobile = useMediaQuery("(min-width:1000px)")
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [image, setImage] = useState("");
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('https://chat-gpt-backend-jypf.onrender.com/scifi-image', { text });

            setImage(data);
        } catch (err) {
            console.log(error)
            if (err.response.data.error) {
                setError(err.response.data.error)
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
                <Typography variant='h4' sx={{ color: 'darkslategray' }} >Sci-Fi Image</Typography>
                <TextField placeholder='add your Text'
                    type='text'
                    required
                    multiline={true}
                    margin='normal'
                    fullWidth
                    value={text}
                    onChange={(e) => {
                        setText(e.target.value)
                    }} />
                <Button type='submit'
                    fullWidth
                    variant='contained'
                    size='large'
                    sx={{ color: "white", mt: 2, bgcolor: 'darkslategray' }}>
                    Generate Image
                </Button>
                <Typography mt={3}>
                    Not this tool ?<Link to="/">Go Back</Link>
                </Typography>
            </form>
            {image ? (
                <Card sx={{
                    mt: 4, border: 1,
                    boxShadow: 0,
                    height: "500px",
                    borderRadius: 5,
                    borderColor: 'natural.medium',
                    bgcolor: 'background.default'
                }}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
                        <img src={image} alt="scifiImage" />
                    </Box>
                </Card>
            ) : (
                <Card sx={{ mt: 4, border: 1, boxShadow: 0, height: "500px", borderRadius: 5, borderColor: 'natural.medium', bgcolor: 'background.default' }}>
                    <Typography variant='h6' color='natural.main' sx={{ textAlign: 'center', verticalAlign: 'middel', lineHeight: '450px' }}>Image Will Appear Here</Typography>
                </Card>
            )}
        </Box>
    )
}

export default ScifiImage