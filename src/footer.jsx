import "../public/style/footer.scss";
import "../public/style/glassy.scss";

export default function Footer({ footerText }) {
  return (
    <footer className="glassy">
      <p className="footer-disclaimer">{footerText}</p>
    </footer>
  );
}
