import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';
import KPGP from '../Photos/KPGLOGO.jpg'

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function ComplexGrid() {
return (
    <Paper
    sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
        theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    }}
    >
    <Grid container spacing={2}>
        <Grid item>
        <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={KPGP} />
        </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
        <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
            <Typography gutterBottom variant="subtitle1" component="div">
            國立自然科學博物館 科學教育組-活動小組 實習
            </Typography>
            <Typography variant="body2" gutterBottom>
            參加這次的實習，目的是為了改善自己的口語表達能力，自己在多人面前時容易緊張，想利用在科博館可以與很多人講解的機會，來改善自己，也在這次實習中學到不少事物。
            </Typography>
            </Grid>
        </Grid>
        </Grid>
    </Grid>
    </Paper>
);
}
