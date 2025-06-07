import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
}

const Header: React.FC<Props> = ({ className }) => {
  return <div className={cn("", className)}>Header</div>;
};

export default Header;
