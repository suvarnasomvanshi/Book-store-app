import React from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

const Header = () => {
  return (
    <div>
      <AppBar position="sticky">
        <Toolbar>

          <Typography>
            <AutoStoriesIcon />
          </Typography>

          <Tabs textColor="inherit" indicatorColor="secondary" value={2}>
            <Tab label ="add product" />
            <Tab  label ="About us" />
          </Tabs>

        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
