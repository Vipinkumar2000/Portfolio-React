import { useState } from "react";
import "./App.scss";

import {
  Topbar,
  Intro,
  Portfolio,
  Testimonials,
  Works,
  Contact,
  Menu,
} from "./components/index.js";

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default App;
