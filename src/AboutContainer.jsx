import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";

// import "/src/style/AboutContainer.scss";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { SvgIcon } from "@mui/material";

export default function AboutContainer({ data }) {
  const chipList = data.chips.map((chip) => {
    return (
      <Chip
        label={chip.text}
        size='small'
        style={{
          background: chip.color,
          paddingTop: "0px",
          width: "fit-content"
        }}
        key={chip.key}
      />
    );
  });
  return (
    <section>
      <h1 style={{ margin: "0px" }}>Caleb Eckerley</h1>
      <p style={{ margin: "0px", fontSize: "small", fontStyle: "italic" }}>Software Developer</p>
      <hr style={{ marginBottom: "1rem" }} />
      <img
        src='/caleb-eckerley-square.JPG'
        style={{
          height: "8rem",
          float: "left",
          marginRight: "1rem",
          marginBottom: "1rem"
        }}
      />
      <p
        style={{
          textAlign: "justify",
          margin: 0
        }}
      >
        {data.aboutMeText}
      </p>

      <div
        style={{
          marginTop: "1rem",
          height: "fit-content",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "8px",
          rowGap: "8px"
        }}
      >
        {chipList}
      </div>
    </section>
  );
}
