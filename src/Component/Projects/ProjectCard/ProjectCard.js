import detailsPic from '../../../images/social/details.png';
import githubIcon from '../../../images/social/github.png';
import linkIcon from '../../../images/social/foreign.png';
import React, { useState } from 'react';
import './ProjectCard.css';
import Carousel from 'react-bootstrap/Carousel';
// import Aos from "aos";
// import "aos/dist/aos.css";

const ProjectCard = ({ projects: { name, image, description, live, github } }) => {
    // useEffect(() => {
    //     Aos.init({ duration: 1000 });
    // }, [])
    const [details, setDetails]  = useState(false)
    console.log(description);
    return (
        <div className="col-md-4 card-area" data-aos="zoom-in">
            <div className="box p-3" >
                <div className="projectImage-area py-3">

                    <Carousel controls={false} indicators interval={2000} pause={false}>
                        <Carousel.Item>
                            <img className="mx-auto d-block custom-img" style={{ height: '150px', width: "90%", borderRadius: '10px' }} src={image} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block custom-img" style={{ height: '150px', width: "90%", borderRadius: '10px' }} src={image} alt="" />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="mx-auto d-block custom-img" style={{ height: '150px', width: "90%", borderRadius: '10px' }} src={image} alt="" />
                        </Carousel.Item>
                    </Carousel>
                </div>
                <h6 className="my-3 font-weight-bold text-uppercase">{name}</h6>
                
                <p>{description}</p>
                <div className="mx-auto">
                    <div className="mb-3 linkIcon">
                        <a className="mr-2 font-weight-bold btn btn-outline-danger btn-sm" href={live} target="_blank" rel="noreferrer"><img src={linkIcon} className="mr-2" alt="" />Preview</a>
                        <a className="mr-2 font-weight-bold btn btn-outline-info btn-sm" href={github} target="_blank" rel="noreferrer"><img className="mr-2" src={githubIcon} alt="" />Github</a>
                        <button onClick={()=> setDetails(!details)} className="btn btn-sm btn-outline-warning font-weight-bold"><img className="mr-2" src={detailsPic} alt=""/>Details</button>
                    </div>
                </div>
                {
                    details ? <h5 className="font-weight-bold text-center">Details Coming Soon</h5> : null
                }
            </div>
        </div>
    );
};

export default ProjectCard;