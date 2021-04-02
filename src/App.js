import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/index";
import Footer from "./components/Footer/index";
import Wrapper from "./components/Wrapper/index";

function App() {
  return (
    <Router basename={`${process.env.PUBLIC_URL}/`}>
      <div>
        <Navbar />
        <Wrapper>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
