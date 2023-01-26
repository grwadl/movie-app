import { cls } from "@/lib/classnames";
import Link from "next/link";
import React from "react";

type Props = React.HTMLAttributes<HTMLDivElement>;

const links: { href: string; value: string; className?: string }[] = [
  {
    href: "/",
    value: "MoviesDB",
    className: "font-bold",
  },
  {
    href: "/movie",
    value: "Movies",
  },
  {
    href: "/tv-shows",
    value: "Tv Shows",
  },
  {
    href: "/people",
    value: "People",
  },
];

const Header = ({ className, ...props }: Props) => {
  const headerClassnames = cls([
    "z-[20] bg-dark-blue py-5 text-white",
    className,
  ]);

  return (
    <header {...props} className={headerClassnames}>
      <div className="padded-section flex justify-between">
        <div className="nav-links flex items-center gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              className={cls([
                "hover:text-gray-400 duration-300",
                link.className,
              ])}
              href={link.href}
            >
              {link.value}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
