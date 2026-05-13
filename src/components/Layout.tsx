import { useState, type ReactNode } from "react";
import soundOn from "../assets/images/sound--on.svg";
import soundOff from "../assets/images/sound--off.svg";

interface Props {
  children: ReactNode;
}

export const Layout = ({ children }: Props) => {
  const [isSoundOn, setIsSoundOn] = useState(false);

  return (
    <div className="flex flex-col bg-orange-100 w-screen h-screen">
      <div className="flex justify-end p-4 md:p-8">
        <button
          className="p-0 border-none bg-transparent"
          onClick={() => setIsSoundOn(!isSoundOn)}
        >
          <img
            src={isSoundOn ? soundOn : soundOff}
            alt="button"
            className="w-8 h-8 object-cover"
          />
        </button>
      </div>
      {children}
    </div>
  );
};
