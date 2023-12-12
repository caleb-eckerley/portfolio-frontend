function generateNavItems(navList) {
  let navigationList = [];
  for (let idx = 0; idx < navList.length; idx++) {
    let navObj = navList[idx];

    navigationList.push(
      <li style={{ position: "relative", boxSizing: "border-box" }} key={idx}>
        <a href={navObj.href} style={{ background: "none", cursor: "pointer", textDecoration: "none", color: "white", padding: "0.5rem" }}>
          {navObj.text}
        </a>
      </li>
    );
  }
  return navigationList;
}

export default function NavigationBar({ navList }) {
  const navMembers = generateNavItems(navList);

  return (
    <div>
      <hr style={{ marginBottom: "0px", marginTop: "0px" }} />
      <nav>
        <ul
          style={{
            height: "100%",
            width: "100%",
            listStyle: "none",
            padding: 0,
            margin: 0,
            display: "flex",
            gap: "1rem",
            justifyContent: "space-around",
            alignItems: "center",
            boxSizing: "border-box"
          }}
        >
          {navMembers}
        </ul>
      </nav>
      <hr style={{ marginBottom: "0px", marginTop: "0px" }} />
    </div>
  );
}
