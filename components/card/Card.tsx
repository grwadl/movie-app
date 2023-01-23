import { cls } from "@/lib/classnames";
import Image from "next/image";
import React from "react";

type Props = {
  img: string;
} & React.HtmlHTMLAttributes<HTMLDivElement>;

function Card({ className, img, ...props }: Props) {
  const cardClassnames = cls(["relative cursor-pointer", className]);

  return (
    <div {...props} className={cardClassnames}>
      <Image
        width={300}
        height={300}
        className="absolute w-full h-full object-cover top-0 left-0 z-[-1]"
        src={img}
        placeholder="blur"
        blurDataURL="https://davidkoepp.com/wp-content/themes/blankslate/images/Movie%20Placeholder.jpg"
        alt="poster image"
      />
      {props.children}
    </div>
  );
}

export default Card;
