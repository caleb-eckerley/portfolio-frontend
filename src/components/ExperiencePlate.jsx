import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

import "/src/style/ExperiencePlate.scss";

function formatDate(date) {
  const formattedDate = new Date(date);
  let month = parseInt(formattedDate.getMonth()) + 1;
  if (month < 10) {
    month = "0" + month.toString();
  }
  return `${month}/${formattedDate.getFullYear()}`;
}

function handleContentList(content) {
  if (!content || content.length == 0) {
    return null;
  }
  var contentList = [];
  for (var idx = 0; idx < content.length; idx++) {
    contentList.push(<li key={idx}>{content[idx]}</li>);
  }
  return contentList;
}

export default function ExperiencePlate({ jobTitleProp, employerProp, jobStartProp, jobEndProp, contentListProp, isHidden }) {
  if (isHidden) {
    return null;
  }
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const startDate = formatDate(jobStartProp);
  const endDate = formatDate(jobEndProp);
  const contentListItems = handleContentList(contentListProp);
  var contentList = "";
  if (contentListItems) {
    contentList = <ul style={{ margin: "0px", paddingLeft: "1.25rem" }}>{contentListItems}</ul>;
  }

  return (
    <Card
      variant='solid'
      style={{
        marginLeft: "1rem",
        marginRight: "1rem",
        padding: "0.5rem",
        minHeight: "225px"
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", height: "fit-content" }}>
        <p style={{ margin: "0px", fontWeight: "600", fontSize: "large" }}>{jobTitleProp}</p>
        <p style={{ margin: "0px", fontSize: "small", fontStyle: "italic" }}>
          {startDate} - {endDate}
        </p>
      </div>
      <p style={{ margin: "0px", fontSize: "small", fontWeight: "600" }}>{employerProp}</p>
      <hr style={{ marginTop: "0.25rem", marginBottom: "0.5rem" }} />
      <div className={expanded ? "" : "clamp"}>{contentList}</div>
      <div style={{ float: "right" }}>
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
