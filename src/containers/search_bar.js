import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'react';
import {fetchWeather} from '../actions/index'

class SearchBar extends Component {
  constructor (props) {
    super(props);

    this.state = { data: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange (e) {

    this.setState({ data:e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    this.props.fetchWeather(this.state.data);
    this.setState({data: ''});

  }

  render(){
    return (
      <form  onSubmit={this.onFormSubmit}className="input-group">
        <input placeholder="Search" className="form-control"
          value={this.state.data} onChange={this.onInputChange} />

        <span className="input-group-btn">
          <button type="submit" className="bnt bnt-secondary">Submit</button>
        </span>
      </form>
    );
  }
}




function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchWeather}, dispatch);
}

export default connect( null,mapDispatchToProps)(SearchBar);
