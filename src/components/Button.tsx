import { ReactNode } from "react";

type buttonProps = {
  children: ReactNode;
};
export default function Button({ children }: buttonProps) {
  return (
    <button
      className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gray-800/30 backdrop-blur-lg px-2 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-105 border border-white/30 hover:border-c4"
      aria-label="button"
    >
      <span className="text-md text-darktext dark:text-white">{children}</span>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
        <div className="relative h-full w-10 bg-white/20"></div>
      </div>
    </button>
  );
}
