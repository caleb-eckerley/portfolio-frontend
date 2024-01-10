import Chip from "@mui/material/Chip";

export default function SkillsList(props) {
  if (props.isHidden) {
    return null;
  }

  const chips = props.data.map((chip) => {
    return (
      <Chip
        key={chip._id}
        label={chip.name}
        size='small'
        style={{
          background: "lightblue",
          paddingTop: 0,
          width: "fit-content"
        }}
      />
    );
  });

  return <>{chips}</>;
}
