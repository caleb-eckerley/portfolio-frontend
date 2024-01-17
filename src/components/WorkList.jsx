import Chip from "@mui/material/Chip";
import DataCard from "/src/components/DataCard.jsx";

function getHeader(title, employer, startDate, endDate) {
  const header = (
    <>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", height: "fit-content" }}>
        <p style={{ margin: "0px", fontWeight: "600", fontSize: "large" }}>{title}</p>
        <p style={{ margin: "0px", fontSize: "small", fontStyle: "italic" }}>
          {startDate} - {endDate}
        </p>
      </div>
      <p style={{ margin: "0px", fontSize: "small", fontWeight: "600" }}>{employer}</p>
    </>
  );
  return header;
}

export default function WorkList(props) {
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
  for (let work of props.projectData) {
    const chipList = work.skills.map((chip) => {
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
    var header = getHeader("NetSuite Developer", "Solution Source", "September 1, 2022", "July 31, 2023");
    projectCards.push(<DataCard header={header} chips={chipList} key={work._id} content={work.description} />);
  }
  return <>{projectCards}</>;
}
