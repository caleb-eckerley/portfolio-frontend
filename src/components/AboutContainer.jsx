import { Chip } from "@mui/material";

function getChipList(chips) {
  if (!chips) return [];
  const chipStyleRule = {
    summary: { background: "gold", color: "black" },
    skill: { background: "lightblue", color: "black" }
  };
  return chips.map((chip) => {
    return (
      <Chip
        label={chip.name}
        size='small'
        style={{
          paddingTop: "0px",
          width: "fit-content"
        }}
        sx={chipStyleRule[chip.type]}
        key={chip._id}
      />
    );
  });
}

export default function AboutContainer({ data }) {
  const chipList = getChipList(data.tldr);
  const content = data.content == undefined ? "" : data.content;

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
        {content}
      </p>

      <div
        style={{
          marginTop: "1rem",
          height: "fit-content",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          gap: "0.25rem"
        }}
      >
        {chipList}
      </div>
    </section>
  );
}
