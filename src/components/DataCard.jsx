import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

export default function DataCard({ title, dateAdded, chips, content }) {
  const [expanded, setExpanded] = React.useState(false);
  const [chipExpanded, setChipExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChipExpanded = () => {
    setChipExpanded(!chipExpanded);
  };
  const chipExpandButton = (
    <Button variant='text' size='small' onClick={handleChipExpanded} style={{ height: "fit-content", width: "fit-content", padding: 0 }}>
      {chipExpanded ? "Less" : "More"}
    </Button>
  );

  return (
    <Card
      variant='solid'
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        padding: "0.5rem",
        minHeight: "225px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", height: "fit-content" }}>
          <p style={{ margin: "0px", fontWeight: "600", fontSize: "large" }}>{title}</p>
          <p style={{ margin: "0px", fontSize: "small", fontStyle: "italic" }}>{dateAdded}</p>
        </div>
        <div
          style={{
            height: "fit-content",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            gap: "0.25rem"
          }}
        >
          {chipExpanded ? chips : chips.slice(0, 3)}
          {chipExpandButton}
        </div>
        <hr style={{ margin: 0, padding: 0, marginTop: "0.25rem" }} />
        <p className={expanded ? "" : "clamp"} style={{ margin: 0 }}>
          {content}
        </p>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        <Button
          size='small'
          disabled={true}
          style={{
            fontSize: "small",
            fontFamily: [
              "system-ui",
              "-apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Oxygen",
              "Ubuntu",
              "Cantarell",
              "Open Sans",
              "Helvetica Neue",
              "sans-serif"
            ],
            fontWeight: "600"
          }}
        >
          Github
        </Button>
        <Button
          variant='text'
          size='small'
          style={{
            fontFamily: [
              "system-ui",
              "-apple-system",
              "BlinkMacSystemFont",
              "Segoe UI",
              "Roboto",
              "Oxygen",
              "Ubuntu",
              "Cantarell",
              "Open Sans",
              "Helvetica Neue",
              "sans-serif"
            ],
            fontWeight: "600"
          }}
          onClick={handleExpandClick}
        >
          {expanded ? "Collapse" : "Expand"}
        </Button>
      </div>
    </Card>
  );
}
