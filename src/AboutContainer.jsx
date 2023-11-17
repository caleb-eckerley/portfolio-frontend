import AboutMe from "./components/AboutMe.jsx";
import ContactMe from "./components/ContactMe.jsx";

import "/src/style/AboutContainer.scss";

export default function AboutContainer({ data }) {
  return (
    <div className="content">
      <div
        style={{
          marginTop: 120,
        }}
      >
        <AboutMe aboutMeText={data.aboutMeText} chipArray={data.chips} />
      </div>
      <div className="contact-me-wrapper">
        <ContactMe />
      </div>
    </div>
  );
}
