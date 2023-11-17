import "/src/style/header.scss";
import "/src/style/header.scss";

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
      <HeaderButton label={"Personal"} />
      <HeaderButton label={"Projects"} />
    </header>
  );
}
