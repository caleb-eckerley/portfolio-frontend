import "/src/style/header.scss";
import IconLink from "/src/components/IconLink.jsx";

function HeaderButton({ label }) {
  return (
    <a className='header-link'>
      <div className='header-button'>{label}</div>
    </a>
  );
}

function HomeButton({ iconClass }) {
  return (
    <a className='header-link'>
      <div className='header-button'>
        <i className={iconClass}></i>
      </div>
    </a>
  );
}

export default function Header() {
  return (
    <nav className='glassy'>
      <div className='nav-left'>
        <HomeButton iconClass={"bi-house-fill"} />
        <HeaderButton label={"Personal"} />
        <HeaderButton label={"Projects"} />
      </div>
      <div>
        <IconLink src='/public/LI-In-Bug.png' />
      </div>
    </nav>
  );
}
