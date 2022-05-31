import React from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
  IconButton,
  Link,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Board() {
  const [AlertText, setAlertText] = React.useState("");
  const [Severity, setSeverity] = React.useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const handleMessage = () => {
    setState({
      open: true,
      ...{
        vertical: "top",
        horizontal: "center", //position of popout
      },
    });
    setAlertText("留言成功");
    setSeverity("success");
  };
  return (
    <div>
      <Box sx={{ marginTop: "5vh", paddingLeft: "4vw" }}>
        <Link href="/">
          <IconButton>
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 600,
          maxHeight: 800,
          marginTop: "2vh",
          flexGrow: 1,
          overflow: "scroll",
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Box sx={{ m: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
            這裡是留言板
          </Typography>
          <Divider />
        </Box>
      </Paper>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 600,
          marginTop: "2vh",
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Box sx={{ m: 1 }}>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
            你可以在這裡講話，但不一定有人理你🤔
          </Typography>
        </Box>
        <Box display="flex">
          <Typography sx={{ width: "58px", p: 1 }}>留言：</Typography>
          <TextField
            size="small"
            sx={{ width: "30vw" }}
            placeholder="你想說點啥？"
          />
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="Button"
              sx={{
                marginLeft: "16px",
                marginTop: "2px",
                minHeight: "36px",
                maxHeight: "36px",
              }}
              onClick={handleMessage}
            >
              <Typography variant="h7" color="White" sx={{ fontWeight: 700 }}>
                送出
              </Typography>
            </Button>
          </ThemeProvider>
        </Box>
      </Paper>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        autoHideDuration={1500}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity={Severity} sx={{ width: "100%" }}>
          {AlertText}
        </Alert>
      </Snackbar>
    </div>
  );
}
