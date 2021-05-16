import React from 'react';
import './EducationCard.css';

const EducationCard = (props) => {
    const {name, year,institute} = props.education;
    return (
        <div className="educationCard">
            <div className="row">
                <div className="col-12">
                    <div className="d-flex">
                    <h5 className="mr-3 h5-text">{name}</h5> ({year})
                    </div>
                    <h6 className="" style={{fontSize: '15px'}}>{institute}</h6>
                </div>
            </div>
        </div>
    );
};

export default EducationCard;