import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from '../../elements';
import { fetchEntries, patchEntry, deleteEntry } from '../../actions/entries';
import Content from './content';

const mapStateToProps = state => ({ entries: state.entries });


@connect(mapStateToProps, { fetchEntries, patchEntry, deleteEntry })
export default class Results extends Component {
  state = { approved: false };

  componentDidMount() {
    const q = this.props.location.search || '';
    this.props.fetchEntries(q);
    this.setState({ approved: q.indexOf('showApproved=true') >= 0 });
  }


  render() {
    const { approved } = this.state;
    const { entries: { isFetching, data }, patchEntry, deleteEntry } = this.props;
    return(
      <div className="container margin-top-24 margin-bottom-24">
        {
          isFetching
            ? <Loader/>
            : <Content data={data} patchEntry={patchEntry} deleteEntry={deleteEntry} approved={approved}/>
        }
      </div>
    );
  }
}