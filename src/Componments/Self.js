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
import myphoto from '../Photo.jpg';
import ReactRoundedImage from "react-rounded-image";

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
                <Typography  color="black"  gutterBottom>
                    <h2>紀元翔</h2>
                </Typography>
                <Typography variant="h7" color="black">
                {'性別：男'}
                <br/>
                {'出生日期：2000/04/19'}
                <br/>
                {'電話：0965571499'}
                <br/>
                {'Mail：corbin50111@gmail.com'}
                <br/><br/>
                <Link href='https://github.com/corbin419' target="_blank"><GitHubIcon/></Link>
                </Typography>
            </div>
            <div className='photo'>
                {/* <ReactRoundedImage
                image={myphoto}
                imageWidth="150"
                imageHeight="150"
                roundedSize="0"
                borderRadius="150"
                /> */}
            </div>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <br/>
        <div className='Summary'>
            <Typography color="black"  gutterBottom>
                <h2>簡歷</h2>
            </Typography>
            <Typography variant="h7" colr="black">
                {'目前就讀於國立嘉義大學數位學習設計與管理學系大四，透過系上的課程有接觸過Android Studio、Visual Studio、Visual Studio Code(HTML5、CSS3)以及基礎的C++， 在畢業專題方面，負責組內的網頁撰寫部分。也接觸過Adobe的軟體，像是AI、PS、AE、PR，熟悉這些軟體的基本操作，也能自行製作簡易作品。'}
                <br/><br/>
                {'大二暑假為了改變自己不擅於表達自己想法的缺點，參加了科博館的實習生(科學教育組-活動小組)，為的就是讓自己能在團隊中與他人做更好的交流，且能在多人面前更自在的表達自己的想法。'}
                <br/><br/>
                {'大四下學期則是選擇到創科資訊去實習，為的就是讓自己能學到更多在學校沒有學習到的知識，也增加自己實作的經。'}
                <br/><br/>
            </Typography>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <div className='Experience'>
            <br/>
            <Typography color="black"  gutterBottom>
                <h2>工作經驗</h2>
            </Typography>
            <Typography>
                <h3>
                    國立自然科學博物館 科學教育組-活動小組  實習生
                </h3>
                <p>
                    參加這次的實習，目的是為了改善自己的口語表達能力，自己在多人面前時容易緊張，想利用在科博館可以與很多人講解的機會，來改善自己，也在這次實習中學到不少事物。
                </p>
                <h3>
                    創科資訊 實習
                </h3>
                <p>
                    利用大四下學期，畢業學分滿足的情況下，想做一點不一樣的嘗試，讓自己去學習更多系上沒有接觸過的知識，也想透過這次的實習去增加自己的實戰經驗，也能確認自己是否適合往這方面去發展。
                </p>
            </Typography>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <div className='Works'>
        <br/>
        <Typography color="black"  gutterBottom>
            <h2>作品集</h2>
        </Typography>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <div className='Study'>
            <br/>
            <Typography color="black"  gutterBottom>
                <h2>學歷</h2>
            </Typography>
            <Typography>
                <h3>國立嘉義大學 數位學習設計與管理學系 畢業</h3>
            </Typography>
        </div>
    </CardContent>
    {/* <CardActions>
        <Button size="small">Learn More</Button>
    </CardActions> */}
    </Card>
);
}
