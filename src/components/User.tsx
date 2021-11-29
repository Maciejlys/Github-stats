import React, { useContext } from "react";
import { AppContext } from "../context/context";
import { Section } from "../Styled-components/Section";
import { Header, UserStyles } from "../Styled-components/UserStyles";
import { MdLocationOn } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { BsLink } from "react-icons/bs";

export const User: React.FC = () => {
  const { user } = useContext(AppContext);
  const { avatar_url, html_url, name, company, bio, location, blog } = user;
  return (
    <Section>
      <h4>User</h4>
      <UserStyles>
        <Header>
          <img src={avatar_url} alt={name} />
          <p>{name || "John Doe"}</p>
          <a className="follow" href={html_url} target="_blank">
            Follow
          </a>
        </Header>
        <div className="container">
          <div className="bio">{bio}</div>
          <div className="info">
            <MdLocationOn />
            <p>{location || "Thats a secret"}</p>
          </div>
          <div className="info">
            <FaRegBuilding />
            <p>{company}</p>
          </div>
          <div className="info">
            <BsLink />
            <p>{blog ? <a href={blog}>{blog}</a> : ""}</p>
          </div>
        </div>
      </UserStyles>
    </Section>
  );
};
