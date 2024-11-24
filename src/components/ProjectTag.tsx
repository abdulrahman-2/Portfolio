import { TagType } from "@/type/type";

const ProjectTag = ({ name, onClick, isSelected }: TagType) => {
  const buttonStyles = isSelected
    ? "bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
    : "";
  return (
    <button
      className={`${buttonStyles} nav-link`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
