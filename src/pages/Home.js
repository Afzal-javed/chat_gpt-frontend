import { Box, Card, Stack, Typography } from '@mui/material';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import DescriptionRounded from "@mui/icons-material/DescriptionRounded";
import FormatAlignLeftOutlined from "@mui/icons-material/FormatAlignLeftOutlined";
import ChatRounded from "@mui/icons-material/ChatRounded";
import CodeIcon from "@mui/icons-material/Code";
import ImageIcon from '@mui/icons-material/Image';
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box p={2}>
                    <Typography variant='h5' mb={2} fontWeight="bold" sx={{ color: 'darkslategray' }}>
                        Text Generation
                    </Typography>
                    <Card onClick={() => navigate('/summary')}
                        sx={{ boxShadow: 2, borderRadius: 5, height: 210, width: 210, '&:hover': { border: 2, boxShadow: 0, borderColor: 'darkslategray', cursor: "pointer" } }}>
                        <DescriptionRounded sx={{ fontSize: 80, color: 'darkslategray', mt: 2, ml: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant='h6'>TEXT SUMMARY</Typography>
                            <Typography variant='h7'>
                                Summarize long text into short sentence
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant='h5' mb={2} fontWeight="bold" sx={{ color: 'darkslategray' }}>
                        Generate Paragraph
                    </Typography>
                    <Card onClick={() => navigate('/paragraph')}
                        sx={{ boxShadow: 2, borderRadius: 5, height: 210, width: 210, '&:hover': { border: 2, boxShadow: 0, borderColor: 'darkslategray', cursor: "pointer" } }}>
                        <FormatAlignLeftOutlined sx={{ fontSize: 80, color: 'darkslategray', mt: 2, ml: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant='h6'>PARAGRAPH</Typography>
                            <Typography variant='h7'>
                                Generate a long Paragraph
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant='h5' mb={2} fontWeight="bold" sx={{ color: 'darkslategray' }}>
                        AI ChatBot
                    </Typography>
                    <Card onClick={() => navigate('/chatbot')}
                        sx={{ boxShadow: 2, borderRadius: 5, height: 210, width: 210, '&:hover': { border: 2, boxShadow: 0, borderColor: 'darkslategray', cursor: "pointer" } }}>
                        <ChatRounded sx={{ fontSize: 80, color: 'darkslategray', mt: 2, ml: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant='h6'>ChatBot</Typography>
                            <Typography variant='h7'>
                                Chat with AI ChatBot
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant='h5' mb={2} fontWeight="bold" sx={{ color: 'darkslategray' }}>
                        JS Converter
                    </Typography>
                    <Card onClick={() => navigate('/jsconverter')}
                        sx={{ boxShadow: 2, borderRadius: 5, height: 210, width: 210, '&:hover': { border: 2, boxShadow: 0, borderColor: 'darkslategray', cursor: "pointer" } }}>
                        <CodeIcon sx={{ fontSize: 80, color: 'darkslategray', mt: 2, ml: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant='h6'>JS Code</Typography>
                            <Typography variant='h7'>
                                Type text to convert in JavaScript
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
                <Box p={2}>
                    <Typography variant='h5' mb={2} fontWeight="bold" sx={{ color: 'darkslategray' }}>
                        AI SCIFI Images
                    </Typography>
                    <Card onClick={() => navigate('/scifi-image')}
                        sx={{ boxShadow: 2, borderRadius: 5, height: 210, width: 210, '&:hover': { border: 2, boxShadow: 0, borderColor: 'darkslategray', cursor: "pointer" } }}>
                        <ImageIcon sx={{ fontSize: 80, color: 'darkslategray', mt: 2, ml: 2 }} />
                        <Stack p={3} pt={0}>
                            <Typography fontWeight="bold" variant='h6'>Scifi Image</Typography>
                            <Typography variant='h7'>
                                Generate Scifi Images
                            </Typography>
                        </Stack>
                    </Card>
                </Box>
            </Box>
        </>
    )
}

export default Home;