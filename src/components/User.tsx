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
      <UserStyles>
        <Header>
          <img src={avatar_url} alt={name} />
          <p>{name}</p>
          <a href={html_url} target="_blank">
            Follow
          </a>
        </Header>
        <p>{location}</p>
        <p>{company}</p>
      </UserStyles>
    </Section>
  );
};
