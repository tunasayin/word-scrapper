import { FC, ReactElement, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import $ from "jquery";

import "../../styles/search_input.scss";

interface SearchInputArgs {
  input?: string;
}

const SearchInput: FC<{ input?: string }> = ({
  input,
}: SearchInputArgs): ReactElement => {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();

  const Search = (): void => {
    const word = $(".search-input-in").val()?.toString()?.trim();

    if (!word) return;

    navigate(`/search/${word}`);
  };

  useEffect(() => {
    $(document).on("keydown", (key) => {
      if (key.code === "Enter") Search();
    });
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (input) setInputVal(input);
  }, [input]);

  return (
    <div className="search-input-container">
      <AiOutlineSearch onClick={Search} className="search-input-icon" />
      <input
        value={inputVal}
        onChange={(e) => {
          setInputVal(e.target.value);
        }}
        className="search-input-in"
        type="text"
      />
    </div>
  );
};

export default SearchInput;
