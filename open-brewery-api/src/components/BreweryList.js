import React from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { getData } from '../actions';

import Brewery from './Brewery';


const BreweryList = props => {
    return (
        <>
      <h1>OpenBrewery App</h1>
      <button onClick={props.getData}>
        {props.isLoading ? (
          <Loader type="tailspin" color="#00BFFF" height="15" width="100" />
        ) : (
          'Get Brewery Data'
        )}
      </button>
      {props.brewery &&
        props.brewery.map(bar => <Brewery key={bar.name} brewery={bar} />)}
        </>
    );
};

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        brewery: state.brewery
    };
}
export default connect (
    mapStateToProps, { getData }
)(BreweryList);