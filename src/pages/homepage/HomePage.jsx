/* eslint-disable react-hooks/exhaustive-deps */
import { Grid } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import FriendCard from "../../components/cards/friend_card/FriendCard";
import { data } from "../../data";
import { FriendContext } from "../../context/FriendContext";

const HomePage = () => {
  const { state, dispatch } = useContext(FriendContext);

  useEffect(() => {
    fetchFriends();
  }, []);

  const fetchFriends = () => {
    let friends = data;
    dispatch({
      type: "GET_FRIENDS",
      payload: friends,
    });
  };

  return (
    <div className="home">
      <Grid container spacing={4} justify="center" alignContent="center">
        {state.friends &&
          state.friends.map((friend) => (
            <Grid key={friend.id.value} item xs={12} sm={6} md={4}>
              <Link
                to={{
                  pathname: `friends/${friend.name.first}`,
                  state: friend.name.first,
                }}
              >
                <FriendCard photo={friend.picture.large} />
              </Link>
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default HomePage;
