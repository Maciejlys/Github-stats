import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Flex } from "../Styled-components/Flex";
import { Section } from "../Styled-components/Section";
import { Header, UserStyles } from "../Styled-components/UserStyles";

interface UserProps {}

export const User: React.FC<UserProps> = () => {
  const { user } = useContext(AppContext);
  const {
    avatar_url,
    html_url,
    name,
    login,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = user;
  return (
    <Section>
      <h4>User</h4>
      <UserStyles>
        <Flex dir="column">
          <Header>
            <Flex dir="row" gap="1rem" just="flex-start">
              <img src={avatar_url} alt={name} />
              <Flex dir="column" gap="0.5rem">
                <p>{name}</p>
                <p>@{login}</p>
              </Flex>
              <a href={html_url} target="_blank">
                Follow
              </a>
            </Flex>
          </Header>
          <p>{location}</p>
          <p>{company}</p>
        </Flex>
      </UserStyles>
    </Section>
  );
};
