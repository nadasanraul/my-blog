import React from 'react';

const CityItem = ({id, name, country, description, image}) => (
    <div className="col-md-4">
        <div className="card border-primary mb-3">
            <h3 className="card-header">{name}</h3>
            <div className="card-body">
                <h4 className="card-title">{country}</h4>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id={id}/>
                        <label className="custom-control-label" htmlFor={id}>Visited</label>
                    </div>
                </div>
            </div>
            <img src={image} className="city-image" />
        </div>
    </div>
);

export default CityItem;