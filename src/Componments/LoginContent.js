import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link, TextField, Snackbar } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import HaHa from "../Photos/laugh.jpg";
import { styled } from "@mui/material/styles";
import axios from "../Axios.config";
import MuiAlert from "@mui/material/Alert";

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
export default function BasicTabs(props) {
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
  const [value, setValue] = React.useState(0);
  const { close } = props;
  const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  });
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();

  const HandleLogin = async (event) => {
    let check = false;
    console.log("hi");
    event.preventDefault();
    await axios
      .post("api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        check = true;
      })
      .catch((error) => {});
    setState({
      open: true,
      ...{
        vertical: "top",
        horizontal: "center", //position of popout
      },
    });
    if (check === true) {
      setAlertText("登入成功，快去留言唄");
      setSeverity("success");

    } else {
      setAlertText("登入失敗QAQ");
      setSeverity("error");
    }
  };
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

  return (
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
                onClick={close}
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
                onClick={close}
              >
                <Typography variant="body2">取消</Typography>
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </TabPanel>
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
    </Box>
  );
}
