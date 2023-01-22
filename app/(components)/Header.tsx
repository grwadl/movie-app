import { cls } from "@/lib/classnames";
import Link from "next/link";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const Header = ({ className, ...props }: Props) => {
  const headerClassnames = cls([" bg-dark-blue py-5 text-white", className]);

  return (
    <header {...props} className={headerClassnames}>
      <div className="padded-section flex justify-between">
        <div className="nav-links flex items-center gap-4">
          <Link href="/" className="text-xl hover:text-gray-400 duration-300">
            MoviesDB
          </Link>
          <Link href="/movies" className="hover:text-gray-400 duration-300">
            Movies
          </Link>
          <Link href="/movies" className="hover:text-gray-400 duration-300">
            Tv Shows
          </Link>
          <Link href="/movies" className="hover:text-gray-400 duration-300">
            People
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
