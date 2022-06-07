import * as React from "react";
import { Box, Typography, IconButton, Dialog, Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import DeleteIcon from "@mui/icons-material/Delete";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from "../Axios.config";

import "../App.css";
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
export default function EditBtn(props) {
  const [open, setOpen] = React.useState(false);
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    axios
      .delete("api/message", {
        headers: { token: localStorage.getItem("login_token") },
        data: { id: props.id },
      })
      .then((response) => {
        console.log(response);
        props.setU(!props.U);
        setOpen(false);
      })
      .catch((error) => {
        console.log(error.response.data["message"]);
      });
    console.log("c8 c8");
  };

  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ width: "200px" }}>
          <Box sx={{ textAlign: "center", p: "8px", m: 1 }}>
            <Typography variant="h7">刪了就沒了喔</Typography>
          </Box>
          <Box display="flex" sx={{ m: 2 }}>
            <ThemeProvider theme={theme}>
              <Button
                color="Button"
                variant="contained"
                sx={{ ml: "16px" }}
                onClick={handleDelete}
              >
                <Typography variant="h7" color="White">
                  確認
                </Typography>
              </Button>
              <Button
                color="Button"
                variant="outlined"
                sx={{ ml: "8px" }}
                onClick={handleClose}
              >
                <Typography variant="h7">取消</Typography>
              </Button>
            </ThemeProvider>
          </Box>
        </Box>
      </Dialog>
    </Box>
  );
}
