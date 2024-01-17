import * as React from "react";

//Font imports
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

//Component imports
import AboutContainer from "/src/components/AboutContainer.jsx";
import NavigationBar from "/src/components/NavigationBar.jsx";
// import ExperiencePlate from "/src/components/ExperiencePlate.jsx";
import WorkList from "/src/components/WorkList.jsx";
import ProjectList from "/src/components/ProjectList.jsx";
import SkillsList from "/src/components/SkillsList.jsx";

import { getProjects, getSkills } from "/src/api/serverCalls.js";

export default function App({ testData }) {
  const [tabState, setTabState] = React.useState(0);
  const [projectData, setProjectData] = React.useState([]);
  const [skillData, setSkillData] = React.useState([]);

  React.useEffect(() => {
    getProjects(setProjectData);
  }, []);

  React.useEffect(() => {
    getSkills(setSkillData);
  }, []);

  const handleSetTabState = (event, state) => {
    setTabState(state);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        maxWidth: "105ch",
        background: "#404040",
        padding: "1rem",
        height: "fit-content"
      }}
    >
      <AboutContainer data={testData} />
      <NavigationBar
        value={tabState}
        click={handleSetTabState}
        navList={[
          { text: "Work", href: "" },
          { text: "Projects", href: "" },
          { text: "Skills", href: "" }
        ]}
      />
      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {/* TODO: Replace with container of generated Experience Plates. Attach hidden prop to that container. */}
        <WorkList projectData={projectData} isHidden={tabState == 0 ? false : true} />
        <ProjectList projectData={projectData} isHidden={tabState == 1 ? false : true} />
        <SkillsList data={skillData} isHidden={tabState == 2 ? false : true} />
      </div>
    </div>
  );
}
