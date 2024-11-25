import ArrowUpRight from "@/assets/icons/arrow-up-right.svg";
import grainImage from "@/assets/images/grain.jpg";

const ContactPanner = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="container">
        <div
          className="text-gray-900 bg-gradient-to-r from-emerald-300 to-sky-400 
          py-8 px-10 rounded-3xl text-center relative overflow-hidden z-0 md:text-left"
        >
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">{`Let's create something amazing together`}</h2>
              <p className="text-sm md:text-base mt-2">
                {`Ready to bring your next project to life? Let's connect and discuss how I can help you achieve your goals.`}{" "}
              </p>
            </div>
            <div>
              <a
                className="inline-flex items-center gap-2 border border-gray-900 text-white bg-gray-900 px-6 h-12 rounded-xl"
                href="#contact"
              >
                <span className="font-semibold w-max">Contact Me</span>
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPanner;
