import React from "react";
import {
  FeedListHeader,
  FeedListHeaderContent,
  FeedListMedia,
  FeedListTxt,
  Feedliststyle,
} from "../styles/feedliststyle";

const FeedList = ({ title, children }) => {
  return (
    <Feedliststyle>
      <FeedListHeader>
        <FeedListHeaderContent>
          <img
            src={
              process.env.PUBLIC_URL + "../assets/images/bt_feedlist_user.svg"
            }
            alt=""
          />
          <h2>{children}</h2>
        </FeedListHeaderContent>
        <img
          src={process.env.PUBLIC_URL + "../assets/images/bt_etc_icon.svg"}
          alt=""
        ></img>
      </FeedListHeader>
      <FeedListMedia>
        <img
          src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
          alt=""
          className="feed-img-before"
        />
        <img
          src={process.env.PUBLIC_URL + "../assets/images/bt_media.svg"}
          alt=""
          className="feed-img-after"
        />
      </FeedListMedia>
      <FeedListTxt>
        <h2>{title}</h2>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor.
        </h3>
      </FeedListTxt>
    </Feedliststyle>
  );
};

export default FeedList;
