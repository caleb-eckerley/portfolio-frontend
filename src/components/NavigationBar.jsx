import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function generateNavItems(navList) {
  let navigationList = [];
  for (let idx = 0; idx < navList.length; idx++) {
    let navObj = navList[idx];

    navigationList.push(<Tab label={navObj.text} key={idx} value={idx} sx={{ color: "white" }} />);
  }
  return navigationList;
}

export default function NavigationBar({ value, click, navList }) {
  const navMembers = generateNavItems(navList);

  return (
    <div>
      <hr style={{ marginBottom: "0px", marginTop: "0px" }} />
      <Tabs value={value} onChange={click} variant='fullWidth' centered textColor='secondary' indicatorColor='secondary'>
        {navMembers}
      </Tabs>
      <hr style={{ marginBottom: "0px", marginTop: "0px" }} />
    </div>
  );
}
