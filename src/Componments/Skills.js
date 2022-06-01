import * as React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import "../App.css";
import { Box } from "@mui/material";

export default function ComplexBox() {
  return (
    <Box sx={{ margin: "0 auto", p: "3vh 0" }}>
      <Box sx={{ width: "40vw", margin: "2vh auto" }} display="flex">
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 250,
            flexGrow: 1,
            elevation: 3,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Box container spacing={1}>
            <Typography gutterBottom variant="h7" component="div">
              網頁前端
            </Typography>
            <br />
            <Typography variant="body2">
              <li>HTML5</li>
              <li>CSS</li>
              <li>React.js</li>
            </Typography>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 250,
            flexGrow: 1,
            elevation: 3,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Box container spacing={1}>
            <Box item xs>
              <Typography gutterBottom variant="h7" component="div">
                影像製作
              </Typography>
              <br />
              <Typography variant="body2">
                <li>紀錄片、微電影拍攝</li>
                <li>Adobe Premiere 剪輯</li>
                <li>商品拍攝</li>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </Box>
      <Box sx={{ width: "40vw", margin: "2vh auto" }} display="flex">
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 250,
            flexGrow: 1,
            elevation: 3,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Box container spacing={2}>
            <Box item xs={12} sm container>
              <Box item xs container>
                <Box item xs>
                  <Typography gutterBottom variant="h7" component="div">
                    動畫製作
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    <li>Adobe After Effect</li>
                    <br />
                    <li>Adobe Animation</li>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 2,
            margin: "auto",
            maxWidth: 250,
            flexGrow: 1,
            elevation: 3,
            backgroundColor: (theme) =>
              theme.palette.mode === "dark" ? "#1A2027" : "#fff",
          }}
        >
          <Box container spacing={1}>
            <Box item xs={12} sm container>
              <Box item xs container>
                <Box item xs>
                  <Typography gutterBottom variant="h7" component="div">
                    語言能力
                  </Typography>
                  <br />
                  <Typography variant="body2">
                    <li>中文：母語</li>
                    <br />
                    <li>英文：多益585</li>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
}
