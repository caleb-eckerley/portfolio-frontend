import "../public/style/about-me.scss";
import "../public/style/glassy.scss";

function TextContainer({ aboutMeText }) {
  return (
    <div id="about-me-text-container">
      <p id="about-me-text">{aboutMeText}</p>
    </div>
  );
}

function ChipContainer({ chipArray }) {
  const chipList = chipArray.map((chip) => (
    <Chip chipClassName={chip.class} chipText={chip.text} key={chip.key} />
  ));
  return <div className="chip-container">{chipList}</div>;
}

//TODO
function Chip({ chipClassName, chipText }) {
  let chipClass = "chip ";
  chipClass += chipClassName == "gold" ? "gold-chip" : "blue-chip";
  return <div className={chipClass}>{chipText}</div>;
}

export default function AboutMe({ aboutMeText, chipArray }) {
  return (
    <section id="about-me-section" className="glassy">
      <div id="about-me-container">
        <img id="about-me-img" src="../public/img/caleb-eckerley-square.jpg" />
        <TextContainer aboutMeText={aboutMeText} />
      </div>
      <ChipContainer chipArray={chipArray} />
    </section>
  );
}
