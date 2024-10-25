import { ReactNode } from "react";

export type articleCardProps = {
  image: string;
  tag: string;
  title: string;
  summary: string;
  authorImage: string;
  authorName: string;
  publishDate: string;
};
export type newsCardProps = {
  tag: string;
  title: string;
  summary: string;
  publishDate: string;
};
export type TestimonialCardProps = {
  comment: string;
  image: string;
  name: string;
};

export type ServicesCardProps = {
  icon: ReactNode;
  title: string;
  summary: string;
  noClamp?: boolean;
  dataAos?: string;
  dataAosDelay?: string;
};

export type breadcrumbProps = {
  links: {
    pathName: string;
    path: string;
  }[];
};
