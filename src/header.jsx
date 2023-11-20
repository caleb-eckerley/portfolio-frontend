import "/src/style/header.scss";

function HeaderButton({ label }) {
  return (
    <a className="header-link">
      <div className="header-button">{label}</div>
    </a>
  );
}

function HomeButton({ iconClass }) {
  return (
    <a className="header-link">
      <div className="header-button">
        <i className={iconClass}></i>
      </div>
    </a>
  );
}

export default function Header() {
  return (
    <header className="glassy">
      <HomeButton iconClass={"bi-house-fill"} />
      <HeaderButton label={"Personal"} />
      <HeaderButton label={"Projects"} />
    </header>
  );
}
