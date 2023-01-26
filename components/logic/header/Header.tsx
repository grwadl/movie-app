import { cls } from "@/lib/classnames";
import Link from "next/link";
import React from "react";
import { links } from "./mock/links";

type Props = React.HTMLAttributes<HTMLDivElement>;

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
