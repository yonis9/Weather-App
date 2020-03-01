import React  from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'

import { getSearchOutput, setLocation } from '../../redux/home/home-actions'


import './SearchField.css';

const SearchField = ({ getSearchOutput, searchOutputs, setLocation }) => {



    return (
        <div id='search-con'>
            
        <Autocomplete
        id="combo-box-demo"
        options={searchOutputs}
        getOptionLabel={option => option.LocalizedName +', ' +option.Country.LocalizedName}
        onChange={(event, value) => setLocation(value)}
        style={{ width: '50%' }}
        renderInput={params => (
            <TextField {...params} label="Choose your location" variant="outlined" fullWidth onChange={getSearchOutput}/>
        )}
        />


        </div>
    )
}

const mapStateToProps = ({ home }) => ({
    searchOutputs: home.searchOutputs
})

const mapDispatchToProps = dispatch => ({
    getSearchOutput: (e) => dispatch(getSearchOutput(e.target.value)),
    setLocation: (location) => dispatch(setLocation(location))
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchField);