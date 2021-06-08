/* eslint-disable jsx-a11y/anchor-has-content */
// import Particles from 'react-particles-js';
import './About.css';
// import EducationCard from './Education/EducationCard';
// import EducationData from './Education/EducationData';
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import image from '../../../src/images/About-img.png'


const About = () => {
    useEffect(() => {
        Aos.init({ duration: 1000
           
         });
    }, [])
    return (
        <div className="about-area pt-3" id="about">

            <div className="container mx-auto">
                <div className="about-details py-5">
                <div class="section-heading-1">
							
							<h1 data-aos="fade-right" data-aos-delay="200">About Me</h1>
						</div>
                    <div className="row mt-5">
                        <div className="col-md-4 text-white" style={{ width: '100%', margin: "0 auto" }}>
                            <h4 className="text-center font-weight-bold green-color text-uppercase">
                                <div className="row">
                                    <div className="col-md-3 black-color">
                                        Myself
                                    </div>
                                    <div className="col-md-9 black-color">
                                        <Typewriter
                                            options={{
                                                strings: ["Sourav Das Shovon", "Shovon"],
                                                autoStart: true,
                                                loop: true,
                                                delay: 50
                                            }}
                                        />
                                    </div>
                                </div>
                            </h4>
                            {/* <div data-aos="zoom-in">
                                <p className="mt-5 text-align-justify" style={{ textAlign: 'justify' }}>

                                    <Typewriter
                                        options={{
                                            strings: ["I'm a computer science student. I have been working on web development since 2019. As a full-stack developer, I am responsible for web design, front-end development, backend development.I am enough confident to make user-friendly, responsive, server-side web pages. I am strongly focused on my work and well dedicated to the proper utilization of time to complete any project. Furthermore, I am learning, exploring new things, ready to accept new challenges, and always making myself up to date."],
                                            autoStart: true,
                                            loop: false,
                                            delay: 50,
                                            pauseFor: (90000000000000)
                                        }}
                                    />
                                </p>
                            </div> */}
                        </div>
                        {/* <div className="col-md-4 pb-5">
                            <h4 className="text-center font-weight-bold  green-color text-uppercase">Basic Information</h4>
                            <div data-aos="zoom-in" className="mt-5 basic-info">
                                <table className="">
                                    <tr className="py-2">
                                        <td className="  py-2">Nick name : </td>
                                        <td>Shovon</td>
                                    </tr>
                                    <tr>
                                        <td className="pr-4 py-2">Profession : </td>
                                        <td>Web Developer</td>
                                    </tr>
                                    <tr>
                                        <td className="  py-2">Website :</td>
                                        <td>svn.com</td>
                                    </tr>
                                    <tr>
                                        <td className="  py-2">Nationality : </td>
                                        <td>Bangladeshi</td>
                                    </tr>
                                    <tr >
                                        <td className="  py-2">Address : </td>
                                        <td>Faridpur,Dhaka,Bangladesh</td>
                                    </tr>
                                    <tr>
                                        <td className="  py-2">Email : </td>
                                        <td>sourav.svn.10@gmail.com</td>
                                    </tr>
                                    <tr >
                                        <td className="  py-2">Phone :</td>
                                        <td>+8801716731852</td>
                                    </tr>
                                </table>

                            </div>
                        </div> */}
                        {/* <div  className="col-md-4">
                            <h4 className="text-center font-weight-bold green-color text-uppercase">Education Qualification</h4>
                            <div data-aos="zoom-in" className="mt-5">

                                {
                                    EducationData.map(education => <EducationCard education={education}></EducationCard>)
                                }

                            </div>
                        </div> */}
<div className="row d-flex align-items-center">
                <div className="col-md-8 lg-8 sm-12">
                    {/* <h3 data-aos="fade-left" style={{paddingBottom:'20px'}}>Hi, I'm <span className='name'>Avi Mistry</span></h3> */}
                    <p data-aos="fade-right" style={{ color: "black" }}>I'm a designer & developer with a passion for web design. I enjoy developing simple, clean and slick websites that provide real value to the end user. Delivering work within time and budget which meets client’s requirements is my motto . <br/>I am a very fast learner. I Always thrive on knowledge about next-generation technologies. And keep up the technology race.<br/>During my journey through the evolution of the technology, I picked my "Must Have" Technologies to work with that includes:<span style={{fontWeight:"600"}}> HTML5, CSS3, Bootstrap, javaScript, Es6, React Js, Node.js, Express Js, mySQL, mongodb & many more.</span> By Profession a Full Stack Web Developer.</p>
                 
                </div>
                <div data-aos="fade-left" className="col-md-4 lg-4 sm-12 text-center">
                    <img src={image}alt=""/>
                </div>
                <div className="d-flex">
                   
                    <div data-aos="fade-up-right" className="col-md-4 sm-6 info" >
                        <p style={{ color: "black" }}>Email:</p>
                        <h6 style={{ color: "black" }}>sourav.svn.10@gmail.com </h6>
                    </div>
                    <div data-aos="fade-up-left" className="col-md-3 sm-6 info" >
                        <p style={{ color: "black" }}>Phone:</p>
                        <h6 style={{ color: "black" }}>+8801716731852</h6>
                    </div>
                    <div data-aos="fade-up-left" className="col-md-3 sm-6 info" >
                        <p style={{ color: "black" }}>Form:</p>
                        <h6 style={{ color: "black" }}>Faridpur,Dhaka,Bangladesh. </h6>
                    </div>
                </div>
               
            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;