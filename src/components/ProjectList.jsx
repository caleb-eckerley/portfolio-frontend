import Chip from "@mui/material/Chip";
import DataCard from "/src/components/DataCard.jsx";
import { formatDate } from "/src/common/formats";

function getHeader(title, dateAdded) {
  const header = (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", height: "fit-content" }}>
      <p style={{ margin: "0px", fontWeight: "600", fontSize: "large" }}>{title}</p>
      <p style={{ margin: "0px", fontSize: "small", fontStyle: "italic" }}>{dateAdded}</p>
    </div>
  );
  return header;
}

export default function ProjectList(props) {
  if (props.isHidden) {
    return null;
  }

  const chipStyleRule = {
    Software: { background: "green", color: "white" },
    "Data Science": { background: "blue", color: "white" },
    DevOps: { background: "red", color: "white" },
    General: { background: "grey", color: "white" }
  };

  var projectCards = [];
  for (let project of props.projectData) {
    const chipList = project.skills.map((chip) => {
      return (
        <Chip
          label={chip.name}
          size='small'
          style={{
            paddingTop: "0px",
            width: "fit-content"
          }}
          key={chip._id}
          sx={chipStyleRule[chip.type]}
        />
      );
    });
    var header = getHeader(project.title, formatDate(project.start_date));
    projectCards.push(<DataCard header={header} chips={chipList} key={project._id} content={project.description} link={"hi!"} />);
  }
  projectCards.sort((a, b) => b.props.start_date - a.props.start_date);
  return <>{projectCards}</>;
}
