import * as React from "react";

//Font imports
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";

//Component imports
import AboutContainer from "/src/AboutContainer.jsx";
import NavigationBar from "/src/components/NavigationBar.jsx";
import ExperiencePlate from "/src/components/ExperiencePlate.jsx";

const getChildDate = (childData) => {
  return childData;
};

export default function App({ testData }) {
  const [tabState, setTabState] = React.useState(0);

  const handleSetTabState = (event, state) => {
    setTabState(state);
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
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
      <div style={{ paddingTop: "1rem" }}>
        {/* TODO: Replace with container of generated Experience Plates. Attach hidden prop to that container. */}
        <ExperiencePlate
          jobTitleProp={"NetSuite Developer"}
          employerProp={"Solution Source"}
          jobStartProp={"September 1, 2022"}
          jobEndProp={"July 31, 2023"}
          contentListProp={Array(15).fill("hello", 0, 15)}
          hidden={tabState ? true : false}
        />
      </div>
    </div>
  );
}
