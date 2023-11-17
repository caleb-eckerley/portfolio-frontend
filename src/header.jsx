import "/src/style/header.scss";
import "bootstrap-icons/font/bootstrap-icons.scss";

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
      <a className="header-link">
        <div className="header-button">
          <i className="bi-house-fill" />
        </div>
      </a>
      <HeaderButton label={"Personal"} />
      <HeaderButton label={"Projects"} />
    </header>
  );
}
