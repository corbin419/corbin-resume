import * as React from "react";
import { Divider, Card, CardContent, Typography, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../App.css";
import InternCard from "./Card";
import Skill from "./Skills";
import Works from "./Works";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import ME from "../Photos/HDme.JPG";
import { Box } from "@mui/system";
import Trunk from "../Photos/Trunk1.jpg";
import KPGP from "../Photos/KPGLOGO.jpg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent className="CardBox">
        <div className="Information">
          <Grid container spacing={7}>
            <Grid item>
              <Box sx={{ width: 128, height: 128 }}>
                <Img src={ME} />
              </Box>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2} >
                <Grid item xs>
                  <Typography gutterBottom variant="h6" component="div">
                    紀元翔 Corbin
                  </Typography>
                  <br />
                  <Typography variant="h7" gutterBottom>
                    性別：男
                    <br />
                    出生日期：2000/04/19
                    <br />
                    電子郵件：corbin50111@gmail.com
                    <br />
                    手機：0965571499
                    <br />
                    <Link href="https://github.com/corbin419" target="_blank">
                      <GitHubIcon />
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <br />
        <Divider variant="middle" className="Divider" />
        <br />
        <div className="Summary" id="Summ">
          <Typography color="black" gutterBottom>
            <Box>簡歷</Box>
          </Typography>
          <Typography variant="h7" colr="black">
            {
              "目前就讀於國立嘉義大學數位學習設計與管理學系大四，透過系上的課程有接觸過Android Studio、Visual Studio、Visual Studio Code(HTML5、CSS3)， 在畢業專題方面，負責組內的網頁撰寫部分。也接觸過Adobe的軟體，像是AI、PS、AE、PR，熟悉這些軟體的基本操作，也能自行製作簡易作品。"
            }
            <br />
            <br />
            {
              "大二暑假為了改變自己不擅於表達自己想法的缺點，參加了科博館的實習生(科學教育組-活動小組)，為的就是讓自己能在團隊中與他人做更好的交流，且能在多人面前更自在的表達自己的想法。"
            }
            <br />
            <br />
            {
              "大四下學期則是選擇到創科資訊去實習，為的就是讓自己能學到更多在學校沒有學習到的知識，也增加自己實作的經驗。"
            }
            <br />
            <br />
          </Typography>
        </div>
        <br />
        <Divider variant="middle" className="Divider" />
        <div className="Experience" id="exp">
          <br />
          <Typography variant="h5" color="black" gutterBottom fontWeight="bold">
            <Box>工作經驗</Box>
          </Typography>
          <div className="KPG">
            <InternCard
              Image={<Img alt="complex" src={KPGP} />}
              internTittle="國立自然科學博物館 科學教育組-活動小組 實習"
              Content="參加這次的實習，目的是為了改善自己的口語表達能力，自己在多人面前時容易緊張，想利用在科博館可以與很多人講解的機會，來改善自己，也在這次實習中學到不少事物。"
            />
          </div>
          <div className="Trunk">
            <InternCard
              Image={<Img alt="complex" src={Trunk} />}
              internTittle="創科資訊 實習"
              Content="利用大四下學期，畢業學分滿足的情況下，想做一點不一樣的嘗試，讓自己去學習更多系上沒有接觸過的知識，也想透過這次的實習去增加自己的實戰經驗，也能確認自己是否適合往這方面去發展。"
            />
          </div>
        </div>
        <br />
        <Divider variant="middle" className="Divider" />
        <div className="Skills" id="skill">
          <br />
          <Typography color="black" gutterBottom>
            <Box>專業能力</Box>
          </Typography>
          <div>
            <Skill />
          </div>
        </div>

        <br />
        <Divider variant="middle" className="Divider" />
        <div className="Study" id="study">
          <br />
          <Typography color="black" gutterBottom>
            <Box>學歷</Box>
          </Typography>
          <Typography>
            <Box>國立嘉義大學 數位學習設計與管理學系-就讀中</Box>
          </Typography>
        </div>
        <br />
        <Divider variant="middle" className="Divider" />
        <div className="Works" id="work">
          <br />
          <Typography color="black" gutterBottom>
            <Box>作品集</Box>
          </Typography>
          <div className="Works">
            <Works />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
