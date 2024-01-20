import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { v4 as uuidv4 } from "uuid";

import "/src/style/DataCard.scss";

function getChipExpandButtonValue(chips, isExpanded, handleOnClick) {
  if (chips.length > 0) {
    return (
      <Button variant='text' size='small' onClick={handleOnClick} style={{ height: "fit-content", width: "fit-content", padding: 0 }}>
        {isExpanded ? "Less" : "More"}
      </Button>
    );
  } else {
    return null;
  }
}

function getLinkButton(link) {
  if (link) {
    return (
      <Button
        size='small'
        disabled={true}
        style={{
          float: "left",
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
    );
  } else {
    return null;
  }
}

function getExpandButton(onClick, expanded) {
  return (
    <Button
      variant='text'
      size='small'
      style={{
        float: "right",
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
      onClick={onClick}
    >
      {expanded ? "Collapse" : "Expand"}
    </Button>
  );
}

/**
 *
 * @param {String} content
 * @returns [Object]
 */
function parseList(list) {
  if (!list || !list.length) return null;
  let bulletList = [];
  for (var bullet of list) {
    bulletList.push(<li key={uuidv4()}>{bullet}</li>);
  }
  return <ul>{bulletList}</ul>;
}

function parseContent(content) {
  if (!content) return null;
  return <p style={{ margin: 0 }}>{content}</p>;
}

export default function DataCard({ header, chips = [], content = "", link = "", end_date = null, contentList = [] }) {
  const [expanded, setExpanded] = React.useState(false);
  const [chipExpanded, setChipExpanded] = React.useState(false);
  const [showExpandedButton, setShowExpandedButton] = React.useState(true);
  const ref = React.useRef(null);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleChipExpanded = () => {
    setChipExpanded(!chipExpanded);
  };
  React.useEffect(() => {
    if (!expanded && ref.current.scrollHeight != ref.current.clientHeight) {
      setShowExpandedButton(true);
    }
    if (!expanded && ref.current.scrollHeight == ref.current.clientHeight) {
      setShowExpandedButton(false);
    }
  }, [expanded]);

  const listItems = parseList(contentList);
  const contentParagraph = parseContent(content);
  const chipExpandButton = getChipExpandButtonValue(chips, chipExpanded, handleChipExpanded);
  const linkButton = getLinkButton(link);
  const expandButton = getExpandButton(handleExpandClick, expanded);

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
        {header}
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
        <div className={expanded ? "" : "clamp"} ref={ref}>
          {contentParagraph}
          {listItems}
        </div>
      </div>
      <div style={{ width: "100%" }}>
        {linkButton}
        {showExpandedButton && expandButton}
      </div>
    </Card>
  );
}
