import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Blog from './Component/Blog/Blog';
import Contact from './Component/Contact/Contact';
import DashBoard from './Component/DashBoard/DashBoard';
import Home from './Component/Home/Home';
import Projects from './Component/Projects/Projects';
import Services from './Component/Services/Services';
import RiseLoader from "react-spinners/RiseLoader";
import PropagateLoader from "react-spinners/PropagateLoader";
import './App.css';
import About from './Component/About/About';
import Skills from './Component/Skills/Skills';
import Resume from './Resume/Resume';
const App = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 8000);
  }, [])
  return (
    <div>
      {
        loading ?
          <div className="loading">
            <RiseLoader

              className="App"
              size={15}
              color={"red"}
              loading={loading}

            />
            <div className="my-4">
              <h5 className="font-weight-bold text-uppercase " style={{ color: "red" }}>Welcome To Shovon's Portfolio</h5>
            </div>
            <PropagateLoader
              className="App"
              size={15}
              color={"red"}
              loading={loading}

            />
          </div>
          :
          <Router>
            <Switch>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/resume">
              <Resume></Resume>
              </Route>
              <Route path="/contact">
                <Contact></Contact>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route path="/skills">
                <Skills></Skills>
              </Route>
              <Route path="/projects">
                <Projects></Projects>
              </Route>
              <Route path="/blog">
                <Blog></Blog>
              </Route>
              <Route path="/dashboard">
                <DashBoard></DashBoard>
              </Route>
              <Route path="/">
                <Home></Home>
              </Route>
            </Switch>
          </Router>
      }
    </div>
  );
};

export default App;