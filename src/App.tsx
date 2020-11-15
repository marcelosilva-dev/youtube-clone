import React, { useState } from "react";
import Home from "./components/Home";
import PageVideo from "./components/PageVideo";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const avatar =
  "https://instagram.fpfb5-1.fna.fbcdn.net/v/t51.2885-19/s150x150/66395784_439797356611676_4373976148577615872_n.jpg?_nc_ht=instagram.fpfb5-1.fna.fbcdn.net&_nc_ohc=1nzpcPeGo-8AX8aTNic&oh=e352fca2043c5a3c743b512ef4535bf7&oe=5FC66DF1";

interface HeaderProps {
  className?: string;
}

function App() {
  const [open, setOpen] = useState(true);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/video" component={PageVideo} />
      </Switch>
    </Router>
  );
}

export default App;
