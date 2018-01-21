import React, { Component } from 'react';
import bind from 'autobind-decorator';
import { Button } from '../../elements';
import { NavLink } from 'react-router-dom';

export default class Main extends Component {
  state = { url: '' };

  @bind
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { url } = this.state;

    return(
      <div className="container">
        <div className="f-col-now margin-top-24 margin-bottom-24 j-content-center a-i-center">
          <div className="f-row-now a-i-center j-content-center">
            <label htmlFor="url">Enter the articleURL</label>
            <input className="margin-left-24 margin-right-24" type="text" value={url} onChange={this.handleChange} name="url"/>
            <NavLink to={url}>
              <Button
                title="Submit"
                type="primary"
              />
            </NavLink>
          </div>
        </div>
        <span className="f-row-now j-content-center margin-bottom-24">OR</span>
        <NavLink className="f-row-now j-content-center" to="/fb?articleURL=http://www.dagbladet.no/kjendis/supermodellen-ble-beskyldt-for-a-ikke-tipse-ett er-et-barbesok-na-svarer-hun-pa-kritikken/68573788">
          <Button
            title="Navigate"
            type="primary"
          />
        </NavLink>
      </div>
    );
  }
}