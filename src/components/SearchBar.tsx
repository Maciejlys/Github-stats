import React, { useState, useRef } from "react";
import { Flex } from "../Styled-components/Flex";
import { SearchBarStyles } from "../Styled-components/SearchBarStyles";

interface SearchBarProps {}

export const SearchBar: React.FC<SearchBarProps> = () => {
  const inputField = useRef(document.createElement("input"));
  const [item, setItem] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    inputField.current.focus();
  };

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
        </Flex>
      </form>
    </SearchBarStyles>
  );
};
