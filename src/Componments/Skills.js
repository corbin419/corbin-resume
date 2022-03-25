import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';


export default function MediaCard() {
return (
    <Card fullwidth className='Card'>
    <CardContent>
    <Typography gutterBottom variant="h7" component="div" color="black">
        平面設計
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <br/>
        </Typography>
    </CardContent>
    </Card>
);
}