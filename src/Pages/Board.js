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
  Avatar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect } from "react";
import axios from "../Axios.config";
import Edit from "../Componments/EditBtn";
import Delete from "../Componments/DeleteBtn";

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
  const [message, setMessage] = React.useState([]);
  const [messageContent, setMessageContent] = React.useState("");

  const handleMessage = async () => {
    let check_message = false;
    await axios
      .post(
        "api/message",
        {
          content: messageContent,
        },
        { headers: { token: localStorage.getItem("login_token") } }
      )
      .then((Response) => {
        console.log(Response);
        check_message = true;
      })
      .catch((error) => {
        console.log(error.response);
      });

    setState({
      open: true,
      ...{
        vertical: "top",
        horizontal: "center", //position of popout
      },
    });
    if (check_message === true) {
      setAlertText("留言成功");
      setSeverity("success");
      setTimeout(() => {
        window.location.reload(false);
      }, "1500");
    } else {
      setAlertText("留言失敗QAQ");
      setSeverity("error");
    }
  };

  useEffect(() => {
    axios.get("api/message").then((response) => {
      setMessage(response.data.data);
    });
  }, []);

  const handleTextareaChange = (e) => {
    const messageContent = e.target.value;
    setMessageContent(messageContent);
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
          marginTop: "2vh",
          flexGrow: 1,
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
          <Typography sx={{ width: "58px", p: 1 }} variant="h7">
            留言：
          </Typography>
          <TextField
            size="small"
            sx={{ width: "30vw" }}
            placeholder="你想說點啥？"
            value={messageContent}
            onChange={handleTextareaChange}
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
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 600,
          marginTop: "2vh",
          flexGrow: 1,
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
          <Box sx={{ m: "8px" }}>
            {message.map((a, index) => (
              <Paper
                display="flex"
                sx={{
                  width: "100%",
                  m: "16px auto",
                  bgcolor: "#8ca6c0",
                }}
                key={index}
              >
                <Box display="flex">
                  <Box sx={{ m: "auto", width: "50px", height: "50px" }}>
                    <Avatar sx={{ width: "50px", height: "50px" }}>
                      {a.owner}
                    </Avatar>
                  </Box>
                  <Box>
                    <Box sx={{ m: 2, p: 2, width: "420px" }} display="flex">
                      <Box sx={{ width: "350px" }}>{a.content}</Box>
                      <Box sx={{ m: "auto", height: "30px" }} display="flex">
                        <Edit newmessage={a.content} />
                        <Delete id={a.id} />
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: "150px",
                        marginLeft: "330px",
                        p: 0.5,
                      }}
                    >
                      <Typography variant="body2">
                        {a.createdAt.split(/[T.]/)[0]}
                        {a.createdAt.split(/[T.]/)[1]}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ))}
          </Box>
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
