import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import Link from '@mui/material/Link';
import Dog from '../Photos/biglogo.jpg';
import Lock from '../Photos/Lock.png';

const Img = styled('img')({
margin: 'auto',
display: 'block',
maxWidth: '100%',
maxHeight: '100%',
});

export default function ComplexGrid() {
return (
    <Grid container className='Works'>
        <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 700,
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#F3DFC1',
        }}
        variant="outlined"
        >
        <Grid container spacing={2}>
            <Grid item>
                {/* <Link href="" target="_blank"> */}
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img src={Lock}/>
                    </ButtonBase>
                {/* </Link> */}
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography gutterBottom variant="h7" component="div">
                    Monospace 鎖櫃登記系統 -前端
                </Typography><br/>
                <Typography variant="h7" gutterBottom>
                    在實習期間，最一開始接觸到的專案，利用前後端，做出一個登記系統，讓monospace的會員可以利用此系統去登記及抽選鎖櫃。我負責的是前端版面的部分。
                </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Paper>

        <Paper
        sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 700,
            flexGrow: 1,
            backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#F3DFC1',
        }}
        variant="outlined"
        >
        <Grid container spacing={2}>
            <Grid item>
                <Link href="https://corbin419.github.io/" target="_blank">
                    <ButtonBase sx={{ width: 128, height: 128 }}>
                        <Img src={Dog}/>
                    </ButtonBase>
                </Link>
            </Grid>
            <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                <Typography gutterBottom variant="h7" component="div">
                    畢業專題網頁製作-浪與不浪
                </Typography><br/>
                <Typography variant="h7" gutterBottom>
                    我們想透過狗園及寵物餐聽，來讓大家看見有許多人，為了這些被拋棄的寵物盡心盡力的樣子，進而提倡不要隨意棄養動物的概念。再透過網頁去宣導一些養狗知識及寵物友善環境。
                </Typography>
                </Grid>
            </Grid>
            </Grid>
        </Grid>
        </Paper>
    </Grid>
);
}
