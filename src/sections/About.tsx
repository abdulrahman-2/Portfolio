"use client";

import Card from "@/components/Card";
import CardTitle from "@/components/CardTitle";
import SectionTitle from "@/components/SectionTitle";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import { hobbies } from "@/data/AboutData";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import ToolboxItems from "@/components/ToolboxItems";
import { motion } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const constrainRef = useRef<HTMLDivElement>(null);
  return (
    <div id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="About Me"
          subtitle="A Glimpse into My World"
          description="Learn more about me who I am, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardTitle
                title="My Reads"
                description="Explore the books shaping my perspectives."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardTitle
                title="My Toolbox"
                description="Explore the technology and tools I use to craft exceptional digital experiences."
              />
              <ToolboxItems itemWrapperClassName="animate-move-left [animation-duration:30s]" />
              <ToolboxItems
                className="mt-6"
                itemWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardTitle
                className="px-6 py-6"
                title="Beyond the Code"
                description="Explore my interests and hobbies beyond the digital realm."
              />
              <div className="relative flex-1" ref={constrainRef}>
                {hobbies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="absolute inline-flex items-center gap-2 px-6 py-1.5 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constrainRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <div>{hobby.icon}</div>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map"
                className="w-full h-full object-cover object-left-top"
              />
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 
                -translate-y-1/2 rounded-full 
                after:content-[''] after:absolute after:inset-0
                after:rounded-full after:outline after:outline-2
              after:outline-gray-950/30 after:-outline-offset-2
              "
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 -z-10"></div>
                <Image src={smileMemoji} alt="Memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
