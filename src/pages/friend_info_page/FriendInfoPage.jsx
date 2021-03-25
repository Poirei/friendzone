/* eslint-disable no-unused-vars */
import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import InfoCard from "../../components/cards/info_card/InfoCard";
import { FriendContext } from "../../context/FriendContext";
import "./FriendInfoPage.scss";

const FriendInfoPage = (props) => {
  const { state, dispatch } = useContext(FriendContext);
  const { first_name } = props.match.params;

  return (
    <div className="info-card-container">
      {state.friends &&
        state.friends
          .filter((friend) => friend.name.first === first_name)
          .map((friend, _idx) => (
            <Grid xs={12} sm={6} md={3}>
              <InfoCard
                photoUrl={friend.picture.large}
                name={`${friend.name.first} ${friend.name.last}`}
                gender={friend.gender}
                email={friend.email}
                age={friend.dob.age}
                phone={friend.phone}
                cell={friend.cell}
                street={`${friend.location.street.number}, ${friend.location.street.name}`}
                city={friend.location.city}
                state={friend.location.state}
                country={friend.location.country}
              />
            </Grid>
          ))}
    </div>
  );
};

export default FriendInfoPage;
