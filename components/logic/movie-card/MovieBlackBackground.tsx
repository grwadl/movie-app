"use client";
import { useEffect, useRef } from "react";

type Props = {
  onCloseMenu: (e?: React.MouseEvent<HTMLDivElement>) => void;
  children: React.ReactNode;
};

const MovieBlackBackground = ({ onCloseMenu, children }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickListener = (e: MouseEvent) => {
      if (!e.target || !ref.current) return;
      if (!ref.current.parentElement?.contains(e.target as Node)) onCloseMenu();
    };

    document.addEventListener("click", clickListener);

    return () => {
      document.removeEventListener("click", clickListener);
    };
  }, []);

  return (
    <div>
      <div
        onClick={(e) => e.target === e.currentTarget && onCloseMenu(e)}
        ref={ref}
        className="blurred-bg absolute top-0 left-0 z-[1] bg-black w-full h-[calc(100%_-_56px)] opacity-60 blur-sm overflow-hidden block"
      />
      {children}
    </div>
  );
};

export default MovieBlackBackground;
