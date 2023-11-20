import "/src/style/ContactMe.scss";
import "/src/style/glassy.scss";

function ContactLink({ linkAddress, label, icon }) {
  return (
    <a href={linkAddress} className="contact-me-link">
      <div className="contact-me-container glassy">
        <i className={icon + " contact-me-icon"} />
        <div className="contact-me-text">{label}</div>
      </div>
    </a>
  );
}

export default function ContactMe() {
  return (
    <section id="contact-me-section">
      <ContactLink
        linkAddress={"www.google.com"}
        label={"Email Me"}
        icon={"bi-envelope-fill"}
      />
      <ContactLink
        linkAddress={"www.google.com"}
        label={"You Can Book Me"}
        icon={"bi-calendar-event-fill"}
      />
    </section>
  );
}
