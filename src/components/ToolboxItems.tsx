import { toolbox } from "@/data/AboutData";
import TechIcon from "./TechIcon";
import { twMerge } from "tailwind-merge";

const ToolboxItems = ({
  className,
  itemWrapperClassName,
}: {
  className?: string;
  itemWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none py-0.5 gap-6 pr-6",
          itemWrapperClassName
        )}
      >
        {toolbox.map((tool) => (
          <div
            key={tool.title}
            className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
          >
            <TechIcon component={tool.icon} />
            <div className="font-semibold">{tool.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolboxItems;
