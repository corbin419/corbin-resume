import * as React from 'react';
import { Divider,
        Box,
        Card,
        CardContent,
        Typography,
        Link ,  
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
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
        <div className='Information'>
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
            <br/>
            <Link href='https://github.com/corbin419'><GitHubIcon/></Link>
            </Typography>
            </div>
            <div className='photo'>
            </div>
        </div>
        <Divider variant="middle"className='Divider'/>
        <br/>
        <div className='Summary'>
        <Typography sx={{ fontSize: 22 }} color="black"  gutterBottom>
            簡歷Summary
        </Typography>
        <Typography variant="h7" colr="black">
        {'目前就讀於國立嘉義大學數位學習設計與管理學系大四，透過系上的課程有接觸過Android Studio、Visual Studio、Visual Studio Code(HTML5、CSS3)以及基礎的C++， 在畢業專題方面，負責組內的網頁撰寫部分。也接觸過Adobe的軟體，像是AI、PS、AE、PR，熟悉這些軟體的基本操作，也能自行製作簡易作品。'}
        <br/><br/>
        {'大二暑假為了改變自己不擅於表達自己想法的缺點，參加了科博館的實習生(科學教育組-活動小組)，為的就是讓自己能在團隊中與他人做更好的交流，且能在多人面前更自在的表達自己的想法。'}
        <br/>
        {''}
        <br/>
        {''}
        </Typography>
        </div>
    </CardContent>
    {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
);
}
