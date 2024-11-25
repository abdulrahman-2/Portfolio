import Card from "@/components/Card";
import SectionTitle from "@/components/SectionTitle";
import { services } from "@/data/servicesData";
import CheckIcon from "@/assets/icons/check-circle.svg";
import StarIcon from "@/assets/icons/star.svg";

const Services = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionTitle
          title="Services"
          subtitle="What I Offer"
          description="I offer a range of services to help you bring your digital vision to life."
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex flex-none gap-8">
            {services.map((service) => (
              <Card key={service.title} className="p-6">
                <div className="flex flex-col">
                  <div className="inline-flex items-center gap-2">
                    <StarIcon className="size-9 text-emerald-300" />
                    <h3 className="font-serif text-2xl md:text-3xl">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-white/60 text-sm lg:text-base max-w-xs mt-2">
                    {service.description}
                  </p>
                </div>
                <div className="mt-6 flex flex-col gap-2">
                  {service.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex gap-2 text-sm text-white/90 md:text-base"
                    >
                      <CheckIcon className="size-5 md:size-6" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
