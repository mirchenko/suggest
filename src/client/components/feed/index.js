import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchParagraphs } from '../../actions/paragraphs';
import { Loader } from "../../elements";
import Content from './content';

const mapStateToProps = state => ({ paragraphs: state.paragraphs });

@connect(mapStateToProps, { fetchParagraphs })
export default class Feed extends Component {

  componentDidMount() {
    console.log(this.props);
    this.props.fetchParagraphs(this.props.location.search);
  }

  render() {
    const { paragraphs: { isFetching, data } } = this.props;
    return (
      <div className="container margin-top-24 margin-bottom-24">
        {
          isFetching
            ? <Loader/>
            : <Content {...data}/>
        }
      </div>
    );
  }
}