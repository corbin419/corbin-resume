import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Trunk from '../Photos/Trunk1.jpg'
import '../App.css';


export default function MediaCard() {
return (
    <Card fullwidth className='CardT'>
    <CardContent>
    <Typography gutterBottom variant="h7" component="div" color="black">
        創科資訊 實習
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <br/>
        利用大四下學期，畢業學分滿足的情況下，想做一點不一樣的嘗試，讓自己去學習更多系上沒有接觸過的知識，也想透過這次的實習去增加自己的實戰經驗，也能確認自己是否適合往這方面去發展。
        </Typography>
    </CardContent>
    <CardMedia
        component="img"
        className="TrunkP"
        image={Trunk}
        />
    </Card>
);
}
