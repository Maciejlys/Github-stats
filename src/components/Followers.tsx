import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Flex } from "../Styled-components/Flex";
import { FollowersStyle } from "../Styled-components/FollowersStyle";
import { Follower } from "./Follower";

interface FollowersProps {}

export const Followers: React.FC<FollowersProps> = () => {
  const { followers } = useContext(AppContext);
  return (
    <FollowersStyle>
      {followers.map((follower) => {
        return <Follower key={follower.id} {...follower} />;
      })}
    </FollowersStyle>
  );
};
