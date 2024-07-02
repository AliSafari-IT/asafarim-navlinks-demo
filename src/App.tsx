import React from "react";
import { Route, Routes } from "react-router-dom";

import NavLinks from "asafarim-navlinks";
import { navItems } from "./data";
import "./App.css";

const Home: React.FC = () => <h2>Home Page</h2>;
const About: React.FC = () => <h2>About Page</h2>;
const Services: React.FC = () => <h2>Services Page</h2>;
const Products: React.FC = () => <h2>Products Page</h2>;
const Contact: React.FC = () => <h2>Contact Page</h2>;
const Help: React.FC = () => <h2>Help Page</h2>;
const NotFound: React.FC = () => <div>
  <h2>Page Not Found</h2>
  <p>The page you are looking for does not exist.</p>
  <p>Please check the URL and try again.</p>

  Go to <a href="/">Home</a>
</div>;

const App: React.FC = () => {
  return (
    <div className="App">
      <nav className="navContainer">
        <div className="navLeftAligned">
          <NavLinks links={navItems.leftAlignedNavItems} />
        </div>
        <div className="navRightAligned">
          <NavLinks
            links={navItems.rightAlignedNavItems}
            isRightAligned={true}
          />
        </div>
      </nav>
      <main className="mainContainer">
        <h1>Navigation Links Demo</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mainpage" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
