import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

import Card1 from "./Components/Card1.jsx";
import Card2 from "./Components/Card2.jsx";
import Card3 from "./Components/Card3.jsx";
import Card4 from "./Components/Card4.jsx";
import Card5 from "./Components/Card5.jsx";

export default function App() {
  return (
    <Router>
      <div className="mt-4 text-center container px-5 mx-auto grid grid-cols-10 divide-x divide-gray-500">
        <NavLink to="/card1" className="mr-2 pt-2 px-4 ">
          Card 1
        </NavLink>
        <NavLink to="/card2" className=" mr-2 pt-2 px-4 ">
          Card 2
        </NavLink>
        <NavLink to="/card3" className=" mr-2 pt-2 px-4 ">
          Card 3
        </NavLink>
        <NavLink to="/card4" className=" mr-2 pt-2 px-4 ">
          Card 4
        </NavLink>
        <NavLink to="/card5" className=" mr-2 pt-2 px-4 ">
          Card 5
        </NavLink>
      </div>
      <hr />

      <Routes>
        <Route path="/card1" element={<Card1 />} />
        <Route path="/card2" element={<Card2 />} />
        <Route path="/card3" element={<Card3 />} />
        <Route path="/card4" element={<Card4 />} />
        <Route path="/card5" element={<Card5 />} />
      </Routes>
    </Router>
  );
}
