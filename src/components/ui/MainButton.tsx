import { ChevronRight } from "lucide-react";
import { FC } from "react";

interface MainButtonProps {
  text: string;
}

const MainButton: FC<MainButtonProps> = ({ text }) => {
  return (
    <button className="default-btn w-fit text-base font-thin">
      <span className="bg-primary rounded-md p-1">
        <ChevronRight size={40} />
      </span>
      {text}
    </button>
  );
};

export default MainButton;
