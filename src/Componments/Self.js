import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import '../App.css';

const bull = (
<Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
>
    •
    </Box>
);

export default function BasicCard() {
return (
    <Card sx={{ minWidth: 275 }}>
    <CardContent className='CardBox'>
        <div className='intorduce'>
        <Typography sx={{ fontSize: 28 }} color="black"  gutterBottom>
        紀元翔
        </Typography>
        <Typography variant="h7" colr="black">
        {'性別：男'}
        <br/>
        {'出生日期：2000/04/19'}
        <br/>
        {'電話：0965571499'}
        <br/>
        {'Mail：corbin50111@gmail.com'}
        </Typography>
        </div>
        <div className='photo'>
        </div>
    </CardContent>
    {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
);
}
