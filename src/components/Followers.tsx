import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { FollowersStyle } from "../Styled-components/FollowersStyle";
import { Section } from "../Styled-components/Section";
import { Follower } from "./Follower";

interface FollowersProps {}

export const Followers: React.FC<FollowersProps> = () => {
  const { followers } = useContext(AppContext);
  return (
    <Section>
      <h4>Followers</h4>
      <FollowersStyle>
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower} />;
        })}
      </FollowersStyle>
    </Section>
  );
};
