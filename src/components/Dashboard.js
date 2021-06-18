import React, { Component } from "react";
import { connect } from 'react-redux';
import Tweet from "./Tweet";

class Dashboard extends Component {
  render() {
      const { tweets, tweetIDs } = this.props;

    return (
      <div>
        <h3>Tweet IDs: </h3>
        <ul>
          {tweetIDs.map((id) => (
            <li key={id}><Tweet id={id}/></li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ tweets }) {
    return{
  tweetIDs : Object.keys(tweets),
  tweets: tweets
}}

export default connect(mapStateToProps)(Dashboard);