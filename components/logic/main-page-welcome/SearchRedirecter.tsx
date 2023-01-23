"use client";
import SearchInput from "@/components/ui/input/SearchInput";
import { useRouter } from "next/navigation";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLDivElement>;

const SearchRedirecter = (props: Props) => {
  const { push } = useRouter();
  const onClickSearch = (search: string) => search && push("/search?" + search);
  return <SearchInput {...props} onClickSearch={onClickSearch} />;
};

export default SearchRedirecter;
