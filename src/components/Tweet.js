import React, { Component } from "react";
import { connect } from "react-redux";
import { formatTweet, formatDate } from "../utils/helpers";
import { TiArrowBackOutline } from "react-icons/ti/index";
import { TiHeartOutline } from "react-icons/ti/index";
import { TiHeartFullOutline } from "react-icons/ti/index";
import { handleToggleTweet } from "../actions/tweets"

class Tweet extends Component {
  handleLike = (e) => {
    e.preventDefault();

//const { dispatch , id, authedUser, hasLiked } = this.props;
const { dispatch, tweet, authedUser } = this.props;
dispatch(handleToggleTweet({
      id: tweet.id,
      hasLiked: tweet.hasLiked,
      authedUser
    }))
  }
//dispatch(handleToggleTweet(id, authedUser, hasLiked));

  render() {
    const { authedUser, tweet, user } = this.props;
    return (
      <div className="tweet">
        <img className="avatar" src={user.avatarURL} />
        <div className="tweet-info">
          <span> {tweet.name}</span>
          <div>{formatDate(tweet.timestamp)}</div>
          {tweet.parent && (
            <button className="replying-to">
              Replying to @{tweet.parent.author}
            </button>
          )}
          <p>{tweet.text}</p>
        </div>
        <div className="tweet-icons">
          <TiArrowBackOutline className="tweet-icon" />
          <span>{tweet.replies !== 0 && tweet.replies}</span>
          <button className="heart-button" onClick={this.handleLike}>
            {tweet.hasLiked === true ? (
              <TiHeartFullOutline className="tweet-icon" color="red" />
            ) : (
              <TiHeartOutline className="tweet-icon" />
            )}
            <span>{tweet.likes !== 0 && tweet.likes}</span>
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({tweets, authedUser, users}, {id}) {
    const tweet = tweets[id];
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null;
    const user = users[tweet.author];
  return {
    authedUser,
    tweet: tweet ? formatTweet(tweet, users[tweet.author], authedUser, parentTweet) : null,
    user
  };
}

export default connect(mapStateToProps)(Tweet)