import Chip from "@mui/material/Chip";

function getSkills(data) {
  var chipList = [];
  for (let chip of data) {
    chipList.push(
      <Chip
        key={chip.key}
        label={chip.text}
        size='small'
        style={{
          background: chip.color,
          paddingTop: 0,
          width: "fit-content"
        }}
      />
    );
  }
  return chipList;
}

export default function AboutSkills(props) {
  if (props.isHidden) {
    return null;
  }
  const chipList = getSkills(props.data);
  return <div style={{ display: "flex", flexWrap: "wrap", gap: "0.25rem" }}>{chipList}</div>;
}
