export default function NavigationBar() {
  return (
    <nav>
      <ul
        style={{
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
        <li style={{ position: "relative", boxSizing: "border-box" }}>
          <a href='' style={{ background: "none", cursor: "pointer", textDecoration: "none", color: "white", padding: "0.5rem" }}>
            Resume
          </a>
        </li>
        <li>
          <a href='' style={{ background: "none", cursor: "pointer", textDecoration: "none", color: "white" }}>
            Projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
