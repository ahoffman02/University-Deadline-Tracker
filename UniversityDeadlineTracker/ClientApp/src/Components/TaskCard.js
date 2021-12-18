import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './TaskCard.css';

const style = {
    minWidth: 230,
    minHeight: 150,
    backgroundColor: "#b4dce0",
    display: "flex", flexDirection: "column"
}

export const TaskCard = (props) => {
    return (
        <Card sx={{
            maxWidth: 230,
            maxHeight: 150,
            marginBottom: "15px",
            borderRadius: "20px",
            position: "relative"
        }}>
            <CardContent sx={style}>
                <Typography align="center" sx={{fontSize: 14, alignContent: "center"}} color="text.secondary"
                            gutterBottom>
                    {props.title}
                </Typography>
                <Box height="50px">
                    <Typography sx={{fontSize: 12}} component="div">
                        {props.description}
                    </Typography>
                </Box>
                <Typography align="center" sx={{fontSize: 10}} color="text.secondary" className="card-subject">
                    {props.penalty}
                </Typography>
            </CardContent>
        </Card>
    );
}