import { Title } from "@/type/type";

const SectionTitle = ({ title, subtitle, description }: Title) => {
  return (
    <div>
      <div className="flex justify-center text-center">
        <p className="uppercase font-bold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">
          {title}
        </p>
      </div>
      <h2 className="mt-6 text-center font-serif text-3xl md:text-5xl">
        {subtitle}
      </h2>
      <p className="mt-4 text-white/60 md:text-lg lg:text-xl md:max-w-md mx-auto text-center">
        {description}
      </p>
    </div>
  );
};

export default SectionTitle;
