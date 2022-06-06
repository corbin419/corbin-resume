import * as React from "react";
import {
  Box,
  Typography,
  IconButton,
  Dialog,
  TextField,
  Button,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import useMediaQuery from "@mui/material/useMediaQuery";

import "../App.css";
import { ThemeProvider } from "@emotion/react";
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
  const { newmessage, Send } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <IconButton onClick={handleClickOpen}>
        <ModeEditIcon />
      </IconButton>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box sx={{ width: "200px", height: "150px" }}>
          <Box sx={{ textAlign: "center", p: "8px" }}>
            <Typography variant="h7">編輯留言</Typography>
          </Box>
          <Box sx={{ width: "80%", m: "8px auto" }}>
            <TextField placeholder={newmessage} size="small" />
          </Box>
          <Box display="flex" sx={{ m: 2 }}>
            <ThemeProvider theme={theme}>
              <Button
                color="Button"
                variant="contained"
                sx={{ ml: "16px" }}
                onClick={Send}
              >
                <Typography variant="h7" color="White">
                  送出
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
