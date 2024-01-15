import Chip from "@mui/material/Chip";
import DataCard from "/src/components/DataCard.jsx";

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

    projectCards.push(<DataCard title={project.title} dateAdded={project.start_date} chips={chipList} key={project._id} content={project.description} />);
  }
  return <>{projectCards}</>;
}
