import React from 'react';
import { connect } from 'react-redux';
import CityItem from './CityItem';

export const CitiesList = props => (
    <div className="row mt-3">
       {
           props.cities.map(city => <CityItem key={city.id} {...city} />)
       }
    </div>
);

const mapStateToProps = state => ({
    cities: state.cities
});

export default connect(mapStateToProps)(CitiesList);