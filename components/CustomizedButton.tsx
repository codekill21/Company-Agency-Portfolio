import React from "react";
import { Link } from "@nextui-org/react";

interface CustomizedButtonProps {
  title: string;
  uri: string;
}

const CustomizedButton = ({ title, uri }: CustomizedButtonProps) => {
  return (
    <div className="drop-shadow-xl">
      <Link
        className="font-bold bg-primary p-6 h-12 rounded-full text-white"
        color="foreground"
        href={uri}
      >
        {title}
      </Link>
    </div>
  );
};

export default CustomizedButton;
