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
import axios from "../Axios.config";

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
  const { newmessage } = props;
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleEdit = async () => {
    console.log(newmessageContent);
    await axios
      .put(
        "api/message",
        {
          id: props.id,
          content: newmessageContent,
        },
        { headers: { token: localStorage.getItem("login_token") } }
      )
      .then((response) => {
        console.log(response);
        props.setU(!props.U);
        setOpen(false);
      });
  };
  const [newmessageContent, setNewMessageContent] = React.useState("");

  const handleTextareaChange = (e) => {
    const newmessageContent = e.target.value;
    setNewMessageContent(newmessageContent);
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
        <Box sx={{ width: "400px", height: "150px" }}>
          <Box sx={{ textAlign: "center", p: "8px" }}>
            <Typography variant="h7">編輯留言</Typography>
          </Box>
          <Box sx={{ width: "90%", m: "8px auto" }}>
            <TextField
              placeholder={newmessage}
              size="small"
              value={newmessageContent}
              onChange={handleTextareaChange}
              fullWidth
            />
          </Box>
          <Box display="flex" sx={{ m: "auto", width: "200px" }}>
            <ThemeProvider theme={theme}>
              <Button
                color="Button"
                variant="contained"
                onClick={handleEdit}
                sx={{ m: "auto", minWidth: "80px" }}
              >
                <Typography variant="h7" color="White">
                  送出
                </Typography>
              </Button>
              <Button
                color="Button"
                variant="outlined"
                onClick={handleClose}
                sx={{ m: "auto", minWidth: "80px" }}
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
