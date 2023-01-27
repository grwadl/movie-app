import { cls } from "@/lib/classnames";

type Props = {
  className?: string;
};

const Loader = ({ className, ...other }: Props) => {
  const loaderClassnames = cls([
    "rounded-full overflow-hidden h-6 w-6 border-4 border-t-black border-b-black border-l-black border-r-transparent border-solid animate-spin",
    className,
  ]);

  return <div {...other} className={loaderClassnames} />;
};

export default Loader;
