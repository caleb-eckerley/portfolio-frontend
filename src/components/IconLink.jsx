import "/src/style/IconLink.scss";

function handleIconSource(value) {
  if (value.startsWith("bi")) {
    return <i className={value}></i>;
  }
  return <img href={value} />;
}

export default function IconLink({ iconClass, size, text }) {
  const iconStyle = {
    fontSize: size
  };

  const icon = handleIconSource(iconClass);

  var iconText = null;
  if (text) {
    iconText = <p>{text}</p>;
  }

  return (
    <div className='IconLink' style={iconStyle}>
      {icon}
      {iconText}
    </div>
  );
}
