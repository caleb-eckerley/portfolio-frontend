// import "/src/style/IconLink.scss";

function handleIconSource(value) {
  if (value.startsWith("bi")) {
    return <i className={value + " Icon"}></i>;
  }
  return <img src={value} className='Icon' />;
}

export default function IconLink({ src, size, text }) {
  const iconStyle = {
    fontSize: size
  };

  const icon = handleIconSource(src);

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
