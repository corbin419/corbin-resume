import React from "react";
import { Box, Paper, TextField, Typography, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    white: {
      main: "rgb(255,255,255)",
    },
    Button: {
      main: "#363F4E",
    },
    Log: {
      main: "#5CB4FD",
    },
  },
});

export default function Register() {
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ p: 2, width: "130px", fontWeight: 700 }}>
          帳號名稱 ：
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ mt: 1 }}
          placeholder="請輸入帳號名稱"
          fullWidth
        />
      </Box>
      <Box sx={{ display: "flex" }}>
        <Typography sx={{ p: 2, width: "130px", fontWeight: 700 }}>
          密碼 ：
        </Typography>
        <TextField
          variant="outlined"
          size="small"
          sx={{ mt: 1 }}
          placeholder="請輸入密碼"
          fullWidth
        />
      </Box>
      <Box
        display="flex"
        sx={{ width: "420px", marginTop: "16px", marginLeft: "auto" }}
      >
        <ThemeProvider theme={theme}>
          <Button
            variant="contained"
            color="Button"
            sx={{
              minHeight: "34px",
              minWidth: "200px",
              maxHeight: "34px",
              maxWidth: "200px",
              margin: "auto",
              marginLeft: 0,
            }}
          >
            <Typography variant="body2" color="White">
              註冊
            </Typography>
          </Button>
          <Button
            variant="outlined"
            color="Button"
            sx={{
              minHeight: "34px",
              minWidth: "200px",
              maxHeight: "34px",
              maxWidth: "200px",
              margin: "auto",
            }}
          >
            <Typography variant="body2">取消</Typography>
          </Button>
        </ThemeProvider>
      </Box>
    </Paper>
  );
}
