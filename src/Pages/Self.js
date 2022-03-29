import * as React from 'react';
import { Divider,
        Card,
        CardContent,
        Typography,
        Link ,  
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import '../App.css';
import myphoto from '../Photos/HDme.JPG';
import Card1 from '../Componments/Card1';
import Card2 from '../Componments/Card2';
import Skill from '../Componments/Skills';
import Works from '../Componments/Works';



export default function BasicCard() {
return (
    <Card sx={{ minWidth:300 }}>
    <CardContent className='CardBox'>
        <div className='Information'>
            <div className='intorduce'>
                <Typography  color="black"gutterBottom>
                    <h2>紀元翔</h2>
                </Typography>
                <Typography  color="black">
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
                <img src={myphoto}
                    width="60%"
                    alt='selfphoto'/>
            </div>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <br/>
        <div className='Summary' id='Summ'>
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
        <div className='Experience' id='exp'>
            <br/>
            <Typography color="black"  gutterBottom>
                <h2>工作經驗</h2>
            </Typography>
            <div className='KPG'><Card1/></div>
            <div className='Trunk'><Card2/></div>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <div className='Skills' id='skill'>
            <br/>
            <Typography color="black"  gutterBottom>
                <h2>專業能力</h2>
            </Typography>
            <div><Skill/></div>
        </div>

        <br/>
        <Divider variant="middle"className='Divider'/>
        <div className='Study'id='study'>
            <br/>
            <Typography color="black"  gutterBottom>
                <h2>學歷</h2>
            </Typography>
            <Typography>
                <h4>國立嘉義大學 數位學習設計與管理學系</h4>
            </Typography>
        </div>
        <br/>
        <Divider variant="middle"className='Divider'/>
        <div className='Works' id='work'>
        <br/>
        <Typography color="black"  gutterBottom>
            <h2>作品集</h2>
        </Typography>
        <div className='Works'><Works/></div>
        </div>
    </CardContent>
    </Card>
);
}
