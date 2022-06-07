import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import useMediaQuery from "@mui/material/useMediaQuery";
import { IconButton, TextField, Link, Snackbar } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import LoginIcon from "@mui/icons-material/Login";
import axios from "../Axios.config";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import MuiAlert from "@mui/material/Alert";
import { styled } from "@mui/material/styles";
import HaHa from "../Photos/laugh.jpg";
import LogoutIcon from "@mui/icons-material/Logout";
import BYE from "../Photos/image.gif";

const theme = createTheme({
  palette: {
    white: {
      main: "rgb(255,255,255)",
    },
    Button: {
      main: "#363F4E",
    },
  },
});
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function ButtonAppBar(props) {
  const [username, setUsername] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [who, setWho] = React.useState(username);
  const [LoginName, setLoginName] = React.useState(
    localStorage.getItem("login_token") ? "登出" : "登入"
  );
  const [icon, setIcon] = React.useState(<LoginIcon />);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [hidden, setHidden] = React.useState(true);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [AlertText, setAlertText] = React.useState("");
  const [Severity, setSeverity] = React.useState("");
  const [state, setState] = React.useState({
    openSnack: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, openSnack } = state;
  const handleCloseSnack = () => {
    setState({ ...state, openSnack: false });
  };
  const handlecloseDia = () => {
    setOpen(false);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [value, setValue] = React.useState(0);
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "60%",
    maxHeight: "60%",
  });
  const [password, setPassword] = React.useState();

  const HandleLogin = async (event) => {
    event.preventDefault();
    let login = false;
    await axios
      .post("api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        login = true;
        console.log(response);
        localStorage.setItem("login_token", response["data"]["token"]);
        localStorage.setItem("username", response["data"]["username"]);
        window.location.reload(false);
      })
      .catch((error) => {
        console.log(error.response);
      });
    setState({
      openSnack: true,
      ...{
        vertical: "top",
        horizontal: "center", //position of popout
      },
    });
    if (login === true) {
      setOpen(false);
      setHidden(false);
      setAlertText(username + "登入成功，快去留言唄");
      setSeverity("success");
      setLoginName("登出");
      setWho("你是" + username + "你好啊");
      setIcon(<LogoutIcon />);
    } else {
      setAlertText("登入失敗，再試一次");
      setSeverity("error");
      setOpen(false);
    }
  };

  React.useEffect(() => {
    if (localStorage.getItem("login_token")) {
      setHidden(false);
    } else {
      setHidden(true);
    }
    if (localStorage.getItem("username")) {
      setWho("你是" + localStorage.getItem("username"));
    } else {
      setWho("");
    }
  }, []);

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const guestLogin = () => {
    console.log("wee");
  };
  const handleLogout = () => {
    console.log("7414");
    localStorage.removeItem("login_token");
    localStorage.removeItem("username");
    window.location.reload(false);
  };
  return (
    <Box sx={{ flexGrow: 1, position: "sticky", top: 0, zIndex: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="Button">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
              color="White"
            >
              紀元翔-履歷
            </Typography>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 600, ml: "10vw" }}
                color="White"
              >
                {who}
              </Typography>
            <Button
              variant="outlined"
              color="white"
              sx={{ marginRight: "16px" }}
              href="/Board"
            >
              <Typography variant="h7">留言板</Typography>
            </Button>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                startIcon={<AccountCircleIcon />}
                color="white"
                href="/Register"
                sx={{ marginRight: "16px" }}
              >
                <Typography color="White">註冊</Typography>
              </Button>
            </ThemeProvider>
            <ThemeProvider theme={theme}>
              <Button
                variant="outlined"
                startIcon={icon}
                color="white"
                onClick={handleClickOpen}
                sx={{ marginRight: "8px" }}
              >
                <Typography color="White">{LoginName}</Typography>
              </Button>
            </ThemeProvider>
          </Toolbar>
        </AppBar>
      </ThemeProvider>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <div>
          <IconButton
            className="closebtn"
            sx={{
              maxWidth: "15px",
              maxHeight: "15px",
              marginLeft: "92%",
              marginTop: "2vh",
            }}
            onClick={handlecloseDia}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        {!hidden ? (
          <Box sx={{ width: "300px", height: "220px" }}>
            <Box sx={{ margin: "8px auto" }}>
              <Img src={BYE} />
            </Box>
            <Box
              sx={{
                width: "200px",
                margin: "16px auto",
                padding: "auto",
              }}
            >
              <ThemeProvider theme={theme}>
                <Button
                  variant="contained"
                  color="Button"
                  sx={{ width: "200px", marginBottom: "16px" }}
                  onClick={handleLogout}
                >
                  <Typography
                    variant="h7"
                    sx={{ fontWeight: 700 }}
                    color="White"
                  >
                    我要登出
                  </Typography>
                </Button>
              </ThemeProvider>
            </Box>
          </Box>
        ) : (
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange}>
                <Tab label="登入" {...a11yProps(0)} />
                <Tab label="訪客登入" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ p: 2, width: "130px", fontWeight: 700 }}>
                  帳號Account ：
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="請輸入帳號"
                  onChange={onChangeUsername}
                />
              </Box>
              <Box sx={{ display: "flex" }}>
                <Typography sx={{ p: 2, width: "130px", fontWeight: 700 }}>
                  密碼Password ：
                </Typography>
                <TextField
                  variant="outlined"
                  size="small"
                  sx={{ mt: 1 }}
                  placeholder="請輸入密碼"
                  y
                  onChange={onChangePassword}
                  type="password"
                />
              </Box>
              <Box sx={{ marginLeft: "16px", width: "180px" }}>
                <Link href="/Register">
                  <ThemeProvider theme={theme}>
                    <Typography
                      color="gray"
                      sx={{ marginTop: "8px", width: "180px" }}
                    >
                      沒有帳號嗎？辦一個吧！
                    </Typography>
                  </ThemeProvider>
                </Link>
                <Box display="flex" sx={{ width: "380px", marginTop: "16px" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="Button"
                      sx={{
                        minHeight: "34px",
                        minWidth: "180px",
                        maxHeight: "34px",
                        maxWidth: "180px",
                        margin: "auto",
                        marginLeft: 0,
                      }}
                      onClick={HandleLogin}
                    >
                      <Typography variant="body2" color="White">
                        登入
                      </Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      color="Button"
                      sx={{
                        minHeight: "34px",
                        minWidth: "180px",
                        maxHeight: "34px",
                        maxWidth: "180px",
                        margin: "auto",
                      }}
                      onClick={handlecloseDia}
                    >
                      <Typography variant="body2">取消</Typography>
                    </Button>
                  </ThemeProvider>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Box>
                <Box>
                  <Typography variant="h7" sx={{ fontWeight: 700 }}>
                    你484懶得辦帳號？那就用訪客來登入留言唄~
                  </Typography>
                  <Img
                    src={HaHa}
                    sx={{ marginTop: "8px", width: "200px", height: "100px" }}
                  />
                  <Link href="/Register">
                    <ThemeProvider theme={theme}>
                      <Typography
                        color="gray"
                        sx={{ marginTop: "8px", width: "220px" }}
                      >
                        回心轉意了嗎？辦一個吧！
                      </Typography>
                    </ThemeProvider>
                  </Link>
                </Box>
                <Box display="flex" sx={{ width: "380px", marginTop: "16px" }}>
                  <ThemeProvider theme={theme}>
                    <Button
                      variant="contained"
                      color="Button"
                      sx={{
                        minHeight: "34px",
                        minWidth: "180px",
                        maxHeight: "34px",
                        maxWidth: "180px",
                        margin: "auto",
                        marginLeft: 0,
                      }}
                      onClick={guestLogin}
                    >
                      <Typography variant="body2" color="White">
                        訪客登入
                      </Typography>
                    </Button>
                    <Button
                      variant="outlined"
                      color="Button"
                      sx={{
                        minHeight: "34px",
                        minWidth: "180px",
                        maxHeight: "34px",
                        maxWidth: "180px",
                        margin: "auto",
                      }}
                      onClick={handlecloseDia}
                    >
                      <Typography variant="body2">取消</Typography>
                    </Button>
                  </ThemeProvider>
                </Box>
              </Box>
            </TabPanel>
          </Box>
        )}
      </Dialog>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={openSnack}
        autoHideDuration={1500}
        onClose={handleCloseSnack}
        key={vertical + horizontal}
      >
        <Alert
          onClose={handleCloseSnack}
          severity={Severity}
          sx={{ width: "100%" }}
        >
          {AlertText}
        </Alert>
      </Snackbar>
    </Box>
  );
}
