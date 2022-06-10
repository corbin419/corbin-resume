import React from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  Divider,
  Link,
  Snackbar,
  Avatar,
  Collapse,
  Menu,
  MenuItem,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useEffect } from "react";
import axios from "../Axios.config";
import Edit from "../Componments/EditBtn";
import Delete from "../Componments/DeleteBtn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { TransitionGroup } from "react-transition-group";

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
export default function Board(props) {
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
  const [U, setU] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [postorsearch, setPostorsearch] = React.useState("留言");
  const [placeholder, setPlaceholder] = React.useState("你想說點啥？");
  const openmenu = Boolean(anchorEl);
  const [hidden, setHidden] = React.useState(true);

  const handleMessage = async () => {
    let check_message = false;
    let header = {};
    if (localStorage.getItem("login_token")) {
      header = { token: localStorage.getItem("login_token") };
    }
    await axios
      .post(
        "api/message",
        {
          content: messageContent,
        },
        { headers: header }
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
      setU(!U);
      setMessageContent("");
    } else {
      setAlertText("留言失敗XD 登入一下或不要啥都不說");
      setSeverity("error");
    }
  };

  useEffect(() => {
    axios.get("api/message").then((response) => {
      for (let i = 0; i < response.data.data.length; i++) {
        const time = new Date(response.data.data[i].createdAt).toLocaleString(
          "zh-TW",
          { timeZone: "Asia/Taipei" }
        );
        response.data.data[i].createdAt = time;
      }
      setMessage(response.data.data);
    });
  }, [U]);

  const handleTextareaChange = (e) => {
    const messageContent = e.target.value;
    setMessageContent(messageContent);
  };
  const handleOpenList = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };
  const handletoSearch = () => {
    setPostorsearch("搜尋");
    setPlaceholder("你想找啥留言？");
    setHidden(false);
    setAnchorEl(null);
  };
  const handletopost = () => {
    setPostorsearch("留言");
    setHidden(true);
    setPlaceholder("你想說點啥？");
    setAnchorEl(null);
  };
  const handleSearch = () => {
    // axios.get("api/message").then(response)=()=>{
    // }
    console.log("wee")
  };
  return (
    <div>
      <Box sx={{ marginTop: "5vh", paddingLeft: "4vw" }}>
        <Link href="/" underline="none">
          <ThemeProvider theme={theme}>
            <Button color="Button">
              <ArrowBackIosNewIcon fontSize="large" />
              <Typography variant="h6" fontWeight="700">
                回履歷
              </Typography>
            </Button>
          </ThemeProvider>
        </Link>
      </Box>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 700,
          marginTop: "2vh",
          flexCollapse: 1,
        }}
      >
        <Box sx={{ m: "auto 24px" }}>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
            你可以在這裡講話，但不一定有人理你🤔
          </Typography>
        </Box>
        <Box display="flex" sx={{ m: "auto", width: "650px" }}>
          <ThemeProvider theme={theme}>
            <Button
              variant="outlined"
              color="Button"
              sx={{ mr: 1 }}
              endIcon={<KeyboardArrowDownIcon />}
              onClick={handleOpenList}
            >
              <Typography variant="h7">{postorsearch}</Typography>
            </Button>
            <Menu
              open={openmenu}
              onClose={handleCloseMenu}
              anchorEl={anchorEl}
              sx={{ marginLeft: "8px" }}
            >
              <MenuItem onClick={handletopost}>
                <Typography variant="body2">留言</Typography>
              </MenuItem>
              <MenuItem onClick={handletoSearch}>
                <Typography variant="body2">搜尋</Typography>
              </MenuItem>
            </Menu>
          </ThemeProvider>
          <TextField
            size="small"
            sx={{ width: "30vw" }}
            placeholder={placeholder}
            value={messageContent}
            onChange={handleTextareaChange}
          />
          {!hidden ? (
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
                onClick={handleSearch}
              >
                <Typography variant="h7" color="White" sx={{ fontWeight: 700 }}>
                  搜尋
                </Typography>
              </Button>
            </ThemeProvider>
          ) : (
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
          )}
        </Box>
      </Paper>
      <Paper
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: "80%",
          marginTop: "2vh",
          flexCollapse: 1,
          bgcolor: "#DDDCD7",
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
            <TransitionGroup>
              {message.map((a, index) => (
                <Collapse key={index} timeout={800}>
                  <Paper
                    display="flex"
                    sx={{
                      width: "100%",
                      m: "16px auto",
                      bgcolor: "#7D8CA3 ",
                    }}
                    key={index}
                  >
                    <Box display="flex">
                      <Box
                        sx={{
                          m: "auto 2vw",
                          width: "50px",
                          height: "50px",
                        }}
                      >
                        <Avatar
                          sx={{
                            width: "50px",
                            height: "50px",
                            bgcolor: "#1E1E1E",
                          }}
                        >
                          {a.owner}
                        </Avatar>
                      </Box>
                      <Box sx={{ width: "90%" }}>
                        <Box sx={{ m: 2, p: 2, width: "90%" }} display="flex">
                          <Box sx={{ width: "80%" }}>{a.content}</Box>
                          {localStorage.getItem("username") !==
                          a.owner ? null : (
                            <Box
                              sx={{ m: "auto", height: "30px" }}
                              display="flex"
                            >
                              <Edit
                                newmessage={a.content}
                                id={a.id}
                                U={U}
                                setU={setU}
                              />
                              <Delete id={a.id} U={U} setU={setU} />
                            </Box>
                          )}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          width: "15%",
                          p: 0.5,
                          mt: "50px",
                          pt: "10px",
                        }}
                      >
                        <Typography variant="body2">
                          {a.createdAt.split(/[T.]/)[0]}
                          {a.createdAt.split(/[T.]/)[1]}
                        </Typography>
                      </Box>
                    </Box>
                  </Paper>
                </Collapse>
              ))}
            </TransitionGroup>
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
