import React, { useState, useRef, useContext } from "react";
import { AppContext } from "../context/context";
import { Flex } from "../Styled-components/Flex";
import { SearchBarStyles } from "../Styled-components/SearchBarStyles";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const inputField = useRef(document.createElement("input"));
  const [item, setItem] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (item === "") return;

    searchGithubUser(item);
    inputField.current.focus();
  };
  const { limit, searchGithubUser } = useContext(AppContext);

  return (
    <SearchBarStyles>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Flex dir="row">
          <input
            maxLength={30}
            type="text"
            value={item}
            ref={inputField}
            placeholder="Enter github user"
            onChange={(e) => setItem(e.target.value)}
            autoFocus
          />
          <button type="submit">Add</button>
          <h1>Requests left: {limit}/60</h1>
        </Flex>
      </form>
    </SearchBarStyles>
  );
};
