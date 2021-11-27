import React from "react";
import { Flex } from "../Styled-components/Flex";
import styled from "styled-components";

interface FollowerProps {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export const Follower: React.FC<FollowerProps> = ({
  avatar_url,
  login,
  html_url,
}) => {
  return (
    <FollowerStyle>
      <Flex gap="5rem" just="flex-start">
        <img src={avatar_url} alt={login} />
        <p>{login}</p>
        <a href={html_url}>Follow</a>
      </Flex>
    </FollowerStyle>
  );
};

export const FollowerStyle = styled.div`
  border: solid 1px #30363d;
  border-radius: 1rem;
  padding: 1rem;
`;
