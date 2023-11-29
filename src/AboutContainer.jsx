import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";

import "/src/style/AboutContainer.scss";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";

export default function AboutContainer({ data }) {
  const chipList = data.chips.map((chip) => {
    return (
      <Chip
        label={chip.text}
        style={{
          background: chip.color,
          paddingTop: "0px",
          marginLeft: "8px"
        }}
        key={chip.key}
      />
    );
  });
  return (
    <Container maxWidth='lg'>
      <Paper
        elevation={1}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          padding: "4px",
          "& > :not(style)": {
            m: 1,
            height: "fit-content",
            width: "100%"
          }
        }}
        style={{ backgroundColor: "#e0e1dd" }}
      >
        <Grid
          container
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent={"space-between"}
          style={{
            padding: "8px"
          }}
        >
          <Grid item xs={4}>
            <img
              style={{
                borderRadius: "50%",
                maxHeight: "300px",
                minHeight: "200px",
                margin: "6px",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)"
              }}
              src='/caleb-eckerley-square.JPG'
            />
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={2} sx={{ padding: "8px" }} style={{ backgroundColor: "#e0e1dd" }}>
              <Typography variant='p' sx={{ textIndent: "2ch" }} style={{ margin: "0px", display: "inline" }}>
                {data.aboutMeText}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
        <div
          style={{
            paddingTop: "8px",
            paddingBottom: "8px",
            paddingRight: "8px",
            paddingLeft: "8px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-end",
            flexDirection: "row"
          }}
        >
          {chipList}
        </div>
      </Paper>
    </Container>
  );
}
