import grainImage from "@/assets/images/grain.jpg";
import { CardProps } from "@/type/type";
import { twMerge } from "tailwind-merge";

const Card: React.FC<CardProps> = ({ className, children, style }) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 overflow-hidden rounded-3xl relative z-0 after:content-[''] after:absolute after:inset-0 after:rounded-3xl after:outline after:outline-2 after:outline-white/20 after:-outline-offset-2 after:pointer-events-none",
        className
      )}
      style={style}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
