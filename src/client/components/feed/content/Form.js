import React, { Component } from 'react';
import bind from 'autobind-decorator';
import { connect } from 'react-redux';
import { postEntry } from '../../../actions/entries';
import { Textarea, Button } from "../../../elements";


@connect(null, { postEntry })
export default class Form extends Component {
  state = {
    text: '',
    isLoading: false,
    errors: {}
  };

  @bind
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  @bind
  handleSubmit(e) {
    e.preventDefault();
    const { text } = this.state;
    if(text.length < 1) {
      this.setState({ errors: { text: { message: 'Text must be fulfilled!' } } })
    } else {
      this.setState({ errors: {}, isLoading: true });
      const { postEntry, paragraph, articleURL } = this.props;
      postEntry({ articleURL, originalText: paragraph, usersText: text })
        .then(res => {
          this.setState({ isLoading: false, text: '' });
        })
        .catch(e => console.log(e));
    }
  }

  render() {
    const { text, isLoading, errors } = this.state;
    return(
      <div className="f-col-now">
        <h4>Users version</h4>
        <form onSubmit={this.handleSubmit}>
          <Textarea
            name="text"
            onChange={this.handleChange}
            value={text}
            error={errors.text}
          />
          <Button
            type="primary"
            title="Send Changes"
            isLoading={isLoading}
          />
        </form>
      </div>
    );
  }
}