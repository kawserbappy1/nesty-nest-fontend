import { MoveRight } from "lucide-react";
import type { ReactNode } from "react";
import { Link } from "react-router";

type MyButtonProps = {
  to: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const MyButton = ({ to, onClick, className = "", children }: MyButtonProps) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={`inline-flex items-center gap-3 px-4 py-2 text-sm cursor-pointer group transition-all duration-300 tracking-wide rounded-full bg-primary text-white ${className}`}
    >
      {children}
      <span className="flex items-center justify-center bg-white text-black rounded-full w-6 h-6 group-hover:translate-x-2 transition-all duration-500 ease-in-out">
        <MoveRight size={14} />
      </span>
    </Link>
  );
};

export default MyButton;
