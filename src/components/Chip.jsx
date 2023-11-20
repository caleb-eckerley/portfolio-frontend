import "/src/style/Chip.scss";

/**
 *
 * @param {String} chipColor
 * @param {String} chipText
 * @param {String} chipTextColor
 *
 * @returns {Component}
 */
export function Chip({ chipColor = "white", chipText = "Default Text", chipTextColor = "black" }) {
  const componentStyle = {
    background: chipColor,
    color: chipTextColor
  };
  return (
    <div className='chip' style={componentStyle}>
      {chipText}
    </div>
  );
}

/**
 *
 * @param {Object[]} chipArray
 *
 * @returns {Component}
 */
export function ChipContainer({ chipArray }) {
  const chipList = chipArray.map((chip) => <Chip chipTextColor={"black"} chipColor={chip.color} chipText={chip.text} key={chip.key} />);
  return <div className='chip-container'>{chipList}</div>;
}
