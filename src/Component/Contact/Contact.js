import React, { useEffect } from 'react';
import './Contact.css';
import contact from '../../images/contact-img.jpg';
import Aos from "aos";
import "aos/dist/aos.css";

const Contact = () => {
    useEffect(() => {
        Aos.init({ duration: 1000
         });
    }, [])
    return (
        <section className="contact pt-3" id="contact">
           
            <div className="container mx-auto pb-5 mt-4">
            <h2 className="text-center py-4 font-weight-bold"><span style={{color:'black'}}>CONTACT NOW</span></h2>
                <div className="row">
                    <div className="col-md-6 mb-5 text-center" data-aos="zoom-in">
                        <img src={contact} alt="" style={{width: '50%',border: "2px solid yellow", borderRadius:"15px"}}/>
                    </div>
                    <div className="col-md-6" data-aos="zoom-in">
                        
                        <div className="form-area px-4 pt-5">
                            <form action="sourav.svn.10@gmail.com" method="post" enctype="text/plain">
                                <div className="form-group  py-1">
                                    <input type="text" className="form-control " placeholder="Name" />
                                </div>
                                <div className="form-group  py-1">
                                    <input type="text" className="form-control" placeholder="Email" />
                                </div>
                                <div className="form-group  py-1">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="form-group  py-1">
                                    <input type="text" className="form-control" placeholder="Phone" />
                                </div>
                                <div className="form-group  py-1">
                                    <textarea type="text" className="message form-control" rows="5" placeholder="Message"></textarea>
                                </div>
                                <div className="form-group  py-1">
                                    <input type="submit" value="Send" className="btn font-weight-bold btn-outline-success text-white px-5" />
                                </div>
                            </form>
                        </div>
                    </div>
                    
                </div>

            </div>
            {/* <p className="text-center footer py-2 mt-5 text-white">Copyright {(new Date()).getFullYear()} Reserved by KB UTSHO</p> */}


        </section>
    );
};
export default Contact;