import "../public/style/header.scss";
import "../public/style/header.scss";

function HeaderButton({ label }) {
  return (
    <a className="header-link">
      <div className="header-button">{label}</div>
    </a>
  );
}

export default function Header() {
  return (
    <header className="glassy">
      {/* <HeaderButton>
        <i className="bi-house-fill" />
      </HeaderButton> */}
      <HeaderButton label={"Personal"} />
      <HeaderButton label={"Projects"} />
    </header>
  );
}
