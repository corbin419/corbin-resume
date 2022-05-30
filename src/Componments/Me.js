import * as React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../App.css";
import { styled } from "@mui/material/styles";
import ME from "../Photos/HDme.JPG";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

export default function BasicCard() {
  return (
    <Box sx={{ margin: "0 auto", p: "3vh 0" }} className="Myself">
      <Box className="MyPhoto" sx={{ marginRight: "24px" }}>
        <Img src={ME} sx={{ width: "150px", height: "150px", p: 1 }} />
      </Box>
      <div>
        <Box sx={{ width: "130px", margin: "auto", padding: "1px" }}>
          <Typography variant="h6" fontWeight={700} sx={{ margin: "auto" }}>
            性別：男
          </Typography>
        </Box>
        <Box sx={{ width: "200px", margin: "auto", padding: "1px" }}>
          <Typography variant="h6" fontWeight={700} sx={{ margin: "auto" }}>
            手機：0965571499
          </Typography>
        </Box>
        <Box sx={{ width: "230px", margin: "auto", padding: "1px" }}>
          <Typography variant="h6" fontWeight={700} sx={{ margin: "auto" }}>
            出生日期：2000/04/19
          </Typography>
        </Box>
        <Box sx={{ width: "330px", margin: "auto", padding: "1px" }}>
          <Typography variant="h6" fontWeight={700} sx={{ margin: "auto" }}>
            電子郵件：corbin0419@gmail.com
          </Typography>
        </Box>
        <Box sx={{ width: "30px", margin: "auto", padding: "1px" }}>
          <IconButton href="https://github.com/corbin419" target="_blank">
            <GitHubIcon />
          </IconButton>
        </Box>
      </div>
    </Box>
  );
}
