import { cls } from "@/lib/classnames";
import { HTMLAttributes, InputHTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLInputElement> &
  InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: Props) => {
  const classNames = cls([
    "rounded-3xl bg-white text text-gray-500",
    className,
  ]);

  return <input {...props} className={classNames} />;
};

export default Input;
