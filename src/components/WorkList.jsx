import Chip from "@mui/material/Chip";
import DataCard from "/src/components/DataCard.jsx";
import { formatDate } from "/src/common/formats";

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

  var workCards = [];
  for (let work of props.workData) {
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
    let header = getHeader(work.title, work.employer, formatDate(work.start_date), formatDate(work.end_date));
    workCards.push(<DataCard header={header} chips={chipList} key={work._id} contentList={work.content.split("\n")} end_date={Date.parse(work.end_date)} />);
  }
  workCards.sort((a, b) => b.props.end_date - a.props.end_date);
  return <>{workCards}</>;
}
