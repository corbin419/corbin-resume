import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import '../App.css';
import KPG1 from '../Photos/KPGLOGO.jpg';




export default function MediaCard() {
return (
    <Card fullwidth className='CardK'>
    <CardContent>
        <Typography gutterBottom variant="h7" component="div" color="black" className='Text1'>
            國立自然科學博物館 <br/>科學教育組-活動小組  實習生
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <br/>
            參加這次的實習，目的是為了改善自己的口語表達能力，自己在多人面前時容易緊張，想利用在科博館可以與很多人講解的機會，來改善自己，也在這次實習中學到不少事物。
        </Typography>
    </CardContent>
    <CardMedia
        component="img"
        className="KPGPP"
        width="fit-content"
        // image={KPG1}
        />
    </Card>
);
}
