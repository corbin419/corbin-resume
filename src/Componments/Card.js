import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ComplexGrid(props) {
  const { internTittle, Content, Image } = props;
  return (
    <Paper
      sx={{
        p: 2,
        margin: "2vh auto",
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === "dark" ? "#1A2027" : "#fff",
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <Box sx={{ width: 128, height: 128 }}>{Image}</Box>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography
                gutterBottom
                variant="h7"
                fontWeight={700}
                component="div"
              >
                {internTittle}
              </Typography>
              <Typography
                gutterBottom
                variant="body2"
                fontWeight={500}
                component="div"
                sx={{ p: "5px" }}
              >
                {Content}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
