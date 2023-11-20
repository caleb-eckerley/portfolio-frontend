import "/src/style/AboutMe.scss";
import { ChipContainer } from "./Chip.jsx";

function TextContainer({ aboutMeText }) {
  return (
    <div id="about-me-text-container">
      <p id="about-me-text">{aboutMeText}</p>
    </div>
  );
}

export default function AboutMe({ aboutMeText, chipArray }) {
  return (
    <section id="about-me-section" className="glassy">
      <div id="about-me-container">
        <img id="about-me-img" src="/caleb-eckerley-square.JPG" />
        <TextContainer aboutMeText={aboutMeText} />
      </div>
      <ChipContainer chipArray={chipArray} />
    </section>
  );
}
