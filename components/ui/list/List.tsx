import React from "react";

type Props<T> = {
  list: T[];
  renderFunc: (item: T) => React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

function List<T>(props: Props<T>) {
  const { list, renderFunc, className, ...other } = props;

  return (
    <div {...other} className={className}>
      {list.map(renderFunc)}
    </div>
  );
}

export default List;
