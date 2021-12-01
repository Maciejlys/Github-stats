import React from "react";
import { AppContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import styled from "styled-components";
import { Flex } from "../Styled-components/Flex";

interface HighlightedInfoProps {}

export const HighlightedInfo: React.FC<HighlightedInfoProps> = () => {
  const { user } = React.useContext(AppContext);
  const { public_repos, followers, following, public_gists } = user;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];
  return (
    <Flex>
      <Wrapper className="section-center">
        {items.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </Wrapper>
    </Flex>
  );
};

interface ItemProps {
  icon: any;
  label: string;
  value: number;
  color: string;
}
const Item: React.FC<ItemProps> = ({ icon, label, value, color }) => {
  return (
    <article className="item">
      <span className={color}>{icon}</span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

const Wrapper = styled.section`
  max-width: 70rem;
  @media (max-width: 1100px) {
    max-width: 40rem;
  }

  @media (max-width: 500px) {
    max-width: 25rem;
  }
  display: flex;
  justify-content: center;
  gap: 2rem 2rem;
  width: 100%;
  flex-wrap: wrap;
  > * {
    flex: 1 1 10%;
  }
  .item {
    max-width: 71%;
    border-radius: 0.25rem;
    padding: 1rem 2rem;
    background: #161b22;
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: hsl(186, 100%, 94%);
      color: hsl(185, 62%, 45%);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;
