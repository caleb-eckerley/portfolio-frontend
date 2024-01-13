import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

export default function SkillsList(props) {
  if (props.isHidden) {
    return null;
  }

  const chipStyleRule = {
    Software: { background: "green", color: "white" },
    "Data Science": { background: "blue", color: "white" },
    DevOps: { background: "red", color: "white" },
    General: { background: "grey", color: "white" }
  };

  let categories = { Software: [], "Data Science": [], DevOps: [], General: [] };

  props.data.forEach((chip) => {
    categories[chip.type].push(
      <Chip
        key={chip._id}
        label={chip.name}
        size='small'
        style={{
          paddingTop: 0,
          width: "fit-content"
        }}
        sx={chipStyleRule[chip.type]}
      />
    );
  });

  const skillList = Object.entries(categories).map(([key, value]) => {
    return (
      <div key={key} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
        <Divider orientation='horizontal' variant='middle'>
          {`${key} Skills`}
        </Divider>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>{value}</div>
      </div>
    );
  });

  return <>{skillList}</>;
}
