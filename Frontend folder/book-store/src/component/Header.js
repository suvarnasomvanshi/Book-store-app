import React, { useState } from "react";
import { AppBar, Link, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import { NavLink } from "react-router-dom";


const Header = () => {


  const [value, setValue] = useState();


  return (
    <div>
      <AppBar sx={{ backgroundColor: "burlywood" }} position="sticky">
        <Toolbar>
        <NavLink to="/" style={{color:"white"}}>
          <Typography>
            <AutoStoriesIcon />
          </Typography>
          </NavLink>

          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab label="add product" LinkComponent={NavLink} to="/add" />
            <Tab label="About us"  LinkComponent={NavLink} to="/about" />
            <Tab label="Books" LinkComponent={NavLink}  to="/books"  />

          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
