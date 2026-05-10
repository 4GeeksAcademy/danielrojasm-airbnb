import type { ButtonHTMLAttributes, ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const PrimaryButton = ({ children, className = "", ...props }: PrimaryButtonProps) => {
  return (
    <button
      className={`rounded-xl bg-black px-5 py-3 text-sm font-semibold text-white transition hover:bg-black/85 ${className}`.trim()}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
