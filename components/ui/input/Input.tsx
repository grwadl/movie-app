import { cls } from "@/lib/classnames";
import { HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
  const classNames = cls(["rounded-lg bg-white text text-gray-500", className]);

  return <input {...props} className={classNames} />;
};

export default Input;
