"use client";
import { cls } from "@/lib/classnames";
import { ChangeEvent, HTMLAttributes, useState } from "react";
import Button from "../button/Button";
import Input from "./Input";

type Props = {
  onClickSearch: (value: string) => void;
} & HTMLAttributes<HTMLDivElement>;

function SearchInput(props: Props) {
  const [inputValue, setInputValue] = useState("");

  const { onClickSearch, className, ...other } = props;
  const classNames = cls(["search-input-wrap relative", className]);

  const onChangeInput = (e: ChangeEvent<HTMLInputElement>) =>
    setInputValue(e.target.value);
  const clickHandler = () => onClickSearch(inputValue);

  return (
    <div {...other} className={classNames}>
      <Input
        value={inputValue}
        onChange={onChangeInput}
        className="w-full py-3 pl-6 pr-32 outline-none"
        type="search"
      />
      <Button
        role="search"
        onClick={clickHandler}
        className="absolute right-0 top-0 h-full w-24 text-white bg-green-blue"
        type="button"
      >
        Search
      </Button>
    </div>
  );
}

export default SearchInput;
