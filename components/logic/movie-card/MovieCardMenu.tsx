"use client";

import { cls } from "@/lib/classnames";
import { useState } from "react";
import MovieBlackBackground from "./MovieBlackBackground";

const MovieCardMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const popUpMenuClassnames = cls([
    "absolute top-10 -right-5 rounded-sm z-[2] bg-white",
    isMenuOpen ? "block" : "hidden",
  ]);

  const onOpenMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsMenuOpen(true);
  };

  const onCloseMenu = (e?: React.MouseEvent<HTMLDivElement>) => {
    e?.preventDefault();
    setIsMenuOpen(false);
  };

  return (
    <>
      {isMenuOpen && (
        <MovieBlackBackground onCloseMenu={onCloseMenu}>
          <div
            className={popUpMenuClassnames}
            onClick={(e) => e.preventDefault()}
          >
            <div className="py-2 hover:bg-slate-300 duration-300 px-4 border-b border-gray-400">
              Favorite
            </div>
            <div className="py-2 hover:bg-slate-300 duration-300 px-4">
              Add to list
            </div>
          </div>
        </MovieBlackBackground>
      )}
      <div
        onClick={onOpenMenu}
        className="menu rounded-full bg-slate-500 text-black hover:bg-green-blue duration-300 absolute top-2 right-2 flex justify-center items-center w-6 h-6 leading-[0px]"
      >
        <span className="-mt-2 tracking-wide">...</span>
      </div>
    </>
  );
};

export default MovieCardMenu;
