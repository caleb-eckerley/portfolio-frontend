import "../public/style/contact-me.scss";
import "../public/style/glassy.scss";

function ContactLink({ linkAddress, label, icon }) {
  return (
    <a href={linkAddress} className="contact-me-link">
      <div className="contact-me-container glassy">
        <img href={icon} />
        <div className="contact-me-text">{label}</div>
      </div>
    </a>
  );
}

export default function ContactMe() {
  return (
    <section id="contact-me-section">
      <ContactLink linkAddress={"www.google.com"} label={"Email Me"} />
      <ContactLink linkAddress={"www.google.com"} label={"You Can Book Me"} />
    </section>
  );
}
