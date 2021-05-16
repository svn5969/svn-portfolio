import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGithub, faLinkedin,faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
   
    const Address = [
        {name: "Faridpur" , link: "//google.com/map"},
        {name: "Dhaka,Bangladesh" , link: "//google.com/map"},
       
    ]
    const links = [
        {name: "About Me" , link: "/about"},
        {name: "Skills" , link: "/skills"},
        {name: "Project" , link: "/project"},
        {name: "Contact" , link: "/contact"},
        {name: "Blog" , link: "/blog"}
    ]
    const services = [
        {name: "Javascript"},
        {name: "React.js" },
        {name: "Node.js"},
        {name: "Express.Js"},
        {name: "MongoDB"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <div className="col-md-3 mb-5">
                        <h3 className="text-danger font-weight-bold ">Sourav Das Shovon</h3>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis totam vero corrupti perspiciatis animi sequi iste tempora, voluptas adipisci necessitatibus!
                          </div>
                    <FooterCol key={2} menuTitle="Expertise" className="text-white" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Links" menuItems={links}/>
                    <FooterCol key={4} menuTitle="Address" menuItems={Address}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="https://www.facebook.com/souravdas.shovon/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="https://www.instagram.com/sourav_shovon/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            <li className="list-inline-item"><a href="https://www.linkedin.com/in/sourav-das-shovon-1b124813a/ " target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faLinkedin} /></a></li>
                            <li className="list-inline-item"><a href="https://github.com/svn5969" target="_blank" rel="noreferrer"><FontAwesomeIcon className="icon" icon={faGithub} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+8801716731852</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} || All Rights Reserved by <span style={{color: "red", fontWeight:"bold"}}>SvN</span></p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;