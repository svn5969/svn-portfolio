import React from 'react';
import Particles from 'react-particles-js';
import Resume from '../../Resume/Resume';
import About from '../About/About';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';
import NavBar from '../Shared/NavBar/NavBar';
import Skills from '../Skills/Skills';
import Header from './Header/Header';
import './Home.css';


const Home = () => {
    return (
        <div>
            <div className="home" id="home">
                <Particles
                    params={{
                        particles: {
                            number: {
                                value: 50,
                                density: {
                                    enable: true,
                                    value_area: 700
                                }
                            },
                            shape: {
                                type: "star",
                                stroke: {
                                    width: 6,
                                    color: "#f9ab00"
                                }
                            }
                        }
                    }}

                ></Particles>
                <NavBar></NavBar>
                <Header></Header>
                <About></About>
                <Skills></Skills>
                <Services></Services>
                <Projects></Projects>
                <Blog></Blog>
                <Resume></Resume>
                <Contact></Contact>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default Home;