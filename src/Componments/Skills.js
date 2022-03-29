import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import '../App.css';



export default function ComplexGrid() {
  return (
    <Grid container rowspacing={2}columnSpacing={{ xs: 1, sm: 2, md: 3 }} className='Allskill'>
      <Grid container spacing={1} className="G">
          <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 250,
            flexGrow: 1 ,
            elevation: 3 ,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container>
                <Grid item xs>
                  <Typography gutterBottom variant="h7" component="div">
                  網頁前端
                  </Typography><br/>
                  <Typography variant='body2'>
                    <li>HTML5</li>
                    <li>Css</li>
                    <li>React.js</li>
                    <br/>
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
            maxWidth: 150,
            flexGrow: 1 ,
            elevation: 3 ,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm container>
              <Grid item xs container>
                <Grid item xs>
                  <Typography gutterBottom variant="h7" component="div">
                  影像製作
                  </Typography><br/>
                  <Typography variant='body2'>
                    <li>紀錄片、微電影拍攝</li>
                    <li>Adobe Premiere 剪輯</li>
                    <li>商品拍攝</li>
                    <br/>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Paper>
      </Grid>
      <Grid container spacing={1} className="G">
          <Paper
          sx={{
            p: 2,
            margin: 'auto',
            maxWidth: 150,
            flexGrow: 1 ,
            elevation: 3 ,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container>
                <Grid item xs>
                  <Typography gutterBottom variant="h7" component="div">
                  動畫製作
                  </Typography><br/>
                  <Typography variant='body2'>
                    <li>Adobe After Effect</li>
                    <li>Adobe Animation</li>
                    <li>曾參加大林慈濟衛教短片製作</li>
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
            maxWidth: 150,
            flexGrow: 1 ,
            elevation: 3 ,
            backgroundColor: (theme) =>
              theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
          }}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm container>
              <Grid item xs container>
                <Grid item xs>
                  <Typography gutterBottom variant="h7" component="div">
                  語言能力
                  </Typography><br/>
                  <Typography variant='body2'>
                    <li>中文：母語</li><br/>
                    <li>英文：多益585</li>
                    <br/>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          </Paper>
      </Grid>
    </Grid>
  );
}
