import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import LoginIcon from "@mui/icons-material/Login";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { DialogContent, IconButton, Link, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

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

export default function ButtonAppBar() {
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ThemeProvider theme={theme}>
        <AppBar position="static" color="Button">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontWeight: 600 }}
              color="White"
            >
              Corbin
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
                startIcon={<LoginIcon />}
                color="white"
                onClick={handleClickOpen}
              >
                <Typography color="White">Login</Typography>
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
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>
        <DialogTitle>
          <Typography variant="h5">登入</Typography>
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ p: 2, width: "125px" }}>
              帳號Account ：
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              sx={{ mt: 1 }}
              placeholder="請輸入帳號"
            />
          </Box>
          <Box sx={{ display: "flex" }}>
            <Typography sx={{ p: 2, width: "125px" }}>
              密碼Password ：
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              sx={{ mt: 1 }}
              placeholder="請輸入密碼"
            />
          </Box>
          <Box sx={{ marginLeft: "16px" }}>
            <Link href="/Register">
              <ThemeProvider theme={theme}>
                <Typography color="gray">沒有帳號嗎？</Typography>
              </ThemeProvider>
            </Link>
          </Box>
        </DialogContent>
        <DialogActions sx={{ m: 1 }}>
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
              }}
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
              onClick={handleClose}
            >
              <Typography variant="body2">取消</Typography>
            </Button>
          </ThemeProvider>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
