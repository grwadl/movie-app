import Loader from "@/components/ui/loader/Loader";
import { cls } from "@/lib/classnames";

type Props = {
  className?: string;
};

const Loading = ({ className, ...other }: Props) => {
  const loaderWrapperClassnames = cls([
    "loader-wrap padded-section w-full h-full flex justify-center items-center",
    className,
  ]);

  return (
    <div className={loaderWrapperClassnames}>
      <Loader
        {...other}
        className="absolute h-10 w-10 border-l-dark-blue border-t-dark-blue border-b-dark-blue"
      />
    </div>
  );
};

export default Loading;
