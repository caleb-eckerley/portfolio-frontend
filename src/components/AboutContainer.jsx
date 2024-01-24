import { Chip } from "@mui/material";

export default function AboutContainer({ data }) {
  if (!data) {
    return <section></section>;
  }
  const chipList = data.tldr.map((chip) => {
    return (
      <Chip
        label={chip.name}
        size='small'
        style={{
          background: "blue",
          paddingTop: "0px",
          width: "fit-content"
        }}
        key={chip._id}
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
        {data.content}
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
