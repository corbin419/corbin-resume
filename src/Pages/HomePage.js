import "../App.css";
import Self from "../Componments/Me";
import Sum from "../Componments/Summary";
import Study from "../Componments/Study";
import Skill from "../Componments/Skills";
import { Divider, Box, Link, Typography } from "@mui/material";
import Card from "../Componments/Card";
import { styled } from "@mui/material/styles";
import Lock from "../Photos/Lock.png";
import Dog from "../Photos/biglogo.jpg";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

function App() {
  return (
    <div className="App">
      <div className="Selfinfor">
        <Self />
        <Divider variant="middle" sx={{ width: "80vw", margin: "0 auto" }} />
        <Sum />
        <Divider variant="middle" sx={{ width: "80vw", margin: "0 auto" }} />
        <Study />
        <Divider variant="middle" sx={{ width: "80vw", margin: "0 auto" }} />
        <Box sx={{ margin: "2vh auto", p: "3vh 0" }}>
          <Box>
            <Typography
              variant="h4"
              fontWeight={600}
              sx={{ margin: "0 auto", width: "120px", p: 1 }}
            >
              作品集
            </Typography>
          </Box>
          <Card
            Image={
              <Link
                href="https://mono-lock-front.herokuapp.com/"
                target="_blank"
              >
                <Img alt="complex" src={Lock} />
              </Link>
            }
            internTittle="Monospace 鎖櫃登記系統 -前端"
            Content="在實習期間，最一開始接觸到的專案，利用前後端，做出一個登記系統，讓monospace的會員可以利用此系統去登記及抽選鎖櫃。我負責的是前端版面的部分。"
          />
          <Card
            Image={
              <Link
                href="https://mono-lock-front.herokuapp.com/"
                target="_blank"
              >
                <Img alt="complex" src={Dog} />
              </Link>
            }
            internTittle="畢業專題網頁製作-浪與不浪"
            Content="我們想透過狗園及寵物餐聽，來讓大家看見有許多人，為了這些被拋棄的寵物盡心盡力的樣子，進而提倡不要隨意棄養動物的概念。再透過網頁去宣導一些養狗知識及寵物友善環境。"
          />
        </Box>
        <Divider variant="middle" sx={{ width: "80vw", margin: "0 auto" }} />
        <Skill />
      </div>
    </div>
  );
}

export default App;
