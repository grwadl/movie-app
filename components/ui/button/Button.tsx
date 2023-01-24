import { cls } from "@/lib/classnames";
import { ButtonHTMLAttributes, HTMLAttributes } from "react";

type Props = HTMLAttributes<HTMLButtonElement> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, ...props }: Props) => (
  <button
    {...props}
    className={cls(["rounded-3xl text-base font-bold", className])}
  />
);

export default Button;
