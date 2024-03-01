import React, { ChangeEvent } from "react";

type SearchPropsType = {
  value: string
  setSearchedValue: (value: string) => void
}
function SearchPost({setSearchedValue, value}: SearchPropsType) {
  const searchOnChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchedValue(e.currentTarget.value)
  };
  return (
    <>
      <label>Search:
        <input value={value} onChange={searchOnChangeHandler}></input></label>
    </>
  );
}

export default SearchPost;