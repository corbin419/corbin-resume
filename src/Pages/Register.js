import React from "react";
import {
  Box,
  Paper,
  TextField,
  Typography,
  Button,
  IconButton,
  Link,
  Snackbar,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import axios from "../Axios.config";
import MuiAlert from "@mui/material/Alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

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

export default function Register() {
  const [AlertText, setAlertText] = React.useState("");
  const [Severity, setSeverity] = React.useState("");
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    showPassword: false,
  });
  const { vertical, horizontal, open } = state;
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const [mail, setMail] = React.useState();
  const handleRegister = async () => {
    let check = false;
    await axios
      .post("api/register", {
        username: username,
        password: password,
        mail: mail,
      })
      .then((Response) => {
        console.log(Response);
        check = true;
      })
      .catch((error) => {
        console.log(error.response);
      });
    console.log(username, password, mail);
    setState({
      open: true,
      ...{
        vertical: "top",
        horizontal: "center", //position of popout
      },
    });
    if (check === true) {
      setAlertText(username + "註冊成功，快去登入唄");
      setSeverity("success");
      setTimeout(() => {
        window.location.reload(false);
      }, "1000");
    } else {
      setAlertText("註冊失敗QAQ");
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
  const onChangeMail = (e) => {
    const mail = e.target.value;
    setMail(mail);
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
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
          margin: "5vh auto",
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === "dark" ? "#1A2027" : "#fff",
        }}
      >
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            註冊帳號
          </Typography>
        </Box>
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
            onChange={onChangeUsername}
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ p: 2, width: "130px", fontWeight: 700 }}>
            Mail ：
          </Typography>
          <TextField
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
            placeholder="請輸入你的Mail"
            fullWidth
            onChange={onChangeMail}
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
            onChange={onChangePassword}
            type="password"
          />
        </Box>
        <Box sx={{ display: "flex" }}>
          <Typography sx={{ p: 2, width: "130px", fontWeight: 700 }}>
            密碼確認 ：
          </Typography>
          <OutlinedInput
            placeholder="請再次輸入密碼"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            fullWidth
            sx={{
              height: "40px",
              margin: "auto",
            }}
          />
        </Box>
        <Box
          display="flex"
          sx={{
            marginTop: "16px",
            marginLeft: "auto",
          }}
        >
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              color="Button"
              sx={{
                minHeight: "34px",
                minWidth: "240px",
                maxHeight: "34px",
                maxWidth: "240px",
                margin: "auto",
                marginLeft: 0,
              }}
              onClick={handleRegister}
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
                minWidth: "240px",
                maxHeight: "34px",
                maxWidth: "240px",
                margin: "auto",
              }}
              href="/"
            >
              <Typography variant="body2">取消</Typography>
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
