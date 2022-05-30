import * as React from "react";
import { Box, Typography } from "@mui/material";
import KPGP from "../Photos/KPGLOGO.jpg";
import Trunk from "../Photos/Trunk1.jpg";
import "../App.css";
import { styled } from "@mui/material/styles";
import Card from "../Componments/Card";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function BasicCard() {
  return (
    <Box sx={{ margin: "2vh auto", p: "3vh 0" }}>
      <Box className="MyPhoto" sx={{ marginRight: "24px" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ margin: "0 auto", width: "120px", p: 1 }}
        >
          學/經歷
        </Typography>
      </Box>
      <div>
        <Box sx={{ width: "400px", margin: "auto", padding: "1px" }}>
          <Typography variant="h6" fontWeight={700} sx={{ margin: "auto" }}>
            國立嘉義大學-數位學習設計與管理學系 畢業
          </Typography>
        </Box>
      </div>
      <Box display="flex-wr" sx={{ width: "60vw", margin: "0 auto" }}>
        <Card
          Image={<Img alt="complex" src={KPGP} />}
          internTittle="國立自然科學博物館 科學教育組-活動小組 實習"
          Content="參加這次的實習，目的是為了改善自己的口語表達能力，自己在多人面前時容易緊張，想利用在科博館可以與很多人講解的機會，來改善自己，也在這次實習中學到不少事物。"
        />
        <Card
          Image={<Img alt="complex" src={Trunk} />}
          internTittle="創科資訊 實習"
          Content="利用大四下學期，畢業學分滿足的情況下，想做一點不一樣的嘗試，讓自己去學習更多系上沒有接觸過的知識，也想透過這次的實習去增加自己的實戰經驗，也能確認自己是否適合往這方面去發展。"
        />
      </Box>
    </Box>
  );
}
