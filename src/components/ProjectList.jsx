import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";

function ProjectCard({ title, dateAdded, chips, content }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const chipList = chips.map((chip) => {
    return (
      <Chip
        label={chip.name}
        size='small'
        style={{
          background: "lightblue",
          paddingTop: "0px",
          width: "fit-content"
        }}
        key={chip._id}
      />
    );
  });

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
            gap: "8px",
            rowGap: "8px"
          }}
        >
          {chipList}
        </div>
        <p className={expanded ? "" : "clamp"} style={{ margin: 0 }}>
          {content}
        </p>
      </div>
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between" }}>
        {/* Simplify this. Want a link with the same look as the button */}
        <Link>
          <Button
            size='small'
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
            Link
          </Button>
        </Link>
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

export default function ProjectList(props) {
  if (props.isHidden) {
    return null;
  }
  var projectCards = [];
  for (let project of props.projectData) {
    projectCards.push(<ProjectCard title={project.title} dateAdded={project.date} chips={project.chip} key={project._id} content={project.desc} />);
  }
  return <div>{projectCards}</div>;
}

/**
 * Needs:
 *  - Title
 *  - Date added
 *  - Chips (at top)
 *  - Excerpt explanation (not bullets)
 *  - Link code repo or end product
 */
