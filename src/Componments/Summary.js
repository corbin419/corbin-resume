import * as React from "react";
import { Box, Typography } from "@mui/material";
import "../App.css";

export default function BasicCard() {
  return (
    <Box sx={{ margin: "auto", m: 2, p: "3vh 0" }} className="Myself">
      <Box className="MyPhoto" sx={{ marginRight: "24px" }}>
        <Typography
          variant="h4"
          fontWeight={600}
          sx={{ margin: "0 auto", width: "80px", p: 1 }}
        >
          簡歷
        </Typography>
      </Box>
      <div>
        <Box sx={{ width: "71vw", margin: " 0 auto", p: 1 }}>
          <Typography variant="h7" fontWeight={700} sx={{ margin: "auto" }}>
            目前就讀於國立嘉義大學數位學習設計與管理學系大四，透過系上的課程有接觸過Android
            Studio、Visual Studio、Visual Studio Code(HTML5、CSS3)，
            在畢業專題方面，負責組內的網頁撰寫部分。也接觸過Adobe的軟體，像是AI、PS、AE、PR，熟悉這些軟體的基本操作，也能自行製作簡易作品。
            大二暑假為了改變自己不擅於表達自己想法的缺點，參加了科博館的實習生(科學教育組-活動小組)，為的就是讓自己能在團隊中與他人做更好的交流，且能在多人面前更自在的表達自己的想法。
            大四下學期則是選擇到創科資訊去實習，為的就是讓自己能學到更多在學校沒有學習到的知識，也增加自己實作的經驗。
          </Typography>
        </Box>
      </div>
    </Box>
  );
}
