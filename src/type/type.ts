import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  year: string;
  results: { title: string }[];
  link: string;
  image: StaticImageData;
  tag: string[];
};

export type Title = {
  title: string;
  subtitle: string;
  description: string;
};

export type TagType = {
  name: string;
  isSelected: boolean;
  onClick: (tag: string) => void;
};

export type Testimonial = {
  name: string;
  title: string;
  description: string;
  image: StaticImageData;
};
