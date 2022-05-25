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
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Test from "../Componments/tesxt";

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
                startIcon={<AccountCircleIcon />}
                color="white"
                onClick={handleClickOpen}
              >
                <Typography color="White">登入/註冊</Typography>
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
            <CloseIcon fontSize="small" />
          </IconButton>
        </div>
        <Test close={handleClose} />
      </Dialog>
    </Box>
  );
}
